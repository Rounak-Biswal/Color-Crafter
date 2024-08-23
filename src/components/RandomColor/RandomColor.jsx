import React, { useState } from 'react'
import { generateRGB, generateHEX } from "../../utils/helper"
import style from "./RandomColor.module.css"

const RandomColor = () => {
  const [randomRGB, setRandomRGB] = useState(generateRGB())
  const [randomHEX, setRandomHEX] = useState(generateHEX())
  const [colorType, setColorType] = useState('hex')

  let generateNewRGB = () => setRandomRGB(generateRGB())

  let generateNewHEX = () => setRandomHEX(generateHEX())

  let ChangeColorType = (ChangedColorType) => setColorType(ChangedColorType)

  let generateRandomColor = () => {
    colorType === 'hex'
      ? generateNewHEX()
      : generateNewRGB()
  }

  let color =
    colorType == 'hex'
      ? randomHEX
      : randomRGB
  console.log(color)


  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      background: color
    }} className={style.main}>
      <h2>{colorType.toUpperCase()}</h2>
      <h1>{color}</h1>
      <div className="btns">
        <button onClick={() => ChangeColorType('hex')}>Use HEX Color</button>
        <button onClick={() => ChangeColorType('rgb')}>Use RGB Color</button>
        <button onClick={() => generateRandomColor()}>Generate Random Color</button>
      </div>
    </div>
  )
}

export default RandomColor
