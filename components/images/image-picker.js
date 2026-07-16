'use client'

import { useRef, useState } from "react"
import classes from "./image-picker.module.css"
import Image from "next/image";

export default function ImagePicker({label, name}) {
  const [pickedImage, setPickedImage] = useState()
  const inputRef = useRef();
  function handleInput(event) {
   inputRef.current.click();
  }
  function handleImageChange(event) {
   const file = event.target.files[0];
   if (!file) {
    setPickedImage(null);
    return;
   }
   const fileReader = new FileReader();
   fileReader.onload = () => {
    setPickedImage(fileReader.result);
   };
   fileReader.readAsDataURL(file);
  }
  return (
   <>
    <div className={classes.picker}>
     <label htmlFor={name}>{label}</label>
     <div className={classes.controls}>
      <div className={classes.preview}>
       {!pickedImage && <p>No Image picked yet</p>}
       {pickedImage && (
        <Image
         src={pickedImage}
         fill
         alt="picked-image"
        />
       )}
      </div>
      <input
       onChange={handleImageChange}
       ref={inputRef}
       className={classes.input}
       type="file"
       id={name}
       accept="image/png, image/jpeg"
       name={name}
       required
      />
      <button
       className={classes.button}
       type="button"
       onClick={handleInput}>
       Pick an Image
      </button>
     </div>
    </div>
   </>
  );
}