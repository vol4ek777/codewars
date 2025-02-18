// Description:
//     Numbers ending with zeros are boring.
//
//     They might be fun in your world, but not here.
//
//     Get rid of them. Only the ending ones.
//
// 1450   -> 145
// 960000 -> 96
// 1050   -> 105
// -1050  -> -105
// 0      -> 0

function noBoringZeros(n) {
    if (n === 0) return 0;
    while (n % 10 === 0) {
        n = n / 10;
    }
    return n;
}

console.log("noBoringZeros:", noBoringZeros(1050))