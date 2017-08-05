import React from 'react';
import FontAwesome from 'react-fontawesome';
import LazyLoad from 'react-lazyload';

import './MovieCard.less';
import Overlay from '../Overlay';


class MovieCard extends React.Component {

	constructor(props) {
		super(props);
		this.getImageURL = this.getImageURL.bind(this);

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

		return (
			<div key={this.props.data.id} className="MovieCard">
				<div className="MovieCard__Poster">
					<LazyLoad height={345}>
						<img src={this.getImageURL(this.props.data.poster_path)} alt={this.props.data.title} />
					</LazyLoad>
				</div>
				<Overlay />
				<div className="MovieCard__InnerContainer">
					<div className="MovieCard__releaseDate p-absolute u-text p-topLeft">{releaseDateFormatted}</div>
					<div className="MovieCard__userInteractionContainer p-absolute p-topRight">
						<div className="Icon Icon__noPadding u-text">
							<FontAwesome name="heart-o" />
						</div>
						<div className="Icon Icon__noPadding u-text">
							<FontAwesome name="comment" />
						</div>
						<div className="Icon Icon__noPadding u-text">
							<FontAwesome name="star-o" />
						</div>
					</div>
					<div className="MovieCard__movieDetails p-absolute p-bottomLeft">
						<div className="MovieCard__lanugage u-text"></div>
						<div className="MovieCard__name u-text">{this.props.data.title}</div>
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