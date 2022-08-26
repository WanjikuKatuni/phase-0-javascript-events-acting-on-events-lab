// Your code here

// const dodger = document.getElementById("dodger");

// dodger.style.backgroundColor = "#ff69b4"
// dodger.style.bottom = "0px";
// // dodger.style.left ="0px";


// document.addEventListener("keydown", function (event) {
//     if (event.key === "ArrowLeft") {
//       const leftNumbers = dodger.style.left.replace("px", "");
//       const left = parseInt(leftNumbers, 10);
  
//       dodger.style.left = `${left - 1}px`;
//     }
//   });


//move dodger left

const dodger = document.getElementById("dodger");

function moveDodgerLeft(){
    const leftNumbers = dodger.style.left.replace("px","");
    const left = parseInt(leftNumbers, 10)

    if(left>0){
        dodger.style.left = `${left -1}px`
    }
}

function moveDodgerRight(){
     const leftNumbers = dodger.style.left.replace("px","");
     const left = parseInt(leftNumbers, 10)

     if(left>0 && left<=360){
        dodger.style.left = `${left +1}px`
     }
}

document.addEventListener("keydown", (e)=>{
    if(e.key === "ArrowLeft"){
        moveDodgerLeft()
    }
    else(e.key === "ArrowRight");{
        moveDodgerRight()
    } 
});


//move dodger right
// document.addEventListener("keydown", (e)=>{
//     console.log(e)
// })