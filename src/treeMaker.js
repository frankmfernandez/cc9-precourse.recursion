const treeMaker = (data, parent) => {
    let node = {};
    data
        .filter(x => x.parent === parent)
        .forEach(x => node[x.name] = treeMaker(data, x.name));
    return node;
}

let testData = [
    {name: 'numbers', parent: null},
    {name: 'evens', parent: 'numbers'},
    {name: 'odds', parent: 'numbers'},
    {name: 2, parent: 'evens'},
    {name: 4, parent: 'evens'},
    {name: 6, parent: 'evens'},
    {name: 8, parent: 'evens'},
    {name: 10, parent: 'evens'},
    {name: 1, parent: 'odds'},
    {name: 3, parent: 'odds'},
    {name: 5, parent: 'odds'},
    {name: 7, parent: 'odds'},
    {name: 9, parent: 'odds'}
];

treeMaker(testData, null);