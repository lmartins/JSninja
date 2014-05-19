# solution = (str, ending) ->
#   # TODO: complete
#   if str.substr(str.length - ending.length) is ending
#     console.log 'correct'
#     true
#   else
#     console.log 'incorrect'
#     false
#
# solution('samurai','ai')



# http://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript
# reverseWords("This is an example!"); // returns  "sihT si na !elpmaxe"

# string = "This is an example!"
# # reverseWords = (str) ->
# #   words = str.split(" ");
# #   results = []
# #   for word in words
# #     results.push word.split("").reverse().join("")
# #   results.join(" ")
# reverseWords = (str) ->
#   str.split(' ').map (word) ->
#     word.split('').reverse().join('')
#   .join(' ')
#
#
# console.log reverseWords(string)


# Filter Array
# http://www.codewars.com/kata/523f5d21c841566fde000009/train/coffeescript
#
array1 = [3, 5, 12, 45, 56, 23, 18]
array2 = [12, 87, 23, 71, 24, 13, 68, 56]

equalValue = (a, b) ->
  a is b

array_diff = (a, b) ->
  results = []
  for item in b
    a.filter( (i) ->
      # results.push i if item isnt i
      if i is item
        a.splice(i)
      )
  return a

console.log array_diff(array1, array2)
