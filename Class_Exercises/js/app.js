// ******* Exercise 1 ********
console.log("========= Exercise 1 =========")

let namesArray = ["Bill", "Ana", "Josephine", "Elena"];
console.log(namesArray);


function mapToArrayElementsLength() {
    return Object.values(arguments).map(x => x.length);

}
console.log(mapToArrayElementsLength(namesArray[0], namesArray[1], namesArray[2], namesArray[3]));




// ******* Exercise 2 ********
console.log("========= Exercise 2 =========")
let numbers = [];
for (let i = 1; i <= 100; i++)
    numbers[i] = i;
console.log(numbers);


function getDividableNumbers() {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 3 === 0 && numbers[i] % 7 === 0) {
            console.log(numbers[i]);
        }
    }

}
getDividableNumbers();


