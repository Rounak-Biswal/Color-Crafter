function generateRGB() {
    let arr = []
    arr[0] = Math.floor(Math.random() * 256)
    arr[1] = Math.floor(Math.random() * 256)
    arr[2] = Math.floor(Math.random() * 256)
    return `rgb(${arr[0]},${arr[1]},${arr[2]})`
}

function generateHEX() {
    // let hexCode = Math.floor(Math.random() * 999999)
    // return `#${hexCode}`
    let hexCode = "#"
    let sample = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
    for (let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * (sample.length));
        hexCode += sample[randomIndex];
    }
    return hexCode
}

export { generateRGB, generateHEX }