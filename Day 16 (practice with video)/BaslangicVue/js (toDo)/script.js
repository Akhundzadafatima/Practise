const btn=document.getElementById("btn")
const input=document.getElementById("input")
const mainDiv=document.getElementById("mainDiv")
btn.addEventListener("click", ()=>{
    const miniBox=document.createElement("li")
    miniBox.innerHTML=input.value
    mainDiv.append(miniBox)
})