import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
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
} from "../generated/nftprotect/nftprotect"

export function createApprovalEvent(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return approvalEvent
}

export function createApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createArbitratorRegistryChangedEvent(
  areg: Address
): ArbitratorRegistryChanged {
  let arbitratorRegistryChangedEvent = changetype<ArbitratorRegistryChanged>(
    newMockEvent()
  )

  arbitratorRegistryChangedEvent.parameters = new Array()

  arbitratorRegistryChangedEvent.parameters.push(
    new ethereum.EventParam("areg", ethereum.Value.fromAddress(areg))
  )

  return arbitratorRegistryChangedEvent
}

export function createBaseChangedEvent(base: string): BaseChanged {
  let baseChangedEvent = changetype<BaseChanged>(newMockEvent())

  baseChangedEvent.parameters = new Array()

  baseChangedEvent.parameters.push(
    new ethereum.EventParam("base", ethereum.Value.fromString(base))
  )

  return baseChangedEvent
}

export function createBurnArbitrateAskedEvent(
  requestId: BigInt,
  dst: Address,
  tokenId: BigInt
): BurnArbitrateAsked {
  let burnArbitrateAskedEvent = changetype<BurnArbitrateAsked>(newMockEvent())

  burnArbitrateAskedEvent.parameters = new Array()

  burnArbitrateAskedEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromUnsignedBigInt(requestId)
    )
  )
  burnArbitrateAskedEvent.parameters.push(
    new ethereum.EventParam("dst", ethereum.Value.fromAddress(dst))
  )
  burnArbitrateAskedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return burnArbitrateAskedEvent
}

export function createBurnOnActionChangedEvent(
  boa: boolean
): BurnOnActionChanged {
  let burnOnActionChangedEvent = changetype<BurnOnActionChanged>(newMockEvent())

  burnOnActionChangedEvent.parameters = new Array()

  burnOnActionChangedEvent.parameters.push(
    new ethereum.EventParam("boa", ethereum.Value.fromBoolean(boa))
  )

  return burnOnActionChangedEvent
}

export function createDeployedEvent(): Deployed {
  let deployedEvent = changetype<Deployed>(newMockEvent())

  deployedEvent.parameters = new Array()

  return deployedEvent
}

export function createFeeChangedEvent(level: i32, feeWei: BigInt): FeeChanged {
  let feeChangedEvent = changetype<FeeChanged>(newMockEvent())

  feeChangedEvent.parameters = new Array()

  feeChangedEvent.parameters.push(
    new ethereum.EventParam(
      "level",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(level))
    )
  )
  feeChangedEvent.parameters.push(
    new ethereum.EventParam("feeWei", ethereum.Value.fromUnsignedBigInt(feeWei))
  )

  return feeChangedEvent
}

export function createMetaEvidenceLoaderChangedEvent(
  mel: Address
): MetaEvidenceLoaderChanged {
  let metaEvidenceLoaderChangedEvent = changetype<MetaEvidenceLoaderChanged>(
    newMockEvent()
  )

  metaEvidenceLoaderChangedEvent.parameters = new Array()

  metaEvidenceLoaderChangedEvent.parameters.push(
    new ethereum.EventParam("mel", ethereum.Value.fromAddress(mel))
  )

  return metaEvidenceLoaderChangedEvent
}

export function createOwnershipAdjustedEvent(
  newowner: Address,
  oldowner: Address,
  tokenId: BigInt
): OwnershipAdjusted {
  let ownershipAdjustedEvent = changetype<OwnershipAdjusted>(newMockEvent())

  ownershipAdjustedEvent.parameters = new Array()

  ownershipAdjustedEvent.parameters.push(
    new ethereum.EventParam("newowner", ethereum.Value.fromAddress(newowner))
  )
  ownershipAdjustedEvent.parameters.push(
    new ethereum.EventParam("oldowner", ethereum.Value.fromAddress(oldowner))
  )
  ownershipAdjustedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return ownershipAdjustedEvent
}

export function createOwnershipAdjustmentAnsweredEvent(
  requestId: BigInt,
  accept: boolean
): OwnershipAdjustmentAnswered {
  let ownershipAdjustmentAnsweredEvent = changetype<
    OwnershipAdjustmentAnswered
  >(newMockEvent())

  ownershipAdjustmentAnsweredEvent.parameters = new Array()

  ownershipAdjustmentAnsweredEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromUnsignedBigInt(requestId)
    )
  )
  ownershipAdjustmentAnsweredEvent.parameters.push(
    new ethereum.EventParam("accept", ethereum.Value.fromBoolean(accept))
  )

  return ownershipAdjustmentAnsweredEvent
}

export function createOwnershipAdjustmentArbitrateAskedEvent(
  requestId: BigInt,
  dst: Address,
  tokenId: BigInt
): OwnershipAdjustmentArbitrateAsked {
  let ownershipAdjustmentArbitrateAskedEvent = changetype<
    OwnershipAdjustmentArbitrateAsked
  >(newMockEvent())

  ownershipAdjustmentArbitrateAskedEvent.parameters = new Array()

  ownershipAdjustmentArbitrateAskedEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromUnsignedBigInt(requestId)
    )
  )
  ownershipAdjustmentArbitrateAskedEvent.parameters.push(
    new ethereum.EventParam("dst", ethereum.Value.fromAddress(dst))
  )
  ownershipAdjustmentArbitrateAskedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return ownershipAdjustmentArbitrateAskedEvent
}

export function createOwnershipAdjustmentAskedEvent(
  requestId: BigInt,
  newowner: Address,
  oldowner: Address,
  tokenId: BigInt
): OwnershipAdjustmentAsked {
  let ownershipAdjustmentAskedEvent = changetype<OwnershipAdjustmentAsked>(
    newMockEvent()
  )

  ownershipAdjustmentAskedEvent.parameters = new Array()

  ownershipAdjustmentAskedEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromUnsignedBigInt(requestId)
    )
  )
  ownershipAdjustmentAskedEvent.parameters.push(
    new ethereum.EventParam("newowner", ethereum.Value.fromAddress(newowner))
  )
  ownershipAdjustmentAskedEvent.parameters.push(
    new ethereum.EventParam("oldowner", ethereum.Value.fromAddress(oldowner))
  )
  ownershipAdjustmentAskedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return ownershipAdjustmentAskedEvent
}

export function createOwnershipRestoreAnsweredEvent(
  requestId: BigInt,
  accept: boolean
): OwnershipRestoreAnswered {
  let ownershipRestoreAnsweredEvent = changetype<OwnershipRestoreAnswered>(
    newMockEvent()
  )

  ownershipRestoreAnsweredEvent.parameters = new Array()

  ownershipRestoreAnsweredEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromUnsignedBigInt(requestId)
    )
  )
  ownershipRestoreAnsweredEvent.parameters.push(
    new ethereum.EventParam("accept", ethereum.Value.fromBoolean(accept))
  )

  return ownershipRestoreAnsweredEvent
}

export function createOwnershipRestoreAskedEvent(
  requestId: BigInt,
  newowner: Address,
  oldowner: Address,
  tokenId: BigInt
): OwnershipRestoreAsked {
  let ownershipRestoreAskedEvent = changetype<OwnershipRestoreAsked>(
    newMockEvent()
  )

  ownershipRestoreAskedEvent.parameters = new Array()

  ownershipRestoreAskedEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromUnsignedBigInt(requestId)
    )
  )
  ownershipRestoreAskedEvent.parameters.push(
    new ethereum.EventParam("newowner", ethereum.Value.fromAddress(newowner))
  )
  ownershipRestoreAskedEvent.parameters.push(
    new ethereum.EventParam("oldowner", ethereum.Value.fromAddress(oldowner))
  )
  ownershipRestoreAskedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return ownershipRestoreAskedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createProtectedEvent(
  assetType: BigInt,
  owner: Address,
  contr: Address,
  tokenIdOrig: BigInt,
  tokenId: BigInt,
  amount: BigInt,
  level: i32
): Protected {
  let protectedEvent = changetype<Protected>(newMockEvent())

  protectedEvent.parameters = new Array()

  protectedEvent.parameters.push(
    new ethereum.EventParam(
      "assetType",
      ethereum.Value.fromUnsignedBigInt(assetType)
    )
  )
  protectedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  protectedEvent.parameters.push(
    new ethereum.EventParam("contr", ethereum.Value.fromAddress(contr))
  )
  protectedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenIdOrig",
      ethereum.Value.fromUnsignedBigInt(tokenIdOrig)
    )
  )
  protectedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  protectedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  protectedEvent.parameters.push(
    new ethereum.EventParam(
      "level",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(level))
    )
  )

  return protectedEvent
}

export function createScoreThresholdChangedEvent(
  threshold: BigInt
): ScoreThresholdChanged {
  let scoreThresholdChangedEvent = changetype<ScoreThresholdChanged>(
    newMockEvent()
  )

  scoreThresholdChangedEvent.parameters = new Array()

  scoreThresholdChangedEvent.parameters.push(
    new ethereum.EventParam(
      "threshold",
      ethereum.Value.fromUnsignedBigInt(threshold)
    )
  )

  return scoreThresholdChangedEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  tokenId: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return transferEvent
}

export function createUnprotectedEvent(
  dst: Address,
  tokenId: BigInt
): Unprotected {
  let unprotectedEvent = changetype<Unprotected>(newMockEvent())

  unprotectedEvent.parameters = new Array()

  unprotectedEvent.parameters.push(
    new ethereum.EventParam("dst", ethereum.Value.fromAddress(dst))
  )
  unprotectedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return unprotectedEvent
}

export function createUserRegistryChangedEvent(
  ureg: Address
): UserRegistryChanged {
  let userRegistryChangedEvent = changetype<UserRegistryChanged>(newMockEvent())

  userRegistryChangedEvent.parameters = new Array()

  userRegistryChangedEvent.parameters.push(
    new ethereum.EventParam("ureg", ethereum.Value.fromAddress(ureg))
  )

  return userRegistryChangedEvent
}
