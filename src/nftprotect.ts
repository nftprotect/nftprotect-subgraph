import {
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
import {
  Approval,
  ApprovalForAll,
  ArbitratorRegistryChanged,
  BaseChanged,
  BurnArbitrateAsked,
  BurnOnActionChanged,
  Deployed,
  FeeChanged,
  MetaEvidenceLoaderChanged,
  OwnershipAdjusted,
  OwnershipAdjustmentAnswered,
  OwnershipAdjustmentArbitrateAsked,
  OwnershipAdjustmentAsked,
  OwnershipRestoreAnswered,
  OwnershipRestoreAsked,
  OwnershipTransferred,
  Protected,
  ScoreThresholdChanged,
  Transfer,
  Unprotected,
  UserRegistryChanged
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.approved = event.params.approved
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.operator = event.params.operator
  entity.approved = event.params.approved

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

export function handleBaseChanged(event: BaseChangedEvent): void {
  let entity = new BaseChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.base = event.params.base

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBurnArbitrateAsked(event: BurnArbitrateAskedEvent): void {
  let entity = new BurnArbitrateAsked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.requestId = event.params.requestId
  entity.dst = event.params.dst
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBurnOnActionChanged(
  event: BurnOnActionChangedEvent
): void {
  let entity = new BurnOnActionChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.boa = event.params.boa

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

export function handleFeeChanged(event: FeeChangedEvent): void {
  let entity = new FeeChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.level = event.params.level
  entity.feeWei = event.params.feeWei

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMetaEvidenceLoaderChanged(
  event: MetaEvidenceLoaderChangedEvent
): void {
  let entity = new MetaEvidenceLoaderChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.mel = event.params.mel

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipAdjusted(event: OwnershipAdjustedEvent): void {
  let entity = new OwnershipAdjusted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newowner = event.params.newowner
  entity.oldowner = event.params.oldowner
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipAdjustmentAnswered(
  event: OwnershipAdjustmentAnsweredEvent
): void {
  let entity = new OwnershipAdjustmentAnswered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.requestId = event.params.requestId
  entity.accept = event.params.accept

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipAdjustmentArbitrateAsked(
  event: OwnershipAdjustmentArbitrateAskedEvent
): void {
  let entity = new OwnershipAdjustmentArbitrateAsked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.requestId = event.params.requestId
  entity.dst = event.params.dst
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipAdjustmentAsked(
  event: OwnershipAdjustmentAskedEvent
): void {
  let entity = new OwnershipAdjustmentAsked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.requestId = event.params.requestId
  entity.newowner = event.params.newowner
  entity.oldowner = event.params.oldowner
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipRestoreAnswered(
  event: OwnershipRestoreAnsweredEvent
): void {
  let entity = new OwnershipRestoreAnswered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.requestId = event.params.requestId
  entity.accept = event.params.accept

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipRestoreAsked(
  event: OwnershipRestoreAskedEvent
): void {
  let entity = new OwnershipRestoreAsked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.requestId = event.params.requestId
  entity.newowner = event.params.newowner
  entity.oldowner = event.params.oldowner
  entity.tokenId = event.params.tokenId

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

export function handleProtected(event: ProtectedEvent): void {
  let entity = new Protected(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.assetType = event.params.assetType
  entity.owner = event.params.owner
  entity.contr = event.params.contr
  entity.tokenIdOrig = event.params.tokenIdOrig
  entity.tokenId = event.params.tokenId
  entity.amount = event.params.amount
  entity.level = event.params.level

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleScoreThresholdChanged(
  event: ScoreThresholdChangedEvent
): void {
  let entity = new ScoreThresholdChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.threshold = event.params.threshold

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUnprotected(event: UnprotectedEvent): void {
  let entity = new Unprotected(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.dst = event.params.dst
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUserRegistryChanged(
  event: UserRegistryChangedEvent
): void {
  let entity = new UserRegistryChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.ureg = event.params.ureg

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
