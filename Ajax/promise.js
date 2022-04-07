


// XXXXXXXX use PROMISE XXXXXXXXXXXXX
money = 1001;
var p = new Promise( (resolve, reject) => {
    if (money > 1000) 
         resolve("Start to love....");
    else 
         reject("Need to make money");
}).then( data =>   {console.log(data); return "Nam tay";})
  .then( data =>   {console.log(data); return "Kiss";})
  .then( data =>   {console.log(data); })
  .catch(data =>   console.log(data))


//// XXXXXXXX CALLBACK HELL XXXXXXXXX
// money = 1001;
// function chucmung(callback){
//     if (money > 1000) {
//         console.log("Chúc mừng bạn da tu chu tai chinh");
//         callback(muaxe);
//     }
//     else console.log("Chua du tien");
// }

// function muanha(call){
//     console.log("Mua nha");
//     call();
// }

// function muaxe(){   
//     console.log("mua xe");
// }

// chucmung(muanha);