import React, { useState } from "react";

const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  return (
    <div className="py-4">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="my-4"
      />
      {selectedImage && (
        <img
          src={URL.createObjectURL(selectedImage)}
          alt="Selected"
          className="max-w-xs mx-auto"
        />
      )}
    </div>
  );
};

export default ImageUploader;
