const accesskey="d5MYIu5Cyn0HFRfFETvCrf91G3JMUoU2tdb_Xj14FgQ";

const formE1=document.querySelector("form");

const input =document.getElementById("searchy-input");

const searchresult =document.querySelector(".searchresults");

const showmore= document.getElementById("showmore");

let inputData="";
let page=1;

async function  searhimages(){
    inputData=input.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accesskey}`;

    const response =await fetch(url);
    const data= await response.json();

    const results =data.results;

    if(page===1){
        searchresult.innerHTML="";
    }

    results.map((result)=>{
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("searchresult");
        const image= document.createElement("img");
        image.src=result.urls.small;
        image.alt= result.alt_description;
        const imagelink=document.createElement("a");
        imagelink.href = result.links.html ;
        imagelink.target="_blank";
        imagelink.textContent= result.alt_description;


        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imagelink);
        searchresult.appendChild(imageWrapper);
    });
    page++
    if(page>1){
        showmore.style.display="block";
    }
}

formE1.addEventListener("submit",(event)=>{
event.preventDefault();
page=1;
searhimages();
})

showmore.addEventListener("click",()=>{

    searhimages();
  
    })
