const treeMaker = (data, parent) => {
    let node = {};
    data
        .filter(x => x.parent === parent)
        .forEach(x => node[x.name] = treeMaker(data, x.name));
    return node;
}

let testData = [
    {name: 'Uppercase', parent: null},
    {name: 'Lowercase', parent: null},
    {name: 'A', parent: 'Uppercase'},
    {name: 'a', parent: 'Lowercase'},
    {name: 'Apple', parent: 'A'},
    {name: 'apple', parent: 'a'},
    {name: 'Ant', parent: 'A'},
    {name: 'ant', parent: 'a'},
    {name: 'B', parent: 'Uppercase'},
    {name: 'b', parent: 'Lowercase'},
    {name: 'Big', parent: 'B'},
    {name: 'big', parent: 'b'},
    {name: 'Boring', parent: 'B'},
    {name: 'boring', parent: 'b'},
    {name: 'C', parent: 'Uppercase'},
    {name: 'c', parent: 'Lowercase'},
    {name: 'Cow', parent: 'C'},
    {name: 'cow', parent: 'c'},
    {name: 'Car', parent: 'C'},
    {name: 'car', parent: 'c'},
];

const tree = treeMaker(testData, null);

const treeSearcher = (tree, target) => {
    for (let key in tree) {
        if (key === target) {
            return key;
        }
        if (tree[key] === target) {
            return tree[key];
        }
        if (Object.keys(tree[key]).length > 0) {
            return treeSearcher(tree[key], target);
        }
    }
    return 'NULL';
}