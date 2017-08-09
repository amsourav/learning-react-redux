import React from 'react';
import FontAwesome from 'react-fontawesome';
import {likeMovie, dislikeMovie} from '../../actions/movieActions';
import './MovieCard.less';
import Overlay from '../Overlay';
import {releaseDateFormatted} from '../../utils/dateHelper';
import {connect} from 'react-redux';


class MovieCard extends React.Component {

	constructor(props) {
		super(props);
		this.getImageURL = this.getImageURL.bind(this);
		this.markFavorite = this.markFavorite.bind(this);
		this.state = {
			movieLiked: []
		}
	}

	markFavorite() {
		this.props.thumbsUp(this.props.data.id)
		this.setState(prevState => {
			movieLiked : [...prevState.movieLiked, this.props.data.id]
		})
	}

	getImageURL(imagePath) {
		return `https://image.tmdb.org/t/p/w300${imagePath}`
	}

	render() {
		const heartIcon = this.props.data.favorite?<FontAwesome style={{color: "red"}} name="heart" />:<FontAwesome name="heart-o" />;
		return (
			<div key={this.props.data.id} className="MovieCard">
				<div className="MovieCard__Poster">
					<img src={this.getImageURL(this.props.data.poster_path)} alt={this.props.data.title} />
				</div>
				<Overlay />
				<div className="MovieCard__InnerContainer">
					<div className="MovieCard__releaseDate p-absolute u-text p-topLeft">{releaseDateFormatted(this.props.data.release_date)}</div>
					<div className="MovieCard__userInteractionContainer p-absolute p-topRight">
						<div className="Icon Icon__noPadding u-text" onClick={this.markFavorite}>
							{heartIcon}
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

function mapStateToProps(ownProps, state) {
	console.log(state)
	console.log(ownProps)
}

function mapDispatchToProps(dispatch) {
	return {
		thumbsUp(id) {
			dispatch({type: 'LIKE_MOVIE', id})
		},
		thumbsDown() {
			dispatch(dislikeMovie(1))
		}
	}
}

export default connect(null, mapDispatchToProps)(MovieCard);