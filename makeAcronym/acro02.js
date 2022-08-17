function toAcronym(input) {
  return input
    .split(" ") // 1. split string to words by space char
    .map(function (value) {
      // 2. take every first letter from word in given string
      return value[0].toUpperCase(); // 3. uppercase it
    })
    .join(""); // 4. join them toghether
}
