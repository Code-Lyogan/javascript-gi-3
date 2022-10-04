let workout = (activity) => () => "Today's workout: " + activity;

let hoops = workout("Basketball");

let water = workout("Swimming");

let soc = workout("Soccer");

console.log(hoops(), water(), soc());