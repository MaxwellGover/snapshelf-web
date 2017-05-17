const GET_ID = 'GET_ID';
const GET_PRODUCT_IMAGES = 'GET_PRODUCT_IMAGES';
const GET_RETAILER_NAME = 'GET_RETAILER_NAME';

var _ = require('lodash');

import { db, fbAuth } from '~/config/firebase/firebaseConfig';

const initialState = {
  uid: '',
  name: '',
  productImages: [],
  inventory: []
}

export function getId (id) {
  return {
  	type: GET_ID,
  	id
  }  
}

function getProductImages (images) {
  return {
  	type: GET_PRODUCT_IMAGES,
  	images
  }
}

function getRetailerName (name) {
  return {
  	type: GET_RETAILER_NAME,
  	name
  } 
}

export function getRetailerData () {
  return (dispatch, getState) => {
  	const user = fbAuth.currentUser;
  	
  	const retailer = db.ref('users/' + user.uid);
  	const productImages = db.ref('users/' + user.uid + '/processedImages/');
  	
  	retailer.once('value', snapshot => {
  	  console.log(snapshot.val().name);
  	  dispatch(getRetailerName(snapshot.val().name))
  	});
  	
  	productImages.once('value', snapshot => {
  	  console.log(snapshot.val());
  	  dispatch(getProductImages(snapshot.val()))
  	});
  }
}

export default function retailer (state = initialState, action) {
  switch (action.type) {
  	case GET_ID : 
 	  return {
 	  	...state,
 	  	uid: action.id
 	  }
 	case GET_RETAILER_NAME : 
 	  return {
 	  	...state,
 	  	name: action.name
 	  }
 	case GET_PRODUCT_IMAGES : 
 	  return {
 	  	...state,
 	  	productImages: _.values(action.images)
 	  }
    default : 
      return state;
  }
}