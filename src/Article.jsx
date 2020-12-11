import React from 'react';

const Article = (props) => {
  return (
    <>
      <h2>{props.title}</h2>
      <label htmlFor="check" >公開状態：</label>
      <input type="checkBox" checked={props.isPublished} id="check" onClick={() => props.toggle()}/>
    </>
  )
}
export default Article;