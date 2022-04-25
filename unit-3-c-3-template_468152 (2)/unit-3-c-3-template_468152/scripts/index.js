// Store the wallet amount to your local storage with key "amount"
let query=(id)=>{
    return document.querySelector(id).value;
}
let paise=JSON.parse(localStorage.getItem("amount"))||0;
document.querySelector("#wallet").innerText=paise;
//console.log(typeof paise)
let MyCode=()=>{
    let amount=query("#amount")
    //console.log(paise);
    paise+=Number(amount);
    localStorage.setItem("amount",JSON.stringify(paise));

    document.querySelector("#wallet").innerText=paise;
}



// let get = JSON.parse(localStorage.getItem("amount"))
// document.getElementById("wallet").innerText=get;
// function add(){
//   let ad = document.getElementById("amount").value;
//   // arr.push(ad);
//   // console.log(arr);

//   localStorage.setItem("amount",JSON.stringify(+ad))
//   window.location.reload();
// }

// let total = JSON.parse(localStorage.getItem("amount"))||[];

// let c=0;
// for(let i=0; i<total.length; i++){
//     c+= +total[i]
// }
// console.log(length)

// function addFunc(){
//     let amount = document.getElementById("amount").value;
//     total.push(amount)
//     localStorage.setItem("amount",JSON.stringify(amount));
// }




// Store the wallet amount to your local storage with key "amount"
// document.querySelector('#form').addEventListener('submit', formFunct);

// totalAmount=JSON.parse(localStorage.getItem("amount")) || [];


// function addAmount(){
//     let totalAmount=0
//     let amount= document.getElementById('amount').value;
//     totalAmount+=amount

    
//     console.log(totalAmount)
//     localStorage.setItem('amount',JSON.stringify(totalAmount));
// }
