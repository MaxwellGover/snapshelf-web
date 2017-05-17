import React, { Component } from 'react';
import Item from './Item/Item';
import './Dashboard.css';

function ProductImages () {
	return (
		<div>
			Product Images
		</div>
	);
}

class ProductImagesContainer extends Component {
	render () {
		return (
			<ProductImages />
		);
	}
}

export default ProductImagesContainer;