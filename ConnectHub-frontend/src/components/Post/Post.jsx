import React, { useState } from 'react'
import './Post.css'
import Comment from '../../img/comment.png'
import Share from '../../img/share.png'
import Heart from '../../img/like.png'
import NotLike from '../../img/notlike.png'

const Post = ({ data }) => {
  const [comment, setCommentPopup] = useState(false);
  const CommentpopUp = () => {
    setCommentPopup(!comment)
  }
  const closeComment = () => {
    setCommentPopup(false);
  }


  const [commentBox, setComment] = useState("");
  const [commentsBoxs, setComments] = useState(["nice one!"]);
  const onClickcomment = () => {
    setComments((commentsBoxs) => [...commentsBoxs, commentBox])
  }

  const onChangeComment = (e) => {
    setComment(e.target.value);
  }

  return (
    <div className="Post">
      <img src={data.img} alt="" />


      <div className="postReact">
        <img src={data.liked ? Heart : NotLike} alt="" />
        <button onClick={CommentpopUp} className='commentPopbutton'><img src={Comment} alt="" /></button>
        {comment ?
          <div className='maincommentpop'>

            <div className='popUpcomment'>
              <div className='popCommentHeader'>
                <h1>Comment Box...</h1>
                <h1 onClick={closeComment}>X</h1>
              </div>
            </div>
            <div>
              <input type='text' placeholder='comments' value={commentBox} onChange={onChangeComment} className='commentinput' />
              <button onClick={onClickcomment} className='commentPost'>Post</button>
            </div>
          
            <div className='comment-scroll'>
              {commentsBoxs.map((text) => (
                <div className='comment-posting'>comments:<br />{text}</div>
              ))}
            </div>


          </div> : ''}

        <img src={Share} alt="" />
      </div>


      <span style={{ color: "var(--gray)", fontSize: '12px' }}>{data.likes} likes</span>

      <div className="detail">
        <span><b>{data.name}</b></span>
        <span> {data.desc}</span>
      </div>
    </div>
  )
}

export default Post