const body = document.querySelector("body")
const input = document.querySelector("#color")
const size = document.querySelector("#size")

body.addEventListener("click", (e)=>{
    if (e.target.localName === "input") {
        return
    }

    if (e.target.localName === "div") {
        e.target.remove()
        return
    }

    const styles = {
        background: input.value,
        top: `${e.y}px`,
        left: `${e.x}px`,
        width: `${size.value}px`,
        height: `${size.value}px`
    }

    let style = ''
    for (const key in styles) {
        style += `${key}:${styles[key]};`
    }

    body.insertAdjacentHTML('beforeend', `<div style="${style}"></div>`)
})
