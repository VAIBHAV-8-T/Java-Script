console.log("hello");
for (let index = 0; index < 10; index++) {
    console.log(index) 

    function sayHello(){
        console.log("hey there hello")
    }
     setTimeout(() => {
        sayHello()
     },4000);
    
}