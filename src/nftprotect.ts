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

export function handleApproval(event: ApprovalEvent): void
{
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void
{
}

export function handleArbitratorRegistryChanged(event: ArbitratorRegistryChangedEvent): void
{
}

export function handleBaseChanged(event: BaseChangedEvent): void
{
}

export function handleBurnArbitrateAsked(event: BurnArbitrateAskedEvent): void
{
}

export function handleBurnOnActionChanged(event: BurnOnActionChangedEvent): void
{
}

export function handleDeployed(event: DeployedEvent): void
{
}

export function handleFeeChanged(event: FeeChangedEvent): void
{
}

export function handleMetaEvidenceLoaderChanged(event: MetaEvidenceLoaderChangedEvent): void
{
}

export function handleOwnershipAdjusted(event: OwnershipAdjustedEvent): void
{
}

export function handleOwnershipAdjustmentAnswered(event: OwnershipAdjustmentAnsweredEvent): void
{
}

export function handleOwnershipAdjustmentArbitrateAsked(event: OwnershipAdjustmentArbitrateAskedEvent): void
{
}

export function handleOwnershipAdjustmentAsked(event: OwnershipAdjustmentAskedEvent): void
{
}

export function handleOwnershipRestoreAnswered(event: OwnershipRestoreAnsweredEvent): void
{
}

export function handleOwnershipRestoreAsked(event: OwnershipRestoreAskedEvent): void
{
}

export function handleOwnershipTransferred(event: OwnershipTransferredEvent): void
{
}

export function handleProtected(event: ProtectedEvent): void
{
}

export function handleScoreThresholdChanged(event: ScoreThresholdChangedEvent): void
{
}

export function handleTransfer(event: TransferEvent): void
{
}

export function handleUnprotected(event: UnprotectedEvent): void
{
}

export function handleUserRegistryChanged(event: UserRegistryChangedEvent): void
{
}
