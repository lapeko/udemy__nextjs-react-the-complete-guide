'use client'

import { FC, useRef } from "react";
import c from "./style.module.css";

type Props = {
  label: string;
  name: string;
}

const ImagePicker: FC<Props> = ({ label, name }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const handlePickClick = () => inputRef.current?.click()

  return (
    <div className={c.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={c.controls}>
        <input
          className={c.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={inputRef}
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
