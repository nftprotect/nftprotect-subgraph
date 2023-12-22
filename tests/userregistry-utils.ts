import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
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
} from "../generated/userregistry/userregistry"

export function createAffiliatePaymentEvent(
  from: Address,
  to: Address,
  amountWei: BigInt
): AffiliatePayment {
  let affiliatePaymentEvent = changetype<AffiliatePayment>(newMockEvent())

  affiliatePaymentEvent.parameters = new Array()

  affiliatePaymentEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  affiliatePaymentEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  affiliatePaymentEvent.parameters.push(
    new ethereum.EventParam(
      "amountWei",
      ethereum.Value.fromUnsignedBigInt(amountWei)
    )
  )

  return affiliatePaymentEvent
}

export function createAffiliatePercentChangedEvent(
  percent: BigInt
): AffiliatePercentChanged {
  let affiliatePercentChangedEvent = changetype<AffiliatePercentChanged>(
    newMockEvent()
  )

  affiliatePercentChangedEvent.parameters = new Array()

  affiliatePercentChangedEvent.parameters.push(
    new ethereum.EventParam(
      "percent",
      ethereum.Value.fromUnsignedBigInt(percent)
    )
  )

  return affiliatePercentChangedEvent
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

export function createDIDRegisteredEvent(
  did: Address,
  provider: string
): DIDRegistered {
  let didRegisteredEvent = changetype<DIDRegistered>(newMockEvent())

  didRegisteredEvent.parameters = new Array()

  didRegisteredEvent.parameters.push(
    new ethereum.EventParam("did", ethereum.Value.fromAddress(did))
  )
  didRegisteredEvent.parameters.push(
    new ethereum.EventParam("provider", ethereum.Value.fromString(provider))
  )

  return didRegisteredEvent
}

export function createDIDUnregisteredEvent(did: Address): DIDUnregistered {
  let didUnregisteredEvent = changetype<DIDUnregistered>(newMockEvent())

  didUnregisteredEvent.parameters = new Array()

  didUnregisteredEvent.parameters.push(
    new ethereum.EventParam("did", ethereum.Value.fromAddress(did))
  )

  return didUnregisteredEvent
}

export function createDeployedEvent(): Deployed {
  let deployedEvent = changetype<Deployed>(newMockEvent())

  deployedEvent.parameters = new Array()

  return deployedEvent
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

export function createPartnerSetEvent(
  partner: Address,
  discount: BigInt,
  affiliatePercent: BigInt
): PartnerSet {
  let partnerSetEvent = changetype<PartnerSet>(newMockEvent())

  partnerSetEvent.parameters = new Array()

  partnerSetEvent.parameters.push(
    new ethereum.EventParam("partner", ethereum.Value.fromAddress(partner))
  )
  partnerSetEvent.parameters.push(
    new ethereum.EventParam(
      "discount",
      ethereum.Value.fromUnsignedBigInt(discount)
    )
  )
  partnerSetEvent.parameters.push(
    new ethereum.EventParam(
      "affiliatePercent",
      ethereum.Value.fromUnsignedBigInt(affiliatePercent)
    )
  )

  return partnerSetEvent
}

export function createReferrerSetEvent(
  user: Address,
  referrer: Address
): ReferrerSet {
  let referrerSetEvent = changetype<ReferrerSet>(newMockEvent())

  referrerSetEvent.parameters = new Array()

  referrerSetEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  referrerSetEvent.parameters.push(
    new ethereum.EventParam("referrer", ethereum.Value.fromAddress(referrer))
  )

  return referrerSetEvent
}

export function createSuccessorApprovedEvent(
  requestId: BigInt
): SuccessorApproved {
  let successorApprovedEvent = changetype<SuccessorApproved>(newMockEvent())

  successorApprovedEvent.parameters = new Array()

  successorApprovedEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromUnsignedBigInt(requestId)
    )
  )

  return successorApprovedEvent
}

export function createSuccessorRejectedEvent(
  requestId: BigInt
): SuccessorRejected {
  let successorRejectedEvent = changetype<SuccessorRejected>(newMockEvent())

  successorRejectedEvent.parameters = new Array()

  successorRejectedEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromUnsignedBigInt(requestId)
    )
  )

  return successorRejectedEvent
}

export function createSuccessorRequestedEvent(
  requestId: BigInt,
  user: Address,
  successor: Address
): SuccessorRequested {
  let successorRequestedEvent = changetype<SuccessorRequested>(newMockEvent())

  successorRequestedEvent.parameters = new Array()

  successorRequestedEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromUnsignedBigInt(requestId)
    )
  )
  successorRequestedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  successorRequestedEvent.parameters.push(
    new ethereum.EventParam("successor", ethereum.Value.fromAddress(successor))
  )

  return successorRequestedEvent
}
