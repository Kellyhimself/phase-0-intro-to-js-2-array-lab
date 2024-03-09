// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
   return cats.push(name);
 }

function destructivelyPrependCat(name){
   return cats.unshift(name)
}

function destructivelyRemoveLastCat(name){
   return cats.pop(name)
}

function destructivelyRemoveFirstCat(name){
   return cats.shift(name)
}
let catsCpy;
function appendCat(name){
   return catsCpy= [...cats.slice(),name];
}
function prependCat(name){
   return catsCpy=[name, ...cats.slice()]
}
function removeLastCat(){
   return catsCpy=[...cats.slice(0, -1)]
}
function removeFirstCat(){
   return catsCpy=[...cats.slice(1)]
}

