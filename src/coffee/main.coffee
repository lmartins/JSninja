'use strict'

# start = new Date().getTime()
# maxCount = 1000
# n = 0
# while n < maxCount
#   n * 1324 / 2
#   console.log "teste"
#   n++
#
# elapsed = new Date().getTime() - start
# console.log "Measured time: #{elapsed}"

# numbAsc = (a, b) ->
#   a > b
#
# numbDesc = (a, b) ->
#   a < b
#
#
myArray = [54, 10, 123, 873, 712, 7, 12]
# myArray.sort numbAsc
# console.log myArray
#
# outer = () ->
#   a = 1
#   inner = () ->
#   b = 2
#
#   if a is 1
#     c = 3
#
#   console.log this
#
# outer()
#
# ninja =
#
#   chirp: (n) ->
#     if n > 1 then @chirp(n - 1) + "-chirp" else "chirp"
#
# samurai =
#   chirp: ninja.chirp
#
# ninja = {}
# console.log  ninja
# console.log samurai.chirp(3)
#
#
# myObject.method2()
#
# class Ninja
#
#   constructor: (@name) ->
#     # body...
#
#   skulk = ->
#     this
#
#   chirp: (n) ->
#     if n > 1 then @chirp(n - 1) + "-chirp" else "chirp"
#
# class Samurai extends Ninja
#
# ninja1 = new Ninja
# ninja2 = new Ninja
# samurai1 = new Samurai

#
# console.log ninja2.skulk() is ninja2
# console.log ninja2
#
# forEach = (list, callback) ->
#   if list not instanceof Array
#     throw new Error "First parameter must be an array"
#   if callback not instanceof Function
#     throw new Error "Second parameter must be a Function"
#   for item, index in list
#     callback.call item, index
#
# countries = ['Portugal','Uk', 'France']
#
# forEach countries, (index) ->
#   console.log countries[index]

isPalindrome = (text) ->
  throw new Error "Not a string" if typeof text isnt "string"
  return true if text.length <= 1
  return false if text.charAt(0) != text.charAt(text.length - 1)
  isPalindrome text.substr(1, text.length - 2)

# console.log isPalindrome "anna"

store =
  nextId: 1
  cache: {}

  add: (fn) ->
    unless fn.id
      fn.id = store.nextId++
      !!(store.cache[fn.id] = fn)

# console.log store.add(isPalindrome)
# console.log store.add(isPalindrome)
# # console.log store.add("ninja2")
# console.log store

isPrime = (value) ->
  unless isPrime.answers then isPrime.answers = {}
  if isPrime.answers[value]?
    return isPrime.answers[value]

  prime = value != 1
  for iter in [2...value] by 1
    if value % iter is 0
      prime = false
      break
  return isPrime.answers[value] = prime

# console.log isPrime(5)
# console.log isPrime(7)
# console.log isPrime.answers[5]
# console.log isPrime.answers

getElements = (name) ->
  unless getElements.cache
    getElements.cache = {}
  getElements.cache[name] =
    getElements.cache[name] or document.querySelectorAll name


getElements 'li'
# console.log getElements.cache

elems =
  length: 0
  add: (elem) ->
    Array::push.call this, elem

  gather: (id) ->
    @add document.querySelector id

elems.gather '#main'
elems.gather '#list'
# console.log elems

smallest = (array) ->
  Math.min.apply Math, array

largest = (array) ->
  Math.max.apply Math, array

# console.log smallest [728, 45, 32, 45, 76, 92]
# console.log largest [728, 45, 32, 45, 76, 92]

merge = (root) ->
  i = 1   # no need to merge the first object
  while i < arguments.length
    for key of arguments[i]
      root[key] = arguments[i][key]
    i++
  root

obj1 =
  name: "Batou"

obj2 =
  city: "Batou"


merge(obj1, obj2)
console.log obj1
console.log obj2

multiMax = (multi) ->
  multi * Math.max.apply Math, Array::slice.call arguments, 1

console.log multiMax 728, 45, 32, 45, 76, 92
