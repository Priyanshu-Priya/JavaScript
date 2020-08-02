 //General Loops:for , while, Do ..while
    //for loop
    // for (let i=0; i < 100 ; i++) {
    //     // console.log (i);
    // }    
    //while loop
    let go = 0;
    // while(go<100){
    //     // console.log(go);
    //     // go += 1;
    // }
    //do while
    go = 0;
    // do {
        
    //     if (go === 5) {
    //         go++;
    //         continue;
    //     }
    //     console.log(go + 1);
    //     go++;
    // } while (go<100);
    
    //for each 
    // let arra = [2,3,4,5,1,2,3];
    // // arra.forEach(function(element,index,array){
    // //   console.log(element,index,array);
    // // });

    // or

    // for (let ar = 0; ar < arra.length; ar++) {
    //     const element = arra[ar];
    //     console.log(element);
    // }

//    let obje = {
    //     name: "Rohan Das",
    //     age: 78,
    //     type: "Dangerous Programmer",
    //     os:"Ubuntu"
    // }
    // for(let key in obje ){
    //     console.log(`${key} or object is ${obje[key]}`)
    // }
    console.log("done");
 // After Function 
    array = ["Fruits","Mango","Apple","Banana"]
   array.forEach(function(element, index, array) {
    console.log(element, index)
    });     