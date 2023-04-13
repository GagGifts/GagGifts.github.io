import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {toggleNavigation} from "../../redux/navigation-button/navigation-button.actions"
import {selectIsToggle} from "../../redux/navigation-button/navigation-button.selectors"

import {
	NavigationContainer,
	NavigationLogo,
	NavigationControl,
} from './navigation-button.styles';

const NavigationButton = () => {
	const dispatch = useDispatch();
	const isToggle = useSelector(selectIsToggle);
	return (
		<div>
			<NavigationContainer onClick={() => dispatch(toggleNavigation())} />
			<NavigationControl isToggle={isToggle}>
				<NavigationLogo isToggle={isToggle}/>
			</NavigationControl>
		</div>
	);
};

export default NavigationButton;
