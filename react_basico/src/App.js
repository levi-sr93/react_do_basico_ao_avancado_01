import React, { Component } from 'react';
import './App.css';

import Comments from './components/Comments';

class App extends Component {
  state = {
    comments: [
      {
        name: 'Jonh',
        email: 'johndoe@email.com',
        date: new Date(2020, 3, 10),
        message: 'Hello there',
      },
      {
        name: 'Mary Anny',
        email: 'marylou@email.com',
        date: new Date(2020, 3, 22),
        message: 'Amazing',
      },
    ],
  };

  handleAddComment = () => {
    console.log('Adding Comment');

    const newComment = {
      name: 'Peter',
      email: 'peterpan@email.com',
      date: new Date(2020, 11, 5),
      message: 'Hello guys!',
    };

    // let commentList = this.state.comments;
    // commentList.push(newComment);
    // this.setState(commentList);

    this.setState({
      comments: [...this.state.comments, newComment],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>My project</h1>

        {this.state.comments.map((comment, index) => (
          <Comments
            key={index}
            name={comment.name}
            email={comment.email}
            date={comment.date}
          >
            {comment.message}
          </Comments>
        ))}

        <button onClick={this.handleAddComment}> Add Comment</button>
      </div>
    );
  }
}

export default App;
