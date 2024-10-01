// function makeNegative(number) {
//     if (number > 0) {
//         console.log(number * -1)
//     } else if (number < 0) {
//         console.log(number)
//     } else {
//         console.log('Undefined')
//     }
// }

// makeNegative(2)

// #2
// const randomNumber = [1, -2, -4, 2]
// let sum = 0;

// for(let i = 0; i < randomNumber.length; i++) {
//     if (randomNumber[i] > 0) {
//     sum += randomNumber[i];
//     }
// }

//not finished 

// #3
// function square(num){
//     console.log(num ** 2)
//   }
//   square(num)

// #4
// function sumOfArray(arr) {
//     let sum = 0
//     return arr.reduce((sum, num) => sum + num, 0)
//   }

//SOLUTION TWO
// function sum(numbers) {
//     let sum = 0
//     for (let i = 0; i < numbers.length; i++){
//        sum += numbers[i]
//     }
//          return sum
//    }
//    sum()

//SOLUTION THREE
// function solution1(str){
//     let splitArr = str.split('');
//     let reverseArr = [];
//     for(let i=splitArr.length-1; i>=0; i--) {
//         reverseArr.push(splitArr[i])
//     }
//     return reverseArr.join('')
// }

// function solution2(str){
//     return str.split('').reverse().join('')
// }

//SOLUTION FOUR - From Jordan
// Struggled with this until I discovered .join() on Stackoverflow
// https://stackoverflow.com/questions/958908/how-do-you-reverse-a-string-in-place
// Rather than copy the code, I incorporated .join() into the loop I was already attemping to create

// function reverseWord(string) {
//     let junkArray = [] // Create array to store all individual letters
//     for (element of string)
//         junkArray.push(element) // Loop to fill array with letters
//     junkArray.reverse() // Reverse order
//     // Here is where I incorporated .join() into my function
//     reversedString = junkArray.join('') // Turns new array into string...
//     return reversedString
// }

// answer = reverseWord("funny")
// console.log(answer)

// Previously, I attempted to use .toString() to turn the reversed array
// to a string, but I couldn't figure out how to get
// rid of the commas between each letter

//SOLUTION FIVE
// function solution(str){
//     let gnirts = ""
//     for (let i = str.length - 1; i >= 0; i --) { 
//           gnirts += str[i];
//     }
//     return gnirts
//   }

