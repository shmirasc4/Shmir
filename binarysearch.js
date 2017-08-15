var a= [
    "Air Jordan 11 Concords",
    "Flyknits",
    "Space Jams",
    "Yeezys",
    "Stan Smith",
    "OVO"
];

function binarySearch(arr, i) {
    var half = Math.floor(arr.length / 2);
    console.log(arr[half], i);
    if (arr[half] === i) {
        console.log('match', arr[mid], i);
        return arr[half];
    } else if (arr[half] < i && arr.length > 1) {
        console.log('mid lower', arr[half], i);
    } else if (arr[half] > i && arr.length > 1) {
        console.log('mid higher', arr[half], i);
    } else {
        console.log('not here', i);
        return -1;
    }

}
var result = binarySearch(a, "OVO");
console.log(result);