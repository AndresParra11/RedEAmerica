import { useState } from 'react';
//import { File } from 'react-kawaii';
import { CloudinaryContext, Image } from 'cloudinary-react';

const CloudinaryUpload = () => {
  const [file, setFile] = useState(null);
  const [uploadedUrl, setUploadedUrl] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Seleccione un archivo para cargar');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'tu_upload_preset_de_cloudinary');

    try {
      const response = await fetch('https://api.cloudinary.com/v1_1/tu_cloud_name/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setUploadedUrl(data.secure_url);
      } else {
        console.error('Error al cargar el archivo a Cloudinary');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Cargar</button>

      {uploadedUrl && (
        <CloudinaryContext cloudName="tu_cloud_name">
          <Image publicId={uploadedUrl} width="300" crop="scale" />
        </CloudinaryContext>
      )}
    </div>
  );
};

export default CloudinaryUpload;