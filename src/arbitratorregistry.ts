import
{
  store
} from "@graphprotocol/graph-ts"

import
{
    ArbitratorAdded as ArbitratorAddedEvent,
    ArbitratorDeleted as ArbitratorDeletedEvent,
    Deployed as DeployedEvent,
    ExtraDataChanged as ExtraDataChangedEvent,
    OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/arbitratorregistry/arbitratorregistry"

import
{
    System,
    Arbitrator
} from "../generated/schema"

import
{
    loadSystem
} from "./system"


export function handleArbitratorAdded(event: ArbitratorAddedEvent): void
{
    let a = new Arbitrator(event.params.id.toString());
    a.name = event.params.name;
    a.address = event.params.arbitratorProxy;
    a.extraData = event.params.extraData;
    a.save();
}

export function handleArbitratorDeleted(event: ArbitratorDeletedEvent): void
{
    store.remove("Arbitrator", event.params.id.toString());
}

export function handleDeployed(event: DeployedEvent): void
{
    const s = loadSystem("arbitratorregistry");
}

export function handleExtraDataChanged(event: ExtraDataChangedEvent): void
{
    let a = Arbitrator.load(event.params.id.toString()) as Arbitrator;
    a.extraData = event.params.extraData;
    a.save();
}

export function handleOwnershipTransferred(event: OwnershipTransferredEvent): void
{
    // do nothing
}
