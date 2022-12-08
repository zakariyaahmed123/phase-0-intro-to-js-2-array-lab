// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return cats.push(name);
}
function destructivelyPrependCat(name) {
    return cats.unshift(name);
}
function destructivelyRemoveLastCat() {
    return cats.pop();
}
function destructivelyRemoveFirstCat() {
    return cats.shift();
}
function appendCat(name) {
    const editedCat = [...cats, name];
    return editedCat;
}
function prependCat(name) {
    const editedCat = [name, ...cats];
    return editedCat;
}
function removeLastCat() {
    return cats.slice(0, cats.length - 1);
}
function removeFirstCat() {
    return cats.slice(1);
}

