//Functions 
        //let  name = "Priyanshu Priya"
        function greet(name,thanks = 'Thank You'){
            console.log(`Good Morning ${name} ${thanks}`);
            return 'This is return' + ' '+ 34;
        }
        
        let val = greet(name,'Thank You');
        console.log(val);
        const myonje ={
            nam :'Priyanshu' ,
            game : function(){
                return "GTA";
            }
        }
        console.log (myonje.game());