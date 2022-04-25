// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time


let get = JSON.parse(localStorage.getItem("amount"))
document.getElementById("wallet").innerText=get;
function add(){
  let ad = document.getElementById("amount").value;
  // arr.push(ad);
  // console.log(arr);

  localStorage.setItem("amount",JSON.stringify(+ad))
  window.location.reload();
}


function myFunc(){
    
}


let dataArr = JSON.parse(localStorage.getItem("movie"))||[];
console.log(dataArr)
let mainDiv = document.getElementById("movie");

dataArr.map(function(e,i){
    let main = document.createElement("div");

    let image = document.createElement("img")
    image.src=e.Poster;
    
    let title = document.createElement("p");
    title.innerText=e.Title;

    main.append(image,title);
    mainDiv.append(main)

})