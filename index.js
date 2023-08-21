const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(Ralph){
    cats.push(Ralph)
    return cats
}
function destructivelyPrependCat(Circular){
    cats.unshift(Circular)
    return cats
}
function destructivelyRemoveLastCat(){
    cats.splice(-1)
    return cats
}
function destructivelyRemoveFirstCat(){
    cats.shift()
    return cats
}
function appendCat(Ralph){
    const New = [...cats, Ralph]
    return New
}
function prependCat(Arnold){
    const New = [Arnold, ...cats]
    return New
}
function removeLastCat(){
    const New = [
    ...cats.slice(0,2)
    ]
    return New
}
function removeFirstCat(){
    const New = [
        ...cats.slice(1,3)
    ]
    return New
}
