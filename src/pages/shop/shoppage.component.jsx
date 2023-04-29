import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

import { fetchCouponsStart } from '../../redux/coupon/coupon.actions'

import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.component'
import CollectionPageContainer from "../collection/collection-page.container";

const ShopPage = ({ match}) => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchCollectionsStart());
	}, [fetchCollectionsStart]);
	return (
		<div>
			<Route
				exact
				path={`${match.path}`}
				component={CollectionOverviewContainer}
			/>
			<Route
				path={`${match.path}/:collectionId`}
				component={CollectionPageContainer}
			/>
		</div>
	);
};


export default ShopPage
