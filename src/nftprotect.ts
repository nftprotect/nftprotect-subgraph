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
    FeeChanged as FeeChangedEvent,
    MetaEvidenceLoaderChanged as MetaEvidenceLoaderChangedEvent,
    OwnershipAdjusted as OwnershipAdjustedEvent,
    OwnershipAdjustmentAnswered as OwnershipAdjustmentAnsweredEvent,
    OwnershipAdjustmentArbitrateAsked as OwnershipAdjustmentArbitrateAskedEvent,
    OwnershipAdjustmentAsked as OwnershipAdjustmentAskedEvent,
    OwnershipRestoreAnswered as OwnershipRestoreAnsweredEvent,
    OwnershipRestoreAsked as OwnershipRestoreAskedEvent,
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
    Token
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
    // TODO
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

export function handleMetaEvidenceLoaderChanged(event: MetaEvidenceLoaderChangedEvent): void
{
    // do nothing
}

export function handleOwnershipAdjusted(event: OwnershipAdjustedEvent): void
{
    // TODO
}

export function handleOwnershipAdjustmentAnswered(event: OwnershipAdjustmentAnsweredEvent): void
{
    // TODO
}

export function handleOwnershipAdjustmentArbitrateAsked(event: OwnershipAdjustmentArbitrateAskedEvent): void
{
    // TODO
}

export function handleOwnershipAdjustmentAsked(event: OwnershipAdjustmentAskedEvent): void
{
    // TODO
}

export function handleOwnershipRestoreAnswered(event: OwnershipRestoreAnsweredEvent): void
{
    // TODO
}

export function handleOwnershipRestoreAsked(event: OwnershipRestoreAskedEvent): void
{
    // TODO
}

export function handleOwnershipTransferred(event: OwnershipTransferredEvent): void
{
    // do nothing
}

export function handleProtected(event: ProtectedEvent): void
{
    let t = new Token(event.params.tokenId.toString());
    t.securityLevel = BigInt.fromI32(event.params.level);
    t.ownerOriginal = loadUser(event.params.owner).id;
    t.ownerProtected = t.ownerOriginal;
    t.assetType = event.params.assetType;
    t.contract = event.params.contr;
    t.tokenId = event.params.tokenIdOrig;
    t.amount = event.params.amount;
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
        const t = Token.load(event.params.tokenId.toString()) as Token;
        t.ownerProtected = loadUser(event.params.to).id;
        t.save();
    }
}

export function handleUnprotected(event: UnprotectedEvent): void
{
    store.remove("Token", event.params.tokenId.toString());
}

export function handleUserRegistryChanged(event: UserRegistryChangedEvent): void
{
    // do nothing
}
