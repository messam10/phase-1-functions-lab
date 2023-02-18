function distanceFromHqInBlocks(num) {
    return Math.abs(num - 42);
}
function distanceFromHqInFeet(num) {
    return 264 * distanceFromHqInBlocks(num);
}
function distanceTravelledInFeet(start, destination) {
    return 264 * Math.abs(start - destination);
}
function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) return 0;
    else if (distance > 400 && distance <= 2000) return (distance - 400) * 0.02;
    else if (distance > 2000 && distance < 2500) return 25;
    else return "cannot travel that far";
}

console.log(distanceFromHqInBlocks(43));
console.log(distanceFromHqInBlocks(50));
console.log(distanceFromHqInBlocks(34));
console.log(distanceFromHqInFeet(43));
console.log(distanceFromHqInFeet(50));
console.log(distanceFromHqInFeet(34));
console.log(distanceTravelledInFeet(43, 48));
console.log(distanceTravelledInFeet(50, 60));
console.log(distanceTravelledInFeet(34, 28));
console.log(calculatesFarePrice(43, 44));
console.log(calculatesFarePrice(34, 32));
console.log(calculatesFarePrice(50, 58));
console.log(calculatesFarePrice(34, 24));