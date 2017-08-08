import React, { Component } from 'react';
import './DummyApp.less';

import MovieCard from '../MovieCard';
import Select from 'react-select';
import { store } from '../../store';
import { DATA_FETCH_REQUEST, DATA_FETCH_FALIURE } from '../../constants/actionTypes';
import _ from 'lodash';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      movieData: [],
      filteredMovieData: [],
      filteredView: false,
      sortSelectValue: {value: null, label: null},
      yearSelectValue: {value: null, label: null}
    }
    this.persistDataToLocalStorage = this.persistDataToLocalStorage.bind(this);
    this.logSortSelectChange = this.logSortSelectChange.bind(this);
    this.logYearSelectChange = this.logYearSelectChange.bind(this);
  }

  persistDataToLocalStorage(result) {
    this.setState({
      movieData: result.results
    })
  }

  logSortSelectChange(sortSelectValue) {
    let filteredMovieData;
    switch(sortSelectValue.value) {
      case 'rl':
        filteredMovieData = _.sortBy(this.state.movieData, [function(o) {
          return -o.vote_average
        }]);
        break;
      case 'rh':
        filteredMovieData = _.sortBy(this.state.movieData, [function(o) {
          return o.vote_average
        }]);
        break;
      case 'pl':
        filteredMovieData = _.sortBy(this.state.movieData, [function(o) {
          return -o.vote_count
        }]);
        break;
      case 'ph':
        filteredMovieData = _.sortBy(this.state.movieData, [function(o) {
          return o.vote_count
        }]);
        break;
      default:
        filteredMovieData = this.state.movieData
    }
    
    this.setState({
      sortSelectValue,
      filteredMovieData: filteredMovieData,
      filteredView: true
    })
  }

  logYearSelectChange(yearSelectValue) {
    let filteredMovieData;

    if (yearSelectValue !== null) {
      filteredMovieData = _.filter(this.state.movieData, function(o) {
        let releaseDate = new Date(o.release_date)
        return yearSelectValue.value === releaseDate.getFullYear()
      })

      this.setState({
        yearSelectValue,
        filteredMovieData: filteredMovieData,
        filteredView: true
      })
    } else {
      this.setState({
        filteredView: false        
      })
    }
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=f54c6cba706b27a69fb42891c0161325&language=en-US&page=1`)
      .then(response => response.json())
      .then(result => this.persistDataToLocalStorage(result));
  }

  render() {

    let MovieCards = [];

    const options = [
      { value: 'rl', label: 'Rating: Low' },
      { value: 'rh', label: 'Rating: High'},
      { value: 'pl', label: 'Popularity: Low'},
      { value: 'ph', label: 'Popularity: High'}
    ];

    const optionYears = [
      { value: 2014, label: '2014'},
      { value: 2015, label: '2015'},
      { value: 2016, label: '2016'},
      { value: 2017, label: '2017'}
    ];

    if (this.state.movieData && !this.state.filteredView) {
      this.state.movieData.map((movie) => MovieCards.push(<MovieCard key={movie.id} data={movie} />));
    } else if (this.state.filteredMovieData && this.state.filteredView){
      this.state.filteredMovieData.map((movie) => MovieCards.push(<MovieCard key={movie.id} data={movie} />));
    } else {
       MovieCards.push(null);
    }

    {window.store = store}


    return (
      <div className="DummyApp">
        <div className="Container">
          <div className="selectContainer" style={{marginBottom: 17}}>
            <div className="sortSelect">
              <Select
                options={options}
                onChange={this.logSortSelectChange}
                placeholder="Sort by"
                value={this.state.sortSelectValue}
              />
            </div>
            <div className="yearSelect">
              <Select
                options={optionYears}
                onChange={this.logYearSelectChange}
                placeholder="Year"
                value={this.state.yearSelectValue}
              />
            </div>
          </div>
          <div className="Movies__Container">
            {MovieCards}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
