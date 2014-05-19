'use strict'

###*
 * Adds or replaces a method in an object
 * @param {Object}   object [The object that will receive the new method]
 * @param {String}   name   [The name for the new method]
 * @param {Function} fn     [The function that will be passed as a new method of Object]
###
addMethod = (object, name, fn) ->
  old = object[name]
  object[name] = ->
    if fn.length is arguments.length
      fn.apply this, arguments
    else if typeof old is 'function'
      old.apply this, arguments


ninjas =
  values: [
    "Dean Edwards"
    "Sam Stephenson"
    "Alex Russell"
    "Dean Russell"
  ]



addMethod ninjas, 'find', () ->
  @values

addMethod ninjas, 'find', (name) ->
  ninja for ninja in @values when ninja.indexOf(name) isnt -1

addMethod ninjas, 'find', (first, last) ->
  ninja for ninja in @values when ninja is "#{first} #{last}"

console.log ninjas.find


console.log ninjas.find()
console.log ninjas.find('Dean')
console.log ninjas.find('Dean','Edwards')
