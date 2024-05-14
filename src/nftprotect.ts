import
{
    BigInt,
    Address,
    store
} from "@graphprotocol/graph-ts"

import
{
    Approval as ApprovalEvent,
    ApprovalForAll as ApprovalForAllEvent,
    ArbitratorRegistryChanged as ArbitratorRegistryChangedEvent,
    BaseChanged as BaseChangedEvent,
    BurnOnActionChanged as BurnOnActionChangedEvent,
    AllowThirdPartyTransfersChanged as AllowThirdPartyTransfersChangedEvent,
    Deployed as DeployedEvent,
    MetaEvidenceLoaderChanged as MetaEvidenceLoaderChangedEvent,
    OwnershipAdjusted as OwnershipAdjustedEvent,
    OwnershipAdjustmentAnswered as OwnershipAdjustmentAnsweredEvent,
    OwnershipAdjustmentArbitrateAsked as OwnershipAdjustmentArbitrateAskedEvent,
    OwnershipAdjustmentAsked as OwnershipAdjustmentAskedEvent,
    OwnershipRestoreAnswered as OwnershipRestoreAnsweredEvent,
    OwnershipRestoreAsked as OwnershipRestoreAskedEvent,
    OwnershipTransferred as OwnershipTransferredEvent,
    Protected as ProtectedEvent,
    Transfer as TransferEvent,
    Unprotected as UnprotectedEvent,
    UserRegistryChanged as UserRegistryChangedEvent,
    SignatureVerifierChanged as SignatureVerifierChangedEvent,
    MetaEvidenceSet as MetaEvidenceSetEvent
} from "../generated/nftprotect/nftprotect"

import
{
    System,
    Token,
    Request,
    Partner,
    MetaEvidence,
    User
} from "../generated/schema"

import
{
    loadSystem
} from "./system"

import
{
    loadUser
} from "./user"

const nullAddress = Address.fromString("0x0000000000000000000000000000000000000000");

export function handleApproval(event: ApprovalEvent): void
{
    // do nothing
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void
{
    // do nothing
}

export function handleArbitratorRegistryChanged(event: ArbitratorRegistryChangedEvent): void {
    const s = loadSystem("nftprotect");
    s.arbitratorregistry = event.params.areg;
    s.save();
}

export function handleBaseChanged(event: BaseChangedEvent): void
{
    const s = loadSystem("nftprotect");
    s.base = event.params.base;
    s.save();
}

export function handleBurnOnActionChanged(event: BurnOnActionChangedEvent): void
{
    const s = loadSystem("nftprotect");
    s.burnOnAction = event.params.boa;
    s.save();
}

export function handleAllowThirdPartyTransfers(event: AllowThirdPartyTransfersChangedEvent): void
{
    const s = loadSystem("nftprotect");
    s.allowThirdPartyTransfers = event.params.allowed;
    s.save();
}

export function handleDeployed(event: DeployedEvent): void
{
    const s = loadSystem("nftprotect");
}

export function handleMetaEvidenceLoaderChanged(event: MetaEvidenceLoaderChangedEvent): void
{
    // do nothing
}

export function handleOwnershipAdjusted(event: OwnershipAdjustedEvent): void
{
    let t = Token.load(event.params.tokenId.toString()) as Token;
    t.ownerOriginal = loadUser(event.params.newowner).id;
    t.nonce = t.nonce.plus(BigInt.fromI32(1));
    t.save();
}

export function handleOwnershipAdjustmentAnswered(event: OwnershipAdjustmentAnsweredEvent): void
{
    let r = Request.load(event.params.requestId.toString()) as Request;
    r.status = event.params.accept ? "Accepted" : "Rejected";
    r.timestampChange = event.block.timestamp;
    r.blocknumberChange = event.block.number;
    r.save();
    let t = Token.load(r.token) as Token;
    t.nonce = t.nonce.plus(BigInt.fromI32(1));
    t.save();
}

export function handleOwnershipAdjustmentArbitrateAsked(event: OwnershipAdjustmentArbitrateAskedEvent): void
{
    let r = Request.load(event.params.requestId.toString());
    if (!r)
    {
        r = new Request(event.params.requestId.toString());
        r.type = "OwnershipAdjustment";
        let tokenId = event.params.tokenId.toString();
        r.token = tokenId;
        r.newowner = loadUser(event.params.dst).id;
        r.oldowner = (Token.load(event.params.tokenId.toString()) as Token).ownerOriginal;
        r.timestamp = event.block.timestamp;
        r.blocknumber = event.block.number;
        r.status = "Disputed";
        r.save();

        // Load the related Token and update the latestRequest field
        let token = Token.load(tokenId);
        if (token) {
            token.latestRequest = r.id;
            token.save();
        }
    }
    else
    {
        r = r as Request;
        r.timestampChange = event.block.timestamp;
        r.blocknumberChange = event.block.number;
        r.status = "Disputed";
        r.save();
    }
}

export function handleOwnershipAdjustmentAsked(event: OwnershipAdjustmentAskedEvent): void
{
    let r = new Request(event.params.requestId.toString());
    r.type = "OwnershipAdjustment";
    r.status = "Initial";
    let tokenId = event.params.tokenId.toString();
    r.token = tokenId;
    r.newowner = loadUser(event.params.newowner).id;
    r.oldowner = loadUser(event.params.oldowner).id;
    r.metaEvidenceId = 0; // It's always 0 for ownershipAdjustment
    r.timestamp = event.block.timestamp;
    r.blocknumber = event.block.number;
    r.save();

    // Load the related Token and update the latestRequest field
    let token = Token.load(tokenId);
    if (token) {
        token.latestRequest = r.id;
        token.save();
    }
}

export function handleOwnershipRestoreAnswered(event: OwnershipRestoreAnsweredEvent): void
{
    let r = Request.load(event.params.requestId.toString()) as Request;
    r.status = event.params.accept ? "Accepted" : "Rejected";
    r.timestampChange = event.block.timestamp;
    r.blocknumberChange = event.block.number;
    r.save();
    let t = Token.load(r.token) as Token;
    t.nonce = t.nonce.plus(BigInt.fromI32(1));
    if(event.params.accept)
    {
        t.ownerProtected = r.newowner as string;
    }
    t.save();

}

export function handleOwnershipRestoreAsked(event: OwnershipRestoreAskedEvent): void
{
    let r = new Request(event.params.requestId.toString());
    r.type = "OwnershipRestore";
    r.status = "Disputed";
    let tokenId = event.params.tokenId.toString();
    r.token = tokenId;
    r.newowner = loadUser(event.params.newowner).id;
    r.oldowner = loadUser(event.params.oldowner).id;
    r.metaEvidenceId = event.params.metaEvidenceType;
    r.timestamp = event.block.timestamp;
    r.blocknumber = event.block.number;
    r.save();

    // Load the related Token and update the latestRequest field
    let token = Token.load(tokenId);
    if (token) {
        token.latestRequest = r.id;
        token.save();
    }
}

export function handleOwnershipTransferred(event: OwnershipTransferredEvent): void
{
    // do nothing
}

export function handleProtected(event: ProtectedEvent): void {
    let t = new Token(event.params.tokenId.toString());
    t.burned = false;
    let ownerId = loadUser(event.params.owner).id;
    t.ownerOriginal = ownerId;
    t.ownerProtected = ownerId;
    t.assetType = event.params.assetType;
    t.contract = event.params.contr;
    t.tokenId = event.params.tokenIdOrig;
    t.amount = event.params.amount;
    t.timestamp = event.block.timestamp;
    t.blocknumber = event.block.number;
    t.nonce = BigInt.fromI32(0);
    t.save();

    // Update totalOwnedProtected for the owner
    let owner = User.load(ownerId);
    if (owner) {
        owner.totalOwnedProtected = owner.totalOwnedProtected.plus(BigInt.fromI32(1));
        owner.totalProtected = owner.totalProtected.plus(BigInt.fromI32(1))
        owner.save();
    }
}

export function handleTransfer(event: TransferEvent): void {
    if (event.params.to != nullAddress && event.params.from != nullAddress) {
        let t = Token.load(event.params.tokenId.toString());
        if (t) {
            let previousOwnerId = t.ownerProtected;
            let newOwnerId = loadUser(event.params.to).id;
            t.ownerProtected = newOwnerId;
            t.save();

            // Decrease totalOwnedProtected for the previous owner
            let previousOwner = User.load(previousOwnerId);
            if (previousOwner) {
                previousOwner.totalOwnedProtected = previousOwner.totalOwnedProtected.minus(BigInt.fromI32(1));
                previousOwner.save();
            }

            // Increase totalOwnedProtected for the new owner
            let newOwner = User.load(newOwnerId);
            if (newOwner) {
                newOwner.totalOwnedProtected = newOwner.totalOwnedProtected.plus(BigInt.fromI32(1));
                newOwner.save();
            }
        }
    }
}

export function handleUnprotected(event: UnprotectedEvent): void
{
    let t = Token.load(event.params.tokenId.toString());
    if (t) 
    {
        t = t as Token;
        t.burned = true;
        t.save();
    }
}

export function handleUserRegistryChanged(event: UserRegistryChangedEvent): void {
    const s = loadSystem("nftprotect");
    s.userregistry = event.params.ureg;
    s.save();
}

export function handleSignatureVerifierChanged(event: SignatureVerifierChangedEvent): void {
    const s = loadSystem("nftprotect");
    s.sigatureVerifier = event.params.newSigVerifier;
    s.save();
}

export function handleAllowThirdPartyTransfersChanged(event: AllowThirdPartyTransfersChangedEvent): void {
    const s = loadSystem("nftprotect");
    s.allowThirdPartyTransfers = event.params.allowed;
    s.save();
}

export function handleMetaEvidenceSet(event: MetaEvidenceSetEvent): void {
    let metaEvidence = new MetaEvidence(event.params.evidenceType.toString() + "-" + event.transaction.hash.toHex());
    metaEvidence.evidenceType = event.params.evidenceType;
    metaEvidence.evidence = event.params.evidence;
    metaEvidence.save();
}