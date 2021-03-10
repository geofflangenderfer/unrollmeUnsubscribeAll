const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const unsubButtons = () => {
    return [...document.querySelectorAll('button')]
            .filter(b => b.innerText == "Unsubscribe")
}
const clickButton = (buttons) => {
    let button = buttons.pop()
    console.log(button) 
    button.click()
    
}
const unsub = async (buttons) => {
        sleep(1000)
        .then(clickButton(buttons))
        
}


const batch = async () => {
    const buttons = unsubButtons()
    while (buttons.length > 0) {
        await unsub(buttons)
    }
}

// right now, you must continually call this 
// need to think of a better way
await batch()

