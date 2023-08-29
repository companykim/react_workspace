/* eslint-disable */

import React, { useState } from "react";
import dataFromServer from 'post/model/post-data.json';
import PostAbstract from './PostAbstract';
import CreatePostForm from './CreatePostForm';
import PostModal from "./PostModal";

export default function ListPost() {
    const meta = dataFromServer.meta;
    //propName, propCaption

    const [arrPost, setArrPost] = useState(dataFromServer.posts);
    const [modalMode, setModalMode] = useState("CREATE");

    return (<>
        <PostModal modalMode={modalMode} createPost={
            (newPost) => {
                setArrPost([...arrPost, { ...newPost, likeCnt: 0 }]);
                setModalMode("CREATE");
            }}/>
        <table>
            <thead>
                <tr>
                    {meta.map((column, idx) => <th>{column.propCaption}</th>)}
                </tr>
            </thead>
            <tboby>
                {arrPost.map((post, i) =>
                    <PostAbstract key={post.id} postInfo={post} meta={meta}
                        onUpdate={(updatedPost)=>{
                            const modifiedPost = arrPost.map(post => {post.id === updatedPost.id ? updatedPost : post});
                            setArrPost(modifiedPost);
                        }}
                        onRemove={id => {
                            const modifiedPost = arrPost.filter(post => post.id !== id);
                            setArrPost(modifiedPost);
                        }}
                    />)
                }
            </tboby>
        </table>

    </>)
}
