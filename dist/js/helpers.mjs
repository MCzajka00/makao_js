
export const createTag = (config) => {
    const tag = document.createElement(config.tagName)

    if (typeof config.className !== "undefined" && Array.isArray(config.className)){
        config.className.forEach((cl) => {
            tag.classList.add(cl)
        })
    }else if (typeof config.className !== 'undefined'){
        tag.classList.add(config.className)
    }

    if (typeof config.id !== 'undefined'){
        tag.id = config.id
    }

    if (typeof config.text !== 'undefined'){
        const textTag = document.createTextNode(config.text)
        tag.appendChild(textTag) 
    }

    if (typeof config.attrs !== 'undefined'){
        config.attrs.forEach((attr) => {
            tag.setAttribute(attr.name, attr.value)
        })
    }

    if (typeof config.evts !== 'undefined'){
        config.evts.forEach((evt) => {
            tag.addEventListener(evt.type, evt.cb)
        })
    }

    return tag
}