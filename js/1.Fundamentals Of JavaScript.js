//Comments In Java Script 
//This is Singal Line Comment.
/*This is Multiple Lines Comment. */

//"document.write" Command For Writing into HTML Document 
// document.write('Hellow world'); //Explained Below
// This Command is use to write in the documents. And HTML Tags can be directitly inseted in this Command.

//"console.'command'" command is for Console( Shortcut For Console in Google Chrome = Ctrl + Shift + I)
//Developers use Console for finding errors etc.
// console.time('time')
// console.log('Helow World');
// console.log(4+4);//Can Perform Arthmatical Oprations and  can be used for calculatons
// console.log(45); //Any Data type Can Be Loged e.g. -
// console.log([1,2,3,4,5]);
// console.log({Name:'Priyanshu', Gender:'Male'});
// console.table({Name:'Priyanshu', Gender:'Male'});
// console.warn('This is a Warning');
// console.error('This is an error');
// // console.clear();
// console.timeEnd('time');
// console.assert(600<200, 'Age>200 ,This is not Possible');


//  Variables In JavaScript
// There are three ways of Declaaring Variables / Types of Varables.
//     1.var //Not used these Days.
//     2.let
//     3.const 

//   1.  Declaration of Variables
//     e.g.-  var x = "Data"
//                |     |
//     Variable name    Value Of the Vriable
//     Note:(i) Variable Name should not contain any space between them.
//         (ii)Variable Name Should Not Begin With Numbers.
//         (iii)Variable Name can start with letters , numbers , _ , $.
//         (iv) Variable Name are case Sensitive.
//         *(v)*Hyphens are not allowed in JavaScript Variables names.
//         (vii)Can use Most Common Used Cases:
//              1.camelCase
//              2.kabab-case
//              3.snake_case
//              4.PascalCase
//
//

 
    // 1.        var x = "This is the value of a Variable"; // 'var' has a function/global lavel scope.
    //         x = 'Reassigned value of the Variable' //Vaiables Assined by 'var'can be reassigned .And var is not needed to be writen next time(multiple time) during Reassignment of the varible.
    //         var y , z;  // In This(var) type of variable ,its is also posible that variables Can be fist made at other place and Decleared at other place. And Multiple variables can also be made during this process.
    //         y = 10;//And Any Type of Varables(Explain Later) can be Declared By using var.
    //         z = true;
    //         var z = 8; //Value of 'var' can also be declared Multiple Times (Unlike 'let').
    //         document.write('x'); //This will print the vlaue of the variable 'x'.
       
    // 2.      let a = "This is the value of the variable a" ; // 'let' has a block lavel scope .
    //          // The Only difference between 'var' and 'let' regardless of scope is that 'var' can be reassigned and redeclared also but  'let' can be Reassigned but can not redeaclared.
    //          // e.g.- var b = "true"  //variable declared and assigned
    //          //           b = "true 2" //variable reassigned
    //          //       var b = "true 3" //variable redeclared
    //          //         but||
    //          //       let c = "true"  //variable declared and assigned
    //          //           c = "true 2"  //variable reassigned
    //          //      * let c = "false" *  //variable redeclared not possible.
             
    // 3.      const d = "";  //   'const'  Constant Variable and has a block lavel scope.
    //          // Value of 'const' neither be reassigned  nor be redeclared.That's why 'const' is known as Constant Variable. 
    //          // 
    //          // e.g.-  let d = "true"  //variable declared and assigned
    //          //           *d = "true 2" *  //variable reassignment  not possible.
    //          //      * let d = "false" *  //variable redeclared not possible.

         // Data Types of the Variable's Value
                // 1.Primitive Data Type (Memory Alloction - Stack)
                //    (i)String          "Priyanshu"
                //    (ii)Numbers        34
                //    (iii)Boolean       true/false
                //    (iv)Null           null 
                //    (v)Undefined       undefined/0
                //    (vi)Symbol         //New in ES6
                //
                // 2.Reference Data Type (Memory Alloction - Heap)Derived
                //    (i)Arrays                 ["HTML","CSS","JS"];
                //    (ii)Object Literals       {firstName:"Priyanshu",lastName:"Priya"}
                //    (iii)Functions
                //    (iv)Dates

                // ~Type of Operator Return THe Data Type of Any data~
                // 1.Primitive Data Type (Memory Alloction - Stack)
                //  Strings
                    let e = "Priyanshu" 
                    // console.log("My String is " + e);
                    // console.log("Data Type is " + (typeof e));
                //  Numbers
                    let f = 34; 
                    // console.log("My Number is " + f);
                    // console.log("Data Type is " + (typeof f));
                //  Boolean
                    let g = true; 
                    // console.log("My Boolean is " + g);
                    // console.log("Data Type is " + (typeof g));
                //  Null
                    let h = null; 
                    // console.log("My Null is " + h);
                    // console.log("Data Type is " + (typeof h));
                //  Undefined
                    let j ; 
                    j = undefined;
                    // console.log("My Undefined is " + j);
                    // console.log("Data Type is " + (typeof j));
                //  Symbol //Later ON
                    // let k = true; 
                    // console.log("My Symbol is " + k);
                    // console.log("Data Type is " + (typeof k));

                // 2.Reference Data Type (Memory Alloction - Heap)Derived   
                // Arrays
                    let l = [1,2,3,"String",true,false]
                    // console.log(l);
                    // console.log("Data Type is " + (typeof l));
                //Object Literls
                    let m = {
                        'Priyanshu Priya':100,
                        Rohan:45,
                        Rahul:54
                    }
                    // console.log(m)
                    // console.log("Data Type is " + (typeof m));
                //Function
                    function n() {
                        
                    }
                    // console.log( typeof n)
                 //Dates
                    let date = new Date();
                    // console.log(date);
                    // console.log(typeof date);

            //Type Conversion bcause We Can Apply Method Of Perticular Data Type
                    // To string 
                    //1. 
                        //From Numbers
                        let o; 
                        o = String(34);
                        // console.log(o , (typeof o));
                        //From Boolen
                        let p = String(true);
                        // console.log(p , (typeof p));
                        //From Date
                        let q = String(new Date());
                        // console.log( q, (typeof q));
                        //From Arrays
                        let r = String([1,2,3,4,5]);
                        // console.log( r.length, (typeof r));
                    //2.    
                        //From Numbers
                        let s = 75;
                        // console.log(s.toString(), (typeof s));
                        //etc.

                    // To Number
                        let t; 
                        t = Number("3475");
                        // console.log(t , (typeof t));
                        // Not A Number Error
                        let u; 
                        // u = Number("34d75");       //Error
                        // u = Number([1,2,3,4,5]);   //Error
                        // u = Number(true)           // Not an Error
                        // console.log(u , (typeof u));

                       // Parse int and Parse Float .tofixed
                        //From String
                        let v = parseInt('35.3725');
                        v = parseFloat('35.3725');
                        // console.log( v, (typeof v));
                        // console.log( v.toFixed(2), (typeof v));

                    //Type Coersion
                            let w = "23";
                            let z1 = 34; //number To String Consadinate
                            // console.log(w+z1);
                //Note:-            
                //method = x.method(y)
                //Property = x.property;
                
            //Strings - Properties, Methods, Templete Literals
                    
                    const name = 'Priyanshu';
                    const greeting = 'Good Morning';
                    // console.log(greeting + ' ' + name);
                    
                    let html;
                    html  = "<h1> this is heading</h1>"+
                            "<p> this is My para</p>";
                    
                //Functions/Property Of Strings
                    html = html.concat('this', ' str2'); //Concadinates
                    // console.log(html);
                    // console.log(html.length);//lenth Of the No. of Charecters
                    // console.log(html.toLowerCase());
                    // console.log(html.toUpperCase());
                    // console.log(html);
                    
                    
                    // console.log(html[1]);
                    // console.log(html.indexOf('<'));
                    // console.log(html.lastIndexOf('<'));
                    // console.log(html.charAt(3));
                    // console.log(html.endsWith('dsfsdfd'));
                    // console.log(html.includes(' fg'));
                    // console.log(html.substring(1,6));
                    // console.log(html.slice(0, 4))
                    // console.log(html.split(' '));
                    // console.log(html.replace('this', 'it'));
                
                //Template Literals    //ES6
                    let fruit1 = 'Orange\'';
                    let fruit2 = 'Apple';
                    let myHtml = `Hello ${name}
                                <h1> This is "my" heading </h1>
                                <p> You like ${fruit1} and ${fruit2}`;
                    
                    // document.body.innerHTML = myHtml;            
            

            //Array and Object Properties,Methods And Functions
                    let marks = [34, 23, 24, 93 ,73, 25];
                    const fruits = ['Orange', 'Apple', 'Pineapple'];
                    const mixed = ['str', 89, [3, 5]];
                    
                    const arr = new Array(23,123,21, 'Orange');//Array Constructor
                    // console.log(arr);
                    // console.log(marks);
                    // console.log(mixed);
                    // console.log(fruits[1]);
                    
                    // console.log(arr.length);
                    // console.log(Array.isArray(arr));
                    arr[0] = 'Priyanshu';
                    let arrelement = arr[0];
                    // console.log('element :', arrelement);
                    // console.log(arr);
                    
                    let value = marks.indexOf(73);
                    // console.log(value);
                    
                // Mutating or Modifying arrays //Changes Orogonal Value
                    // marks.push(3564); // Add to Last Of Array
                    // marks.unshift(1009); //Add to begaining of Array
                    // marks.pop()    //Remove one Element From Last
                    // marks.shift()  //Remove one Element From first
                    // marks.splice(2, 3); //Remove Element By Address
                    // marks.reverse()   //Reverse The Array
                    let marks2 = [1, 2,3, 7]
                    marks = marks.concat(marks2);
                    // console.log(marks);
                //Ojects    
                    let myobj = {
                        'first name': 'Priyanshu', 
                        fullName: 'Priyanshu Priya',
                        isActive: true,
                        marks: [1,5,3,6]
                    }
                    
                    // console.log(myobj);
                    // console.log(myobj['fullName']); //1st Way
                    // console.log(myobj.fullName);    //2nd Ways

        //Operators In JavaScript
                //1.Arithmetic Operrators
                    //Operators  Description
                    //(i)   +    Addition
                    //(ii)  -    Subtraction
                    //(iii) *    Multiplication
                    //(iv)  **   Exponentiation
                    //(v)   /    Division
                    //(vi)  %    Modulus(Remainder)
                    //(vii) ++   Increment
                    //(viii)--   Decrement
                
                //2.Assignment Operators
                    //     Operators  Example   Same As
                    //(i)   =           x=y       x = y 
                    //(ii)  +=          x+=y      x = x + y
                    //(iii) -=          x-=y      x = x - y
                    //(iv)  *=          x*=y      x = x * y  
                    //(v)   /=          x/=y      x = x / y
                    //(vi)  %=          x%=y      x = x % y
                    //(vii) **=         x**=y     x = x ** y
                //3.Comparison Operators
                    //        Operators    Description
                    // (i)      ==      	equal to
                    //(ii)      ===     	equal value and equal type
                    //(iii)     !=	        not equal
                    //(iii)     !==	        not equal value or not equal type
                    //(iii)     >        	greater than
                    //(iii)     <	        less than
                    //(iii)     >=          greater than or equal to
                    //(iii)     <=	        than or equal to
                    //(iii)     ?	        ternary operator
                //4.Logical Operators
                    // Operator	   Description
                    //(i) &&	    logical and
                    //(ii)||	    logical or
                    //(iii)!	    logical not
                    //
                //5.Type Operators
                    //   Operator	    Description
                    //(i)  typeof	    Returns the type of a variable
                    //(ii) instanceof	Returns true if an object is an instance of an object type
        //Ternary Oerator
        // console.log(age==45? 'Age is 45' : "age is not 45")


        
    


       