'use client'

import { FC, useRef, useState } from "react";
import c from "./style.module.css";
import Image from "next/image";

type Props = {
  label: string;
  name: string;
}

const ImagePicker: FC<Props> = ({ label, name }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const handlePickClick = () => inputRef.current?.click()
  const [pickedImage, setPickedImage] = useState<string>()

  const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]

    if (!file) {
      setPickedImage(undefined)
      return
    }

    const fileReader = new FileReader()

    fileReader.onload = () => {
      setPickedImage(fileReader.result as string)
    }

    fileReader.readAsDataURL(file)
  }

  return (
    <div className={c.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={c.controls}>
        <div className={c.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && <Image fill src={pickedImage} alt="Picked image" />}
        </div>
        <input
          className={c.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={inputRef}
          onChange={onImageChange}
          required
        />
        <button
          className={c.button}
          type="button"
          onClick={handlePickClick}
        >Pick an Image</button>
      </div>
    </div>
  )
}

export default ImagePicker;
