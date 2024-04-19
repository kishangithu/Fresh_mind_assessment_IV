
function flatten(elements) {
    const flattened = [];
    function recursiveFlatten(arr) {
        for (const item of arr) {
            if (Array.isArray(item)) {
                recursiveFlatten(item);
            } else {
                flattened.push(item);
            }
        }
    }
    recursiveFlatten(elements);
    return flattened;
}
const nestedArray = [1, [2], [[3]], [[[4]]]];
const flattenedResult = flatten(nestedArray);
console.log("Flattened result:", flattenedResult);
