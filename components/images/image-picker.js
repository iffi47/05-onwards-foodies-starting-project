'use client'

import { useRef, useState } from "react"
import classes from "./image-picker.module.css"

export default function ImagePicker({label, name}) {
  const [pickedImage, setPickedImage] = useState()
  const inputRef = useRef();
  function handleInput(event) {
    inputRef.current.click();
  }
  return(
    <>
      <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
          <input ref={inputRef} className={classes.input} type="file" id={name} accept="image/png, image/jpeg" name={name} />
          <button className={classes.button} type="button" onClick={handleInput}>Pick an Image</button>
        </div>
      </div>
    </>
  )
}