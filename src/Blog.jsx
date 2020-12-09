import React from 'react';
import Article from './Article';

class Blog extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <>
        <Article title={"React"}/>
        <Article title={"Component"}/>
        <Article title={"再利用"}/>
      </>
    )
  }
}
export default Blog