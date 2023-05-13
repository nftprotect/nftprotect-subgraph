import {
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
import {
  AffiliatePayment,
  AffiliatePercentChanged,
  ArbitratorRegistryChanged,
  DIDRegistered,
  DIDUnregistered,
  Deployed,
  OwnershipTransferred,
  PartnerSet,
  ReferrerSet,
  SuccessorApproved,
  SuccessorRejected,
  SuccessorRequested
} from "../generated/schema"

export function handleAffiliatePayment(event: AffiliatePaymentEvent): void {
  let entity = new AffiliatePayment(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.amountWei = event.params.amountWei

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAffiliatePercentChanged(
  event: AffiliatePercentChangedEvent
): void {
  let entity = new AffiliatePercentChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.percent = event.params.percent

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleArbitratorRegistryChanged(
  event: ArbitratorRegistryChangedEvent
): void {
  let entity = new ArbitratorRegistryChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.areg = event.params.areg

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDIDRegistered(event: DIDRegisteredEvent): void {
  let entity = new DIDRegistered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.did = event.params.did
  entity.provider = event.params.provider

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDIDUnregistered(event: DIDUnregisteredEvent): void {
  let entity = new DIDUnregistered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.did = event.params.did

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDeployed(event: DeployedEvent): void {
  let entity = new Deployed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePartnerSet(event: PartnerSetEvent): void {
  let entity = new PartnerSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.partnet = event.params.partnet
  entity.percent = event.params.percent

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleReferrerSet(event: ReferrerSetEvent): void {
  let entity = new ReferrerSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.referrer = event.params.referrer

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSuccessorApproved(event: SuccessorApprovedEvent): void {
  let entity = new SuccessorApproved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.requestId = event.params.requestId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSuccessorRejected(event: SuccessorRejectedEvent): void {
  let entity = new SuccessorRejected(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.requestId = event.params.requestId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSuccessorRequested(event: SuccessorRequestedEvent): void {
  let entity = new SuccessorRequested(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.requestId = event.params.requestId
  entity.user = event.params.user
  entity.successor = event.params.successor

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
