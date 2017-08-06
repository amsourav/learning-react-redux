import React from 'react';
import FontAwesome from 'react-fontawesome';
import LazyLoad from 'react-lazyload';

import './MovieCard.less';
import Overlay from '../Overlay';


class MovieCard extends React.Component {

	constructor(props) {
		super(props);
		this.getImageURL = this.getImageURL.bind(this);
		this.handleMovieHeart = this.handleMovieHeart.bind(this);
		
		this.state = {isToggleOn: false};
	}

	handleMovieHeart() {
		this.setState(prevState => ({
			isToggleOn: !prevState.isToggleOn
		}));
	}

	getImageURL(imagePath) {
		return `https://image.tmdb.org/t/p/w300${imagePath}`
	}

	render() {
		const releaseDateHash = {
			day: new Date(this.props.data.release_date).getDate(),
			month: new Date(this.props.data.release_date).getMonth(),
			year: new Date(this.props.data.release_date).getFullYear()
		};

		const monthShortCodeHash = {
			0: 'Jan',
			1: 'Feb',
			2: 'Mar',
			3: 'Apr',
			4: 'May',
			5: 'Jun',
			6: 'Jul',
			7: 'Aug',
			8: 'Sep',
			9: 'Oct',
			10: 'Nov',
			11: 'Dec' 
		};

		const releaseDateFormatted = `${releaseDateHash.day} ${monthShortCodeHash[releaseDateHash.month]} ${releaseDateHash.year}`

		const heartIcon = !this.state.isToggleOn?<FontAwesome name="heart-o" />:<FontAwesome style={{color: "red"}} name="heart" />;

		return (
			<div className="MovieCard">
				<div className="MovieCard__Poster">
					<LazyLoad height={345}>
						<img src={this.getImageURL(this.props.data.poster_path)} alt={this.props.data.title} />
					</LazyLoad>
				</div>
				<Overlay />
				<div className="MovieCard__InnerContainer">
					<div className="MovieCard__releaseDate p-absolute u-text p-topLeft">{releaseDateFormatted}</div>
					<div className="MovieCard__userInteractionContainer p-absolute p-topRight">
						<div className="Icon Icon__noPadding u-text u-cursor-pointer" onClick={this.handleMovieHeart}>
							{heartIcon}
						</div>
						<div className="Icon Icon__noPadding u-text u-cursor-pointer">
							<FontAwesome name="comment" />
						</div>
						<div className="Icon Icon__noPadding Icon__unsetWidth u-text u-cursor-pointer">
							<FontAwesome name="star-o" />
							<span className="favortites u-padding-6p-left">{this.props.data.vote_count}</span>
						</div>
					</div>
					<div className="MovieCard__movieDetails p-absolute p-bottomLeft">
						<div className="MovieCard__lanugage u-text u-padding-6p-bottom">{this.props.data.original_language.toUpperCase()}</div>
						<div className="MovieCard__name u-text u-padding-6p-bottom">{this.props.data.title.toUpperCase()}</div>
						<div className="MovieCard__share">
							<div className="Icon Icon__Circular u-text u-color-fb u-cursor-pointer">
								<FontAwesome name="facebook" />
							</div>
							<div className="Icon Icon__Circular u-text u-color-twitter u-cursor-pointer">
								<FontAwesome name="twitter" />
							</div>
							<div className="Icon Icon__Circular u-text u-color-whatsapp u-cursor-pointer">
								<FontAwesome name="whatsapp" />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default MovieCard;