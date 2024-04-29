import
{
    BigInt,
    Bytes,
    dataSource,
} from "@graphprotocol/graph-ts"

import
{
    System
} from "../generated/schema"


export function loadSystem(contract: string): System
{
    let s = System.load("0");
    let needToSave = false;
    if (!s)
    {
        s = new System("0");
        needToSave = true;
    }
    else
    {
        s = s as System;
    }
    if (contract == "nftprotect" && !s.nftprotect)
    {
        s.nftprotect = dataSource.address();
        needToSave = true;
    } else if (contract == "userregistry" && !s.userregistry)
    {
        s.userregistry = dataSource.address();
        needToSave = true;
    } else if (contract == "arbitratorregistry" && !s.arbitratorregistry)
    {
        s.arbitratorregistry = dataSource.address();
        needToSave = true;
    }
    if (needToSave)
    {
        s.save();
    }
    return s;
}
