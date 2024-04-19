function each(elements, cb) {
    for (let i = 0; i < elements.length; i++) {
        cb(elements[i], i);
    }
}
const items = [1, 2, 3, 4, 5, 5];

each(items, (item, index) => {
    console.log(`Element at index ${index}: ${item}`);
});