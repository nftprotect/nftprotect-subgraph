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
        u = new User(user.toHex().toString());
        u.coupons = BigInt.fromI32(0);
        u.save();
    }
    return u as User;
}
