/* eslint-disable */
import React, {useState} from "react"; 
import likeThumb from 'img/like-thumb.png';

export default function Poll({likeCnt = 0, onLike = f => f,
     styleFromParent={}}) {
    return <span style={{padding:"5px", ...styleFromParent}}
        onClick={()=>{onLike(likeCnt + 1);}}>
        <img src={likeThumb} width='30' height='24' />
        <span>{likeCnt}</span> 
    </span>;
    
  }
  