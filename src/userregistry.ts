import
{
    store
} from "@graphprotocol/graph-ts"

import
{
    AffiliatePayment as AffiliatePaymentEvent,
    AffiliatePercentChanged as AffiliatePercentChangedEvent,
    ArbitratorRegistryChanged as ArbitratorRegistryChangedEvent,
    DIDRegistered as DIDRegisteredEvent,
    DIDUnregistered as DIDUnregisteredEvent,
    Deployed as DeployedEvent,
    OwnershipTransferred as OwnershipTransferredEvent,
    PartnerSet as PartnerSetEvent,
    ReferrerSet as ReferrerSetEvent,
    SuccessorApproved as SuccessorApprovedEvent,
    SuccessorRejected as SuccessorRejectedEvent,
    SuccessorRequested as SuccessorRequestedEvent,
    FeeChanged as FeeChangedEvent,
} from "../generated/userregistry/userregistry"

import
{
    System,
    Partner,
    DID,
    SuccessorRequest
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
    if(event.params.level == 0)
    {
        s.feeBasic = event.params.feeWei;
    }
    else
    {
        s.feeUltra = event.params.feeWei;
    }
    s.save();
}

export function handleAffiliatePayment(event: AffiliatePaymentEvent): void
{
    // do nothing
}

export function handleAffiliatePercentChanged(event: AffiliatePercentChangedEvent): void
{
    const s = loadSystem("userregistry");
    s.affiliatePercent = event.params.percent;
    s.save();
}

export function handleArbitratorRegistryChanged(event: ArbitratorRegistryChangedEvent): void
{
    // do nothing
}

export function handleDIDRegistered(event: DIDRegisteredEvent): void
{
    let d = new DID(event.params.did.toHex().toString());
    d.provider = event.params.provider;
    d.save();
}

export function handleDIDUnregistered(event: DIDUnregisteredEvent): void
{
    store.remove("DID", event.params.did.toHex().toString());
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
    p.save();
}

export function handleReferrerSet(event: ReferrerSetEvent): void
{
    let u = loadUser(event.params.user);
    u.referrer = event.params.referrer;
    u.save();
}

export function handleSuccessorApproved(event: SuccessorApprovedEvent): void
{
    let r = SuccessorRequest.load(event.params.requestId.toString()) as SuccessorRequest;
    r.status = "Accepted";
    r.timestampChange = event.block.timestamp;
    r.blocknumberChange = event.block.number;
    r.save();

    let u = loadUser(r.user);
    u.successor = r.successor;
    u.save();
}

export function handleSuccessorRejected(event: SuccessorRejectedEvent): void
{
    let r = SuccessorRequest.load(event.params.requestId.toString()) as SuccessorRequest;
    r.status = "Rejected";
    r.timestampChange = event.block.timestamp;
    r.blocknumberChange = event.block.number;
    r.save();
}

export function handleSuccessorRequested(event: SuccessorRequestedEvent): void
{
    let r = new SuccessorRequest(event.params.requestId.toString());
    r.user = event.params.user;
    r.successor = event.params.successor;
    r.status = "InDispute";
    r.timestamp = event.block.timestamp;
    r.blocknumber = event.block.number;
    r.save();
}
