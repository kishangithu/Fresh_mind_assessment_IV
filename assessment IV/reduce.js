
function reduce(elements, cb, startingValue) {
    let accumulator = startingValue !== undefined ? startingValue : elements[0];
    const startIndex = startingValue !== undefined ? 0 : 1;
    for (let i = startIndex; i < elements.length; i++) {
        accumulator = cb(accumulator, elements[i]);
    }

    return accumulator;
}
const items = [1, 2, 3, 4, 5, 5];
const product = reduce(items, (acc, item) => acc * item, 1);
console.log("Product of elements:", product);
