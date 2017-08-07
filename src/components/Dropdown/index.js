import React, { Component } from 'react';
import './Dropdown.less';

class Dropdown extends Component {
	constructor(props) {
		super(props);
		
	}

	render() {
		const options = this.props.options;
		return (
			<div className="Dropdown">
				<div className="Dropdown__label">
				</div>
				<div className="Dropdown__wrapper">
				</div>
			</div>
		)
	}
}

export default Dropdown;