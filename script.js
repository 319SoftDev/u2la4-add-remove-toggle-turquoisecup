const heading= document.querySelector("#heading");
const subheading = document.querySelector("#subheading");
const reply = document.querySelector("#reply-message");
const Buttom= document.querySelector("#reply-button");
const send = document.querySelector("#send-button");
const cancel = document.querySelector("#cancel-button");
const opens = document.querySelector("#open-button")
const inbox = document.querySelector("#inbox")
const inboxy = document.querySelector("#inbox-message")
const mark = document.querySelector("#mark-button")
const cross = document.querySelector("#close")
const dark= document.querySelector("#page")
const darkbo= document.querySelector("darkB")
const changeFontColor= () => {
    heading.classList.add("blue-text");
};
const changeFontColor1= () => {
    subheading.classList.add("blue-text");
};
const appear = () => {
    reply.classList.remove("hidden");
};
const hide = () => {
    reply.classList.add("hidden");
};
const opened = () => {
    inbox.classList.add("is-read");
    inboxy.classList.remove("hidden");
    mark.classList.remove("hidden")
};
const closes = () =>{
    inbox.classList.remove("is-read");
    inboxy.classList.add("hidden");
    mark.classList.add("hidden")
}
const dMode = () =>{
dark.classList.add("dark-mode")
}


heading.addEventListener("click", changeFontColor);
subheading.addEventListener("click", changeFontColor1);
Buttom.addEventListener("click", appear);
send.addEventListener("click", hide);
cancel.addEventListener("click", hide);
opens.addEventListener("click", opened);
cross.addEventListener("click", closes);
darkbo.addEventListener("click", dMode);


    