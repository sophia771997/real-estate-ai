const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

function addMessage(text, sender) {

    const div = document.createElement("div");

    div.className = sender;

    div.innerHTML = text;

    chatBox.appendChild(div);

    chatBox.scrollTop = chatBox.scrollHeight;
}

function botReply(userMessage){

    setTimeout(()=>{

        addMessage("🤖 Demo Reply:<br><br>You said:<br><b>"+userMessage+"</b><br><br>Next we'll connect Gemini AI.", "bot");

    },700);

}

sendBtn.addEventListener("click", ()=>{

    const msg = userInput.value.trim();

    if(msg==="") return;

    addMessage(msg,"user");

    userInput.value="";

    botReply(msg);

});

userInput.addEventListener("keypress",function(e){

    if(e.key==="Enter"){

        sendBtn.click();

    }

});
