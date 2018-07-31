// Add your functions and code here
var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(Ralph){
  return kittens.push(Ralph)
}

function destructivelyPrependKitten(Bob){
  return kittens.unshift(Bob)
}

function destructivelyRemoveLastKitten(){
  return kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift()
}

function appendKitten(){
  return[...appendKitten,'Broom']
}
