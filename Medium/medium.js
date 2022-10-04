function cutPizzaSlices(numOfSlices) {

    return function(peopleEating) {

    let share = (numOfSlices/peopleEating).toFixed(2);

    return `each person gets ${share} slices of pizza`;
    }
}

let sharePizza = cutPizzaSlices(12);

console.log(sharePizza(2));

console.log(sharePizza(3));

console.log(sharePizza(4));

console.log(sharePizza(5));

console.log(sharePizza(6));