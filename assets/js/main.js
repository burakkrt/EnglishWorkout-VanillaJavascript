

// ------------- Message Box ---------------
function message(messageValue = String){

    const messageBoxHtmlDocument = document.getElementById("message-box");
    const messageHtmlDocument = document.getElementById("message-content");
    const message = messageValue;
    
    if(messageBoxHtmlDocument.getAttribute("class").includes("passive")){
        messageBoxHtmlDocument.classList.replace("passive","active");
        messageHtmlDocument.textContent = message;
    }
    else {
        messageBoxHtmlDocument.classList.add("active");
        messageHtmlDocument.textContent = message;
    }
    
        
    
    setTimeout(() => {
    
    if(messageBoxHtmlDocument.getAttribute("class").includes("active")){
        messageBoxHtmlDocument.classList.remove("active");
        messageBoxHtmlDocument.classList.add("passive");
    }
    }, 2000);

}