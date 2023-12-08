import Link from "next/link";
import React from "react";

function ErrorPage() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Oops, Something Went Wrong</h1>
      <br></br>
      <Link
        href={"/"}
        style={{
          borderWidth: "2px",
          borderRadius: "25px",
          borderStyle: "solid",
          borderColor:'black',          
          maxWidth:'25px',
          maxHeight:'15px',
          background:'black',
          color:'white',
          padding:'12px',
          marginTop:'105px'
        }}
      >
        Home Page
      </Link>
    </div>
  );
}

export default ErrorPage;
