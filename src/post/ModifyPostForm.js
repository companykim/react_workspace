import React, {useState} from "react"; 
import {useInput} from "custom_hook/useInput"; 

export default function ModifyPostForm({post={}, mode, onCreate=f=>f, onUpdate=f=>f, onRemove=f=>f}) {
    const [titleProps, resetTitle] = useInput(mode === "CREATE" ? "" : post.title)
    //const [title, setTitle] = useState(mode === "CREATE" ? "" : post.title);
    const [content, setContent] = useState(mode === "CREATE" ? "" : post.content);
    const [color, setColor] = useState(mode === "CREATE" ? "#a0a0a0" : post.color);

    const submitArrowFUnc = e => {
        e.preventDefault();
        if (mode === "CREATE") {
            // 객체의 속성명에 .은 활용될 수 없다. {title:titleProps.value, content, color}
            onCreate({title:titleProps.value, content, color});
        } else if (mode === "UPDATE") {
            //onUpdate({...post, title, content, color});
        }
        resetTitle();
        setContent("");
        setColor("#a0a0a0");
    };

    return <form onSubmit={submitArrowFUnc}>
        <input type="text" placeholder="게시글제목" 
            {...titleProps} required/>
        <textarea cols="50" rows="10" placeholder="게시글내용" 
            value={content} onChange={e=>setContent(e.target.value)} required></textarea>
        <input type="color" value={color}
            onChange={e=>setColor(e.target.value)}/>
        <button>{mode ==="CREATE" ? "게시글등록" : "게시글수정"}</button>
    </form>;
  }
  