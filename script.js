console.log('------------- # 5')

let ask = (question, yes, no) => {
    if (confirm(question)) yes()
    else no();
}

ask('Вы согласны?', () => console.log('Вы согласились.'),() => console.log('Вы отменили выполнение.'))

console.log('------------- # 6')

let str = 'my-short-string';
let arrSplit = str.split('-');
console.log(arrSplit);

console.log('------------- # 7')

let arrJoin = ['JavaScript', 2015];
let toStr = arrJoin.join(' ');
console.log(toStr);


console.log('------------- # 8')

let users = [
    {id: 1, name: "Vic", age: 21},
    {id: 2, name: "Petya", age: 30}, 
    {id: 3, name: "Jon", age: 5},
];

let checkAge = users.filter((item)=> item.age < 20);
console.log(checkAge)

console.log('------------- # 9')

let users2 = [
    {id: 1, name: "Vic", age: 21},  
    {id: 2, name: "Petya", age: 30}, 
    {id: 3, name: "Jon", age: 5}
];
let arry = users2.map((items) => items.name)

console.log(arry)

console.log('------------- # 10')

function filterRangeInPlace (arrNumber, a, b) {

    for (i = 0; i < arrNumber.length; i++){
        let numbers = arrNumber[i];
        
        if (numbers < a || b < numbers) {
            arrNumber.splice(i, 1);
            i--;
        }
    }
}
let arrNumber = [5,3,8,1]
filterRangeInPlace(arrNumber, 1, 4)
console.log(arrNumber)

console.log('------------- # 11')

function stringToArr (toArry, separator){
    let strToArr = toArry.split(separator)
    return strToArr
}

console.log(stringToArr('Hello my friend', ' ',))

console.log('------------- # 12')

function slArray(arr, startIndex, endIndex) {
        number =  arr.slice(startIndex, endIndex)
        return number
}

arrNumber = [1,2,3,4,5,6,7]

console.log(slArray(arrNumber, 1, 5))


console.log('------------- # 13')

function sumAll(...arrSummAll){
    let sum = 0;
    for (const arr of arrSummAll) {
        sum += arr;
    }
    return sum
}

console.log(sumAll(1,2))