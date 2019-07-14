//print values

// var obj = {
//   name: "shashikant",
//   age: 22,
//   hasPets: false
// };
// function printAllValue(obj) {
//   var val = Object.values(obj);
//   console.log(val);
// }
// printAllValue(obj)

//print key

// var obj ={
//     name:"shashikant",
//     age :22,
//     hasPets:false
// }
// function printAllValue(obj){
//     var key = Object.keys(obj)
//     console.log(key)
// }
// printAllValue(obj)

// object into list Array
// entries convert array into list
// var obj = {
//     name: "shashikant",
//     age: 35,
//      role: "developer"};
// function convertListToObject(obj) {
//   var Arr = Object.entries(obj);
//   console.log(Arr)
// }
// convertListToObject(obj)
//problem 4
// var arr = ["GUVI", "I", "am", "a geek"];
// function transformFirstAndLast(arr) {
//     var newObject={};
//     var a =arr[0];
//     var b =arr[arr.length-1];
//     newObject[a] = b;
 
//  return newObject;
// }
// console.log(transformFirstAndLast(arr));

//problem 5
// var arr = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
// function fromListToObject(arr) {
//  var newObject = {};
//  arr.forEach(element => {
//    newObject[element[0]] = element[1];     
//  });
 
//  return newObject;
// }
// console.log(fromListToObject(arr))

//problem 6
// var arr = [[["firstName", "Vasanth"], 
// ["lastName", "Raja"], ["age", 24], 
// ["role", "JSWizard"]], [["firstName", "Sri"], 
// ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];

// function transformEmployeeData(arr) {
//     var tranformEmployeeList = [];
//     var format ={};
//     var anotherFormat= 0;
//     arr.forEach(elementOne => {
//         elementOne.forEach(elementTwo=>{
//          format[elementTwo[0]] =elementTwo[1];

//         });
       
//        tranformEmployeeList[anotherFormat] =format;
//        anotherFormat++;
        
//     });
    
//     console.log(tranformEmployeeList); 
    
//     return tranformEmployeeList;
//    }
//    transformEmployeeData(arr)

//problem 7
var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6};
function assertObjectsEqual(actual, expected, testName){
    if(JSON.stringify(expected)==JSON.stringify(actual)){
        console.log("passed")
    }else{
        console.log("failed")
    }
   }
   assertObjectsEqual(actual,expected,'detected both are equal')
