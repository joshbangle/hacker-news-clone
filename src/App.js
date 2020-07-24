import React, { Component } from 'react';
import './App.css';
import { fetchTopStories } from './utils/api'

class App extends Component {
  state = {
    stories: null,
    loading: true
  }

  componentDidMount() {
    const { loading } = this.state
    if(loading) {
      this.handleStoryLoad()
    }
  }

  handleStoryLoad = () => {
    fetchTopStories()
      .then((stories) => {
        this.setState({
          stories,
          loading: false
        })
      })

  }

  render() {
    const { stories, loading } = this.state

    if(loading) {
      return <h1>Loading</h1>
    }

    return (
      <div className="App">
        <ul>
          {stories && this.state.stories.map((story) => (
            <li key={story.id}>{story.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App