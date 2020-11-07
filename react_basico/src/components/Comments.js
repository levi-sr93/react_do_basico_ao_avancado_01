import React from 'react';
import { formatRelative } from 'date-fns';
import { enUS } from 'date-fns/locale';

import './Comments.css';
import userImg from '../assets/img/user.png';

const Comments = (props) => {
  // const style = {
  //   color: 'red',
  //   padding: '10px',
  //   fontSize: '30px',
  // };

  return (
    <div className="Comments">
      <img className="avatar" src={userImg} alt={props.name} />
      <div className="content">
        <h2 className="name">{props.name}</h2>
        <p className="email">{props.email}</p>

        <p className="message">{props.children}</p>
        <p className="date">
          {formatRelative(props.date, new Date(), { locale: enUS })}
        </p>
        <button onClick={props.onRemove}>X</button>
      </div>
    </div>
  );
};

export default Comments;
