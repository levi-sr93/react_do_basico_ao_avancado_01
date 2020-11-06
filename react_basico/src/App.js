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

    newComment: {
      name: '',
      email: '',
      message: '',
    },
  };

  handleAddComment = (event) => {
    event.preventDefault();
    console.log('Adding Comment');

    const newComment = { ...this.state.newComment, date: new Date() };

    this.setState({
      comments: [...this.state.comments, newComment],
      newComment: { name: '', email: '', message: '' },
    });
  };

  handleInputChange = (event) => {
    console.log(event.target.value);
    const { value, name } = event.target;
    this.setState({
      newComment: { ...this.state.newComment, [name]: value },
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

        <form method="post" onSubmit={this.handleAddComment}>
          <h2>Add comments</h2>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.newComment.name}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.newComment.email}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <textarea
              name="message"
              rows="4"
              value={this.state.newComment.message}
              onChange={this.handleInputChange}
            />
          </div>

          <button type="submit">Add comment</button>
        </form>
      </div>
    );
  }
}

export default App;
