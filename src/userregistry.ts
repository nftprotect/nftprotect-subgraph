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
    SuccessorRequested as SuccessorRequestedEvent
} from "../generated/userregistry/userregistry"

import
{
    System
} from "../generated/schema"


export function handleAffiliatePayment(event: AffiliatePaymentEvent): void
{
}

export function handleAffiliatePercentChanged(event: AffiliatePercentChangedEvent): void
{
}

export function handleArbitratorRegistryChanged(event: ArbitratorRegistryChangedEvent): void
{
}

export function handleDIDRegistered(event: DIDRegisteredEvent): void
{
}

export function handleDIDUnregistered(event: DIDUnregisteredEvent): void
{
}

export function handleDeployed(event: DeployedEvent): void
{
}

export function handleOwnershipTransferred(event: OwnershipTransferredEvent): void
{
}

export function handlePartnerSet(event: PartnerSetEvent): void
{
}

export function handleReferrerSet(event: ReferrerSetEvent): void
{
}

export function handleSuccessorApproved(event: SuccessorApprovedEvent): void
{
}

export function handleSuccessorRejected(event: SuccessorRejectedEvent): void
{
}

export function handleSuccessorRequested(event: SuccessorRequestedEvent): void
{
}
