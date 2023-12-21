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
    BurnArbitrateAsked as BurnArbitrateAskedEvent,
    BurnOnActionChanged as BurnOnActionChangedEvent,
    Deployed as DeployedEvent,
    MetaEvidenceLoaderChanged as MetaEvidenceLoaderChangedEvent,
    OwnershipAdjusted as OwnershipAdjustedEvent,
    OwnershipAdjustmentAnswered as OwnershipAdjustmentAnsweredEvent,
    OwnershipAdjustmentArbitrateAsked as OwnershipAdjustmentArbitrateAskedEvent,
    OwnershipAdjustmentAsked as OwnershipAdjustmentAskedEvent,
    OwnershipRestoreAnswered as OwnershipRestoreAnsweredEvent,
    OwnershipRestoreAsked as OwnershipRestoreAskedEvent,
    BurnAnswered as BurnAnsweredEvent,
    OwnershipTransferred as OwnershipTransferredEvent,
    Protected as ProtectedEvent,
    ScoreThresholdChanged as ScoreThresholdChangedEvent,
    Transfer as TransferEvent,
    Unprotected as UnprotectedEvent,
    UserRegistryChanged as UserRegistryChangedEvent
} from "../generated/nftprotect/nftprotect"

import
{
    System,
    Token,
    Request
} from "../generated/schema"

import
{
    loadSystem
} from "./system"

import
{
    loadUser
} from "./user"


export function handleApproval(event: ApprovalEvent): void
{
    // do nothing
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void
{
    // do nothing
}

export function handleArbitratorRegistryChanged(event: ArbitratorRegistryChangedEvent): void
{
    // do nothing
}

export function handleBaseChanged(event: BaseChangedEvent): void
{
    const s = loadSystem("nftprotect");
    s.base = event.params.base;
    s.save();
}

export function handleBurnArbitrateAsked(event: BurnArbitrateAskedEvent): void
{
    let r = new Request(event.params.requestId.toString());
    r.type = "Burn";
    r.status = "Disputed";
    let tokenId = event.params.tokenId.toString();
    r.token = tokenId;
    r.newowner = loadUser(event.params.dst).id;
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

export function handleBurnOnActionChanged(event: BurnOnActionChangedEvent): void
{
    const s = loadSystem("nftprotect");
    s.burnOnAction = event.params.boa;
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
    // t.ownerOriginal = loadUser(event.params.newowner).id;
    t.save();
}

export function handleOwnershipAdjustmentAnswered(event: OwnershipAdjustmentAnsweredEvent): void
{
    let r = Request.load(event.params.requestId.toString()) as Request;
    r.status = event.params.accept ? "Accepted" : "Rejected";
    r.timestampChange = event.block.timestamp;
    r.blocknumberChange = event.block.number;
    r.save();
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
    if(event.params.accept)
    {
        let t = Token.load(r.token) as Token;
        t.ownerProtected = r.newowner as string;
        t.save();
    }
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

export function handleBurnAnswered(event: BurnAnsweredEvent): void
{
    let r = Request.load(event.params.requestId.toString()) as Request;
    r.status = event.params.accept ? "Accepted" : "Rejected";
    r.timestampChange = event.block.timestamp;
    r.blocknumberChange = event.block.number;
    r.save();
}

export function handleOwnershipTransferred(event: OwnershipTransferredEvent): void
{
    // do nothing
}

export function handleProtected(event: ProtectedEvent): void
{
    let t = new Token(event.params.tokenId.toString());
    t.burned = false;
    t.securityLevel = BigInt.fromI32(event.params.level);
    t.ownerOriginal = loadUser(event.params.owner).id;
    t.ownerProtected = t.ownerOriginal;
    t.assetType = event.params.assetType;
    t.contract = event.params.contr;
    t.tokenId = event.params.tokenIdOrig;
    t.amount = event.params.amount;
    t.timestamp = event.block.timestamp;
    t.blocknumber = event.block.number;
    t.save();
}

export function handleScoreThresholdChanged(event: ScoreThresholdChangedEvent): void
{
    const s = loadSystem("nftprotect");
    s.scoreThreshold = event.params.threshold;
    s.save();
}

export function handleTransfer(event: TransferEvent): void
{
    if (event.params.to != Address.fromString("0x0000000000000000000000000000000000000000") &&
        event.params.from != Address.fromString("0x0000000000000000000000000000000000000000"))
    {
        let t = Token.load(event.params.tokenId.toString());
        if(t)
        {
            t = t as Token;
            t.ownerProtected = loadUser(event.params.to).id;
            t.save();
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

export function handleUserRegistryChanged(event: UserRegistryChangedEvent): void
{
    // do nothing
}
