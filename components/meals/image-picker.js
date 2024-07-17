"use client";
import React, { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [image, setImage] = useState();
  const imageInputRef = useRef();
  const handlePickClikced = () => {
    imageInputRef.current.click();
  };
  const handleImageChanged = (e) => {
    const file = e.target.files[0];
    if (!file) {
      setImage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!image && <p>Not image picked yet</p>}
          {image && <Image src={image} alt={"picked image"} fill />}{" "}
        </div>
        <input
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          className={classes.input}
          ref={imageInputRef}
          onChange={handleImageChanged}
          required
        />
        <button
          type="button"
          className={classes.button}
          onClick={handlePickClikced}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
