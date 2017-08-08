import React, { Component } from 'react';
import './App.less';
import MovieCard from '../../components/MovieCard';
import _ from 'lodash';
import {connect} from 'redux';

class App extends Component {

  constructor(props) {
    super(props);
    this.persistDataToLocalStorage = this.persistDataToLocalStorage.bind(this);
    this.state = {
      movieData: []
    }
  }

  persistDataToLocalStorage(result) {

  	let movieData = [];
  	_.forEach(result.results, (o) => {
  		movieData[o.id] = {
  			...o,
  			favorite: false
  		}
  	});

    this.setState({
      movieData,
      userMarkedFav: []
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
    }

    return (
      <div className="App">
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
