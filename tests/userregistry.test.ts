import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { AffiliatePayment } from "../generated/schema"
import { AffiliatePayment as AffiliatePaymentEvent } from "../generated/userregistry/userregistry"
import { handleAffiliatePayment } from "../src/userregistry"
import { createAffiliatePaymentEvent } from "./userregistry-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let from = Address.fromString("0x0000000000000000000000000000000000000001")
    let to = Address.fromString("0x0000000000000000000000000000000000000001")
    let amountWei = BigInt.fromI32(234)
    let newAffiliatePaymentEvent = createAffiliatePaymentEvent(
      from,
      to,
      amountWei
    )
    handleAffiliatePayment(newAffiliatePaymentEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AffiliatePayment created and stored", () => {
    assert.entityCount("AffiliatePayment", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AffiliatePayment",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "from",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "AffiliatePayment",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "to",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "AffiliatePayment",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "amountWei",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
