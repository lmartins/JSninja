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

# Ninja = ->
#   feints = 0
#   @getFeints = ->
#     feints
#   @feint = ->
#     feints++
#     return
#   return this
#
# ninja = new Ninja()
# console.log ninja.feint()
# console.log ninja.feints
bind = (context, name) ->
  ->
    context[name].apply(context,arguments)


button =
  clicked: false
  counter: 0
  click: ->
    @clicked = true
    @counter++
    console.log "The button has been clicked #{@counter} times"

elem = document.querySelector '#button'
elem.addEventListener 'click', bind(button,'click'), false
