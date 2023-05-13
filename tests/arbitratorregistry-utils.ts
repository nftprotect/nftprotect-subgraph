import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
import {
  ArbitratorAdded,
  ArbitratorDeleted,
  Deployed,
  ExtraDataChanged,
  OwnershipTransferred
} from "../generated/arbitratorregistry/arbitratorregistry"

export function createArbitratorAddedEvent(
  id: BigInt,
  name: string,
  arbitratorProxy: Address,
  extraData: Bytes
): ArbitratorAdded {
  let arbitratorAddedEvent = changetype<ArbitratorAdded>(newMockEvent())

  arbitratorAddedEvent.parameters = new Array()

  arbitratorAddedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  arbitratorAddedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  arbitratorAddedEvent.parameters.push(
    new ethereum.EventParam(
      "arbitratorProxy",
      ethereum.Value.fromAddress(arbitratorProxy)
    )
  )
  arbitratorAddedEvent.parameters.push(
    new ethereum.EventParam("extraData", ethereum.Value.fromBytes(extraData))
  )

  return arbitratorAddedEvent
}

export function createArbitratorDeletedEvent(id: BigInt): ArbitratorDeleted {
  let arbitratorDeletedEvent = changetype<ArbitratorDeleted>(newMockEvent())

  arbitratorDeletedEvent.parameters = new Array()

  arbitratorDeletedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )

  return arbitratorDeletedEvent
}

export function createDeployedEvent(): Deployed {
  let deployedEvent = changetype<Deployed>(newMockEvent())

  deployedEvent.parameters = new Array()

  return deployedEvent
}

export function createExtraDataChangedEvent(
  id: BigInt,
  extraData: Bytes
): ExtraDataChanged {
  let extraDataChangedEvent = changetype<ExtraDataChanged>(newMockEvent())

  extraDataChangedEvent.parameters = new Array()

  extraDataChangedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  extraDataChangedEvent.parameters.push(
    new ethereum.EventParam("extraData", ethereum.Value.fromBytes(extraData))
  )

  return extraDataChangedEvent
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
