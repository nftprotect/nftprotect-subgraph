import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
import { ArbitratorAdded } from "../generated/schema"
import { ArbitratorAdded as ArbitratorAddedEvent } from "../generated/arbitratorregistry/arbitratorregistry"
import { handleArbitratorAdded } from "../src/arbitratorregistry"
import { createArbitratorAddedEvent } from "./arbitratorregistry-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let id = BigInt.fromI32(234)
    let name = "Example string value"
    let arbitratorProxy = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let extraData = Bytes.fromI32(1234567890)
    let newArbitratorAddedEvent = createArbitratorAddedEvent(
      id,
      name,
      arbitratorProxy,
      extraData
    )
    handleArbitratorAdded(newArbitratorAddedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ArbitratorAdded created and stored", () => {
    assert.entityCount("ArbitratorAdded", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ArbitratorAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "name",
      "Example string value"
    )
    assert.fieldEquals(
      "ArbitratorAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "arbitratorProxy",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ArbitratorAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "extraData",
      "1234567890"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
