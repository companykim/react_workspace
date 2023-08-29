import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PostDetail from './PostDetail';
import ModifyPostForm from './ModifyPostForm';
import { Alert } from 'react-bootstrap';

function PostModal({postInfo={}, modalMode, createPost=f=>f, onRemove=f=>f, onUpdate=f=>f}) {
    const [show, setShow] = useState(!(modalMode==="CREATE"));
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Button className="btn" variant="outline-primary" onClick={handleShow}>
                {modalMode==="CREATE" ? "글등록":"상세"}</Button>

            <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title>게시글</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            {/* 즉시 실행 함수 */
            (() => {
                switch (modalMode) {
                        case "CREATE":
                            return <ModifyPostForm mode = {modalMode} onCreate={createPost}/>;
                        case "UPDATE":
                        return;
                      }
                    })()}
            </Modal.Body>
            <Modal.Footer>
                <Button className="btn" variant="secondary" onClick={()=>{}}>
                    수정
                </Button>
                <Button className="btn_danger" variant="outline-danger" onClick={()=>{onRemove(postInfo.id)}}>
                    삭제
                </Button>
                <Button className="btn_close" variant="secondary" onClick={handleClose}>
                    닫기
                </Button>
            </Modal.Footer>
        </Modal>
        </div>
    )
}
export default PostModal;