/*
For the input of your function, you will be given one sentence.
You have to return a corrected version,
that starts with a capital letter and ends with a period (dot).

Example:

input (string): "hey, friend"
output (string): "Hey, friend."

Updated first 'h' to 'H', added '.'.

More examples:

correctSentence("greetings, friends") == "Greetings, friends."
correctSentence("Greetings, friends") == "Greetings, friends."
correctSentence("Greetings, friends.") == "Greetings, friends."
 */
export default

function correctSentence(text) {
  let character = text.charAt(0)
  if (text.charAt(0) != text.charAt(0).toUpperCase()) {
    text = text.replace(text.charAt(0), text.charAt(0).toUpperCase())
  }
  if (text.charAt(text.length - 1) != ".") {
    text += "."
  }
  return text;
}
