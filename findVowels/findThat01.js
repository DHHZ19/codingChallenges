// hard to do

function getTheVowels(string) {
    let arrayOfVowels = ['a','e','i','o','u'];
    let count = 0;
    let arrayOfLetters = string.split('');

    // Iterates through the array of letters
    for (let i = 0; i < arrayOfLetters.length; i++) {
        // If "a" is found 
        if (arrayOfVowels[0] == arrayOfLetters[i]) {    // (really means first index of array)
            // Increment count by one.
            count++;
            // Remove "a" from array of vowels 
            arrayOfVowels.shift();                      // (really means first index of array)
        }
        // If arrayOfVowels is empty
        if (arrayOfVowels.length == 0) {
            // Reload the array of vowels
            arrayOfVowels = ['a','e','i','o','u'];
        }
    }
    return count;
}
