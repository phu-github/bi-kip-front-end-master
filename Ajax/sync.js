
// function first(){
//     console.log("Một");
// }
// function second(){
//     console.log("Hai");
// }
// function third(){
//     console.log("ba");
// }
// first();
// second();
// third();

// Mot
// Hai
// ba

// xxxxxxxxxx Issues xxxxxxxxxx 
// Thông thường, khi chúng ta yêu cầu dữ liệu từ một nguồn khác như API, thi

// function first(){
//     setTimeout( function(){
//         console.log("Một");
//     }, 5000 );
// }
// function second(){
//     console.log("Hai");
// }
// function third(){
//     console.log("ba");
// }
// first();
// second();
// third();

// Hai
// Ba
// Mot

//xxxxxxxx USE CALLBACK  xxxxxxx

// function first(callback){
//     console.log("Một");
//     callback();
// }
// function second(){
//     console.log("Hai");
// }
// function third(){
//     console.log("ba");
// }
// first(second);
// third();


//xxxxxxxx USE CALLBACK to FIX THIS  ISSUE 1 xxxxxxx

// function first(callback){
//     setTimeout( function(){
//         console.log("Một");
//         callback();
//     }, 5000 );
// }
// function second(){
//     console.log("Hai");
// }
// function third(){
//     console.log("Ba");
// }
// first(second);
// third();

// Ba
// Mot
// Hai

//xxxxxxxx USE CALLBACK to FIX THIS  ISSUE 2 xxxxxxx

// function first(callback, callback_1){
//     setTimeout( function(){
//         console.log("Một");
//         callback();
//         callback_1();
//     }, 5000 );
// }
// function second(){
//     console.log("Hai");
// }
// function third(){
//     console.log("Ba");
// }
// first(second, third);

// Mot
// Hai
// Ba

//xxxxxxxx CALLBACK HELL xxxxxxx

// function first(callback){
//     setTimeout( function(){
//         console.log("Một");
//         callback(third);
//     }, 3000 );
// }
// function second(call){   
//     console.log("Hai");
//     call();
// }
// function third(){
//     console.log("Ba");
// }
// first(second);

// Mot
// Hai
// Ba
