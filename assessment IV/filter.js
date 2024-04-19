
function filter(elements, cb) {
    const filteredElements = [];
    for (let i = 0; i < elements.length; i++) {
        if (cb(elements[i])) {
            filteredElements.push(elements[i]);
        }
    }
    return filteredElements;
}
const items = [1, 2, 3, 4, 5, 5];
const filteredResult = filter(items, (item) => item % 5 === 0);
console.log("Filtered result:", filteredResult);
