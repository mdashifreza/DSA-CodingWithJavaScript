const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];

const countedNames = names.reduce((allNames, name) => {
    const currCount = allNames[name] ?? 0;
    return {
    ...allNames,
    [name]: currCount + 1,
    };
}, {});
console.log(countedNames);