import
{
    Address
} from "@graphprotocol/graph-ts"

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

import
{
    loadSystem
} from "./system"

import
{
    loadUser
} from "./user"


export function handleApproval(event: ApprovalEvent): void
{
    // do nothing
}

export function handleDeployed(event: DeployedEvent): void
{
    const s = loadSystem("arbitratorregistry");
}

export function handleOwnershipTransferred(event: OwnershipTransferredEvent): void
{
    // do nothing
}

export function handleTransfer(event: TransferEvent): void
{
    if (event.params.from != Address.fromString("0x0000000000000000000000000000000000000000"))
    {
        let s = loadUser(event.params.from);
        s.coupons -= event.params.value;
        s.save();
    }
    if (event.params.to != Address.fromString("0x0000000000000000000000000000000000000000"))
    {
        let r = loadUser(event.params.to);
        r.coupons += event.params.value;
        r.save();
    }
}

export function handleTransferrableSet(event: TransferrableSetEvent): void
{
    // do nothing
}
