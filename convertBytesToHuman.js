/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

export default

 var prefixEnum = { "K": 10, "M": 20, "G": 30, "T": 40, "P": 50 };

function ifFits(bytes, power) {
  return bytes / Math.pow(2, power) < 1024 && bytes / Math.pow(2, power)
}

function prefixSet(bytes) {
  if (ifFits(bytes, 10)) {
    return "K"
  }
  if (ifFits(bytes, 20)) {
    return "M"
  }
  if (ifFits(bytes, 30)) {
    return "G"
  }
  if (ifFits(bytes, 40)) {
    return "T"
  }
  if (ifFits(bytes, 50)) {
    return "P"
  }
}

function output(bytes, string) {
  let genBytes = bytes / Math.pow(2, prefixEnum[string])
  if (!Number.isInteger(genBytes)) {
    genBytes = genBytes.toFixed(2)
  }
  return genBytes + " " + string + "B"
}

function convertBytesToHuman(bytes) {
  if (isNaN(bytes) || bytes < 0) {
    return false
  }
  else {
    return output(bytes, prefixSet(bytes))
  }
}

