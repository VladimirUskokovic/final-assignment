import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      entries: []
    };
  }

  componentDidMount() {
    fetch('http://localhost/final_assignment/public/data')
      .then(response => response.json())
      .then(entries => {
        this.setState({
        entries
      });
  });
  }

  render() {
    return (
      <ul style={{ display: 'flex' }}>
    {this.state.entries.map(
      ({ id, author, avatarUrl, title, description }) => (
    <li
      key={id}
      author={author}
      title={title}
      avatarUrl={avatarUrl}
      style={{ flex: 1, margin: 10 }}
    >
      author: {author},
      title: {title},
      avatarUrl: {avatarUrl},
      description: {description}
    </li>
    )
    )}
  </ul>
  );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));