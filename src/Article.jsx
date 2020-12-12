import React from 'react';
import LikeButton from './LikeButton'

const Article = (props) => {
  return (
    <>
      <h2>{props.title}</h2>
      <label htmlFor="check" >公開状態：</label>
      <input type="checkBox" checked={props.isPublished} id="check" onClick={() => props.toggle()}/>
      <LikeButton count={props.count}></LikeButton>
    </>
  )
}
export default Article;