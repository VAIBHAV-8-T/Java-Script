 let a =300
  if (true)   {
    let a = 10
    // const b =20
    // console.log("INNER:",a);
}
  
    


// console.log(a);
// console.log(b);

function one(){
    const username = "vaibhav"
    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)
    two()
}
// one{}



// ====== interesting======
addone(5)
function addone(num){
    return num + 1
}
addTwo(5)

const addTwo = function(num){
    return num +2
}