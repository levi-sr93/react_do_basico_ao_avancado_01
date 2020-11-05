import React from 'react';

import './Comments.css';

const Comments = (props) => {
  return (
    <div className="Comments">
      <h2>{props.name}</h2>
      <p>{props.email}</p>

      {props.children}
      <p>{props.date.toString()}</p>
    </div>
  );
};

export default Comments;
