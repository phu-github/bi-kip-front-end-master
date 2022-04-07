
// XXXXXXXX use PROMISE ES6XXXXXXXXXXXXX

// money = 1001;
// var p = new Promise( (resolve, reject) => {
//     if (money > 1000) 
//          resolve("Chúc mừng bạn da tu chu tai chinh");
//     else 
//          reject("Chua du tien");
// }).then( data =>   {console.log(data); return "mua nha";})
//   .then( data =>   {console.log(data); return "mua xe";})
//   .then( data =>   {console.log(data); })
//   .catch(data =>   console.log(data))


// xxxxxxxx Vd1  use async await xxxxxxxxxxxxxx
Flow: 1001 > tans gai > shakehand > kiss.
money = 1001;
async function getShakehand()  {
    console.log("Loading Nam Tay ..."); // *** // ***
    // A Promise
    var hand = new Promise (
        (resolve, reject) => {
           if (money>1000) {
               setTimeout( function() {
                   resolve("nam tay"); // fulfilled
               }, 1000); // 1 Seconds
           } else {
               var error = new Error('Need to make more money');
               reject(error); // reject
           } 
        }
    );
    return hand; // Return a Promise.
}

async function getKiss(shakeHand) {
    console.log("Loading hon ..."); // ***
    var kiss = new Promise(
       (resolve, reject) => {
            if(shakeHand = "nam tay")
              resolve("hon");
        }
    );

    return kiss; // Return a Promise.
}

// Main Function (Asynchronous function)
async function mainFunction()  {
    try {
        console.log("Start app ..."); // ***

        // Call muaNha(..) function with 'await' keyword:
        // It returns a File (Not Promise)
        var shakeHand = await getShakehand();
        console.log(shakeHand);

        // Call muaXe(..) function with 'await' keyword:
        // It returns a String (Not Promise)
        var kiss = await getKiss(shakeHand);
        console.log(kiss);

        console.log("End app.."); // ***
    } catch(e)  {
       console.log(e.kiss);
    }
}

// Call Main Function:
(async () => {
    await mainFunction();
})();


// xxxxxxxx Vd: 2 use async + await xxxxxxxxxxxxxx

// var isNetworkOK = true;

// // An Asynchronous function return a Promise
// async function downloadFile(url)  {
//     console.log("Start downloading file ..."); // ***

//     // A Promise
//     var willIGetAFile = new Promise (
//        (resolve, reject) => {

//            if (isNetworkOK) {
//                setTimeout( function() {
//                    console.log("Complete the download process!"); // ***
//                    var file = {
//                        fileName: 'file.mp3',
//                        fileContent: '...',
//                        fileSize: '3 MB'
//                    };
//                    resolve(file); // fulfilled
//                }, 5 * 1000); // 5 Seconds
//            } else {
//                var error = new Error('There is a problem with the network.');
//                reject(error); // reject
//            }
//         }
//     );

//     return willIGetAFile; // Return a Promise.
// }

// // An Asynchronous function return a Promise
// async function openFile(file) {
//     console.log("Start opening file ..."); // ***

//     var willFileOpen = new Promise(
//        (resolve, reject) => {
//              var message = "File " + file.fileName + " opened!"
//              resolve(message);
//         }
//     );

//     return willFileOpen; // Return a Promise.
// }

// // Main Function (Asynchronous function)
// async function mainFunction()  {
//     try {
//         console.log("Start app.."); // ***

//         // Call downloadFile(..) function with 'await' keyword:
//         // It returns a File (Not Promise)
//         var file = await downloadFile("http://example.com/file.mp3");

//         console.log(file);

//         // Call openFile(..) function with 'await' keyword:
//         // It returns a String (Not Promise)
//         var message = await openFile(file);

//         console.log(message);

//         console.log("End app.."); // ***
//     } catch(e)  {
//        console.log(e.message);
//     }
// }

// // Call Main Function:
// (async () => {
//     await mainFunction();
// })();


