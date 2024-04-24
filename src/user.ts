import
{
    Bytes,
    BigInt
} from "@graphprotocol/graph-ts"

import
{
    User
} from "../generated/schema"


export function loadUser(user: Bytes): User
{
    let u = User.load(user.toHex().toString());
    if (!u)
    {
        let zero = BigInt.fromI32(0);
        u = new User(user.toHex().toString());
        u.totalReferrals = zero;
        u.totalRewards = zero;
        u.totalOwnedProtected = zero
        u.save();
    }
    return u as User;
}
