import React, {useState} from "react"; 
import { FaStar } from "react-icons/fa";

export default function StarRating({rate = 1, id, onChgRate = f => f, 총별개수 = 5, styleFromParent={}}) {
    const createArray = (len) => [...Array(len)];

    return <div style={{padding:"5px", ...styleFromParent}}>
        {createArray(총별개수).map(
            (_, i) =>
            <FaStar key={i} 
                color={i < rate ? "red" : "gray"}
                onClick={()=>{onChgRate(id, i+1);}}/>
            )}
    </div>;
    
  }
  