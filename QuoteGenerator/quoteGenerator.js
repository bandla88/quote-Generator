const quoteText=document.querySelector(".quotearea .quote");
const authorName=document.querySelector(".author span:last-child");
quotebtn=document.querySelector("button");
soundbtn=document.querySelector(".sound");
copybtn=document.querySelector(".copy");
twitterbtn=document.querySelector(".twitter");

 //random quote function
function randomQuote(){
    quotebtn.innerText="Quote is Loading ....";
    //fetching randomquotes/data from the API and parsingit into data
    fetch("https://api.quotable.io/random").then(res=>res.json()).then(result=>{
        talk=result.content;
        quoteText.innerText=result.content;
        authorName.innerText=result.author;
        quotebtn.innerText="New Quote";

    });
    console.log("Clicked On New Quote");
}
function utterQuote(){
    let utterance = new SpeechSynthesisUtterance(quoteText.innerText);
    speechSynthesis.speak(utterance);
    console.log("Speak");

}
function copyQuote(){
    
    console.log(quoteText.innerText);
    navigator.clipboard.writeText(quoteText.innerText); 

}

soundbtn.addEventListener("click",utterQuote);
copybtn.addEventListener("click",copyQuote);
twitterbtn.addEventListener("click",()=>{
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl,"_blank");
});


quotebtn.addEventListener("click",randomQuote);