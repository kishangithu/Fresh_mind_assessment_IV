
function find(elements, cb) {
    for (let i = 0; i < elements.length; i++) {
        if (cb(elements[i])) {
            return elements[i]; 
        }
    }
    return undefined; 
}
const items = [1, 2, 3, 4, 5, 5];
const foundElement = find(items, (item) => item === 9);
console.log("Found element:", foundElement);
