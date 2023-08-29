import Poll from 'rating/Poll';
import UpdatePostForm from './UpdatePostForm';
import Button from 'react-bootstrap/Button';

/*
    메타로 받은 것들을 바탕으로 정보객체에서 속성값 꺼내어 TD 만들기
    {meta.map((column, idx)=><td>{data[column.propName]}</td>)}
*/

export default function PostDetail({ postInfo,
   onLike = f => f}) {
  return (
    <section>
      <h3>{postInfo.title}</h3>
      <p>{postInfo.content}</p>
      <div>
        <Poll likeCnt={postInfo.likeCnt} id={postInfo.id} onLike={onLike}
          styleFromParent={{ backgroundColor: "yellow" }} />
      </div>
    </section>
  );
}
