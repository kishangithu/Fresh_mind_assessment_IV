
function map(elements, cb) {
    const result = [];
    for (let i = 0; i < elements.length; i++) {
        result.push(cb(elements[i], i)); 
    }
    return result;
}
const items = [1, 2, 3, 4, 5, 5];
const mappedResult = map(items, (item) => item * 3);
console.log("Mapped result:", mappedResult);
