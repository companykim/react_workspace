import React, {useState} from "react"; 

export default function UpdatePostForm({createPostCallBack = f => f}) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [color, setColor] = useState("#a0a0a0");

    const submitArrowFUnc = e => {
        e.preventDefault();
        createPostCallBack({title, content, color});
        setTitle("");
        setContent("");
        setColor("#a0a0a0");
    };

    return <form onSubmit={submitArrowFUnc}>
        <input type="text" placeholder="게시글제목" 
            value={title} onChange={e=>setTitle(e.target.value)} required/>
        <textarea cols="50" rows="10" placeholder="게시글내용" 
            value={content} onChange={e=>setContent(e.target.value)} required></textarea>
        <input type="color" value={color}
            onChange={e=>setColor(e.target.value)} />
        <button>게시글등록</button>
    </form>;
  }
  