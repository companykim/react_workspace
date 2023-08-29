/* eslint-disable */
import React, { useState } from "react";
import Poll from 'rating/Poll';
import PostDetail from './PostDetail';
import Button from 'react-bootstrap/Button';
import PostModal from "./PostModal";
/*
개요적 표현은 TR 안에 td로 구성하고 상세로 Modal처리
*/
export default function PostAbstract({ postInfo, meta, onRemove = f => f, onUpdate=f=>f }) {
  return <tr>
{/*
    메타로 받은 것들을 바탕으로 정보객체에서 속성값 꺼내어 TD 만들기
  */}
  {meta.map((column, idx)=><td>{postInfo[column.propName]}</td>)}
  <td><Button onClick={()=>{}}>상세</Button></td>
  </tr>;
}
