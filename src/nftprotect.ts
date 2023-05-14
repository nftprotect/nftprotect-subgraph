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
    System
} from "../generated/schema"

import
{
    loadSystem
} from "./system"


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
    // TODO
}

export function handleScoreThresholdChanged(event: ScoreThresholdChangedEvent): void
{
    const s = loadSystem("nftprotect");
    s.scoreThreshold = event.params.threshold;
    s.save();
}

export function handleTransfer(event: TransferEvent): void
{
    // TODO
}

export function handleUnprotected(event: UnprotectedEvent): void
{
    // TODO
}

export function handleUserRegistryChanged(event: UserRegistryChangedEvent): void
{
    // do nothing
}
