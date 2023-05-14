import
{
    Approval as ApprovalEvent,
    Deployed as DeployedEvent,
    OwnershipTransferred as OwnershipTransferredEvent,
    Transfer as TransferEvent,
    TransferrableSet as TransferrableSetEvent
} from "../generated/nftpcoupons/nftpcoupons"

import
{
    System
} from "../generated/schema"


export function handleApproval(event: ApprovalEvent): void
{
}

export function handleDeployed(event: DeployedEvent): void
{
}

export function handleOwnershipTransferred(event: OwnershipTransferredEvent): void
{
}

export function handleTransfer(event: TransferEvent): void
{
}

export function handleTransferrableSet(event: TransferrableSetEvent): void
{
}
