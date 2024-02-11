const global = {}
window.onload = ()=>{
    global.documentTitle = document.querySelector("title").textContent
}

const changeTitle = (title)=>{
    if (typeof title === "string"){global.documentTitle = title}
}