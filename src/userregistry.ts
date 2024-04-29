import
{
    BigInt,
    store
} from "@graphprotocol/graph-ts"

import
{
    AffiliatePayment as AffiliatePaymentEvent,
    AffiliatePercentChanged as AffiliatePercentChangedEvent,
    ArbitratorRegistryChanged as ArbitratorRegistryChangedEvent,
    Deployed as DeployedEvent,
    OwnershipTransferred as OwnershipTransferredEvent,
    PartnerSet as PartnerSetEvent,
    PartnerDeleted as PartnerDeletedEvent,
    ReferrerSet as ReferrerSetEvent,
    FeeChanged as FeeChangedEvent,
} from "../generated/userregistry/userregistry"

import
{
    System,
    Partner,
    AffiliateAction,
} from "../generated/schema"

import
{
    loadSystem
} from "./system"

import
{
    loadUser
} from "./user"

export function handleFeeChanged(event: FeeChangedEvent): void
{
    const s = loadSystem("nftprotect");
    if(event.params.feeType == 0)
    {
        s.feeEntry = event.params.feeWei;
    }
    else if(event.params.feeType == 1)
    {
        s.feeOpenCase = event.params.feeWei;
    } else {
        s.feeFetchRuling = event.params.feeWei;
    }
    s.save();
}

export function handleAffiliatePayment(event: AffiliatePaymentEvent): void {
    let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString();
    let payment = new AffiliateAction(id);
    payment.type = "Payment";
    payment.referral = event.params.from;
    payment.referrer = event.params.to;
    payment.amount = event.params.amountWei;
    payment.timestamp = event.block.timestamp;
    payment.blocknumber = event.block.number;
    payment.txHash = event.transaction.hash;
    payment.save();
    // Add reward to referrer
    let referrer = loadUser(payment.referrer);
    referrer.totalRewards = referrer.totalRewards.plus(payment.amount);
    referrer.save();
}

export function handleAffiliatePercentChanged(event: AffiliatePercentChangedEvent): void
{
    const s = loadSystem("userregistry");
    s.affiliatePercent = event.params.percent;
    s.save();
}

export function handleArbitratorRegistryChanged(event: ArbitratorRegistryChangedEvent): void
{
    const system = loadSystem("userregistry");
    system.arbitratorregistry = event.params.areg;
    system.save();
}

export function handleDeployed(event: DeployedEvent): void
{
    const s = loadSystem("userregistry");
}

export function handleOwnershipTransferred(event: OwnershipTransferredEvent): void
{
    // do nothing
}

export function handlePartnerSet(event: PartnerSetEvent): void
{
    let p = new Partner(event.params.partner.toHex().toString());
    p.discount = event.params.discount;
    p.affiliatePercent = event.params.affiliatePercent;
    p.totalProtected = BigInt.fromI32(0);
    p.save();
}

export function handlePartnerDeleted(event: PartnerDeletedEvent): void
{
    let id = event.params.partner.toHex().toString();
    let p = Partner.load(id);
    store.remove('Partner', id);
}

export function handleReferrerSet(event: ReferrerSetEvent): void
{
    let u = loadUser(event.params.user);
    let referrer = loadUser(event.params.referrer);
    if (event.params.referrer) {
        u.referrer = referrer.id;
    }
    u.save();
    // Add referral to referrer
    referrer.totalReferrals = referrer.totalReferrals.plus(BigInt.fromI32(1));
    referrer.save();
    // Add AffiliateAction    
    let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString();
    let action = new AffiliateAction(id);
    action.type = "Register"; 
    action.referral = event.params.user;
    action.referrer = event.params.referrer;
    action.amount = BigInt.fromI32(0);
    action.timestamp = event.block.timestamp;
    action.blocknumber = event.block.number;
    action.txHash = event.transaction.hash;
    action.save();
}