import
{
    ArbitratorAdded as ArbitratorAddedEvent,
    ArbitratorDeleted as ArbitratorDeletedEvent,
    Deployed as DeployedEvent,
    ExtraDataChanged as ExtraDataChangedEvent,
    OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/arbitratorregistry/arbitratorregistry"

import
{
    System
} from "../generated/schema"


export function handleArbitratorAdded(event: ArbitratorAddedEvent): void
{
}

export function handleArbitratorDeleted(event: ArbitratorDeletedEvent): void
{
}

export function handleDeployed(event: DeployedEvent): void
{
}

export function handleExtraDataChanged(event: ExtraDataChangedEvent): void
{
}

export function handleOwnershipTransferred(event: OwnershipTransferredEvent): void
{
}
