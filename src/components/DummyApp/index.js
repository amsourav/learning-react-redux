import React, { Component } from 'react';
import axios from 'axios';
import './DummyApp.less';

import MovieCard from '../MovieCard';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      movieData: []
    }
  }

  componentDidMount() {

    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=f54c6cba706b27a69fb42891c0161325&language=en-US&page=1`).then((result) => {
      this.setState({
        movieData: result.data.results
      })
    })
  }

  render() {

    let MovieCards = [];

    if (this.state.movieData) {
      this.state.movieData.map((movie) => {
        MovieCards.push(<MovieCard data={movie} />);
        return;
      });      
    } else {
        MovieCards.push(null);
        return;
    }

    return (
      <div className="DummyApp">
        <div className="Container">
          <div className="Movies__Container">
            {MovieCards}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
