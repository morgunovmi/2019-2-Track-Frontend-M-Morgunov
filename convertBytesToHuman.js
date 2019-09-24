/*
 * Функция `convertBytesToHuman` должна принимать
 * аргумент `bytes` только числового типа.
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */
export default

  function convertBytesToHuman(bytes) {
  if (!isNaN(bytes)) {
    if (bytes < 0) {
      return false
    }
    else
      return bytes
  }
  else
    return false
}
