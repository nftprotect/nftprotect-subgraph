import {
  ArbitratorAdded as ArbitratorAddedEvent,
  ArbitratorDeleted as ArbitratorDeletedEvent,
  Deployed as DeployedEvent,
  ExtraDataChanged as ExtraDataChangedEvent,
  OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/arbitratorregistry/arbitratorregistry"
import {
  ArbitratorAdded,
  ArbitratorDeleted,
  Deployed,
  ExtraDataChanged,
  OwnershipTransferred
} from "../generated/schema"

export function handleArbitratorAdded(event: ArbitratorAddedEvent): void {
  let entity = new ArbitratorAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.arbitratorregistry_id = event.params.id
  entity.name = event.params.name
  entity.arbitratorProxy = event.params.arbitratorProxy
  entity.extraData = event.params.extraData

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleArbitratorDeleted(event: ArbitratorDeletedEvent): void {
  let entity = new ArbitratorDeleted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.arbitratorregistry_id = event.params.id

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

export function handleExtraDataChanged(event: ExtraDataChangedEvent): void {
  let entity = new ExtraDataChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.arbitratorregistry_id = event.params.id
  entity.extraData = event.params.extraData

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
