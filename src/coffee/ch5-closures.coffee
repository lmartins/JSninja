'use strict'
# Chapter 5 - Closing in on closures
#
outerValue = 'ninja'
later = undefined

outerFunction = ->
  innerValue = 'samurai'
  innerFunction = (paramValue) ->
    console.log outerValue
    console.log innerValue
    console.log paramValue
    console.log tooLate
  later = innerFunction

tooLate = 'ronin'
outerFunction()
later('wakizashi')

Ninja = ->
  feints = 0
  @getFeints = ->
    feints
  @feint = ->
    feints++
    return
  return this

ninja = new Ninja()
console.log ninja.feint()
console.log ninja.feints

animateIt = (elementId) ->
  elem = document.querySelector elementId
  tick = 0
  timer = setInterval ->
    if tick < 100
      elem.style.left = elem.style.top = tick + "px"
      tick++
    else
      clearInterval(timer)
      console.log tick
      console.log elem
      console.log timer
  , 10

animateIt('#box')
