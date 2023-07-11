import { Container } from './styles';
import React, { useState } from 'react';
import { MdOutlineFileUpload } from "react-icons/md";


export function InputFile() {
  const [fileName, setFileName] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName('');
    }
  };

  return (
    <Container>
      <div className="file-input">
        <input type="file" onChange={handleFileChange} />
        <label><MdOutlineFileUpload className="icon"/> Selecione Imagem</label>
      </div>
      <span>{fileName}</span>
      </Container>
  );
}


