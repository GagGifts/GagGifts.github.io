import React from 'react';
import { useDispatch  } from "react-redux"

import { toggleNavigation } from "../../redux/navigation-button/navigation-button.actions"

import { withRouter } from 'react-router-dom';
import {SideBarWrapper, SideBarContainer, SideBarLink, SideBarList} from './navigation-sidebar.style';

const NavigationSideBar = ({ history }) => {
	const dispatch = useDispatch();
	return (
		<SideBarWrapper>
		<SideBarContainer>
			<SideBarList>
				<SideBarLink onClick={() => {
			// if the event click is trigger on menu item, the website will go to the mug page
			// set toggleMyHome to false
					history.push('/shop/mugs');
					dispatch(toggleNavigation());
				}}>
						MUGS	
				</SideBarLink>
			</SideBarList>
			<SideBarList>
				<SideBarLink onClick={() => {
			// if the event click is trigger on menu item, the website will go to the food page 
					history.push('/shop/food');
					dispatch(toggleNavigation());
				}}>
						FOOD	
				</SideBarLink>
			</SideBarList>
			<SideBarList>
				<SideBarLink onClick={() => {
			// if the event click is trigger on menu item, the website will go to the birthdays page 
					history.push('/shop/birthdays');
					dispatch(toggleNavigation());
				}}>
						BIRTHDAYS	
				</SideBarLink>
			</SideBarList>
			<SideBarList>
				<SideBarLink onClick={() => {
			// if the event click is trigger on menu item, the website will go to the electronics page 
					history.push('/shop/electronics');
					dispatch(toggleNavigation());
				}}>
						ELECTRONICS	
				</SideBarLink>
			</SideBarList>
		</SideBarContainer>
	</SideBarWrapper> 
	)
};

export default withRouter(NavigationSideBar);
