import React, { Component } from 'react';
import './DummyApp.less';

import MovieCard from '../MovieCard';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      movieData: []
    }
    this.persistDataToLocalStorage = this.persistDataToLocalStorage.bind(this);
  }

  persistDataToLocalStorage(result) {
    this.setState({
      movieData: result.results
    })
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=f54c6cba706b27a69fb42891c0161325&language=en-US&page=1`)
      .then(response => response.json())
      .then(result => this.persistDataToLocalStorage(result));
  }

  render() {

    let MovieCards = [];

    if (this.state.movieData) {
      this.state.movieData.map((movie) => MovieCards.push(<MovieCard key={movie.id} data={movie} />));
    } else {
      MovieCards.push(null);
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
