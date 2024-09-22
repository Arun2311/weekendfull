import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

const MyComponent = () => {
  const [isPasswordProtected, setIsPasswordProtected] = useState(false);

  const handlePassword = (password) => {
    // Attempt to load the PDF with the provided password
    // If successful, setIsPasswordProtected(false)
    // If unsuccessful, setIsPasswordProtected(true)

    console.log(password);
    
  };


  const handle = ()=>{
    localStorage.setItem("token" ,"sdsadsajkdyt32dsaygsajdgjsagjdsahdjsdsyu")
  }

  return (
    <div>

        <h1>Arun</h1>
      {/* <Document  onPassword={handlePassword}>
        <Page pageNumber={1} />
      </Document> */}
      {/* {isPasswordProtected && <p>This PDF is password protected.</p>} */}


      <button onClick={handle}>stor</button>
    </div>
  );
};

export default MyComponent