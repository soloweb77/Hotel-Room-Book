import React from 'react'
import { useState, CSSProperties } from "react";
import CircleLoader from "react-spinners/CircleLoader";

// const override = `  
//     display: "block",
//     margin: "0 auto",
//     borderColor: "red",
//   `;
  

function Loader() {
    let [loading, setLoading] = useState(true);
    // let [color, setColor] = useState("#ffffff");

  
    return (
        <div  className="text-center" style={{justifyContent:'center',display:'flex',marginTop:'220px' }}>
            <div className="sweet-loading text-center">

                <CircleLoader
                    color='#000'
                    loading={loading}
                    css=''
                    size={80}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>
        </div>
    )
}

export default Loader
