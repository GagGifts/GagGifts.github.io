import React from 'react';

import Directory from '../../components/directory/directory.component'
import { HomePageContainer, BackgroundContainer} from './homepage.styles'

const HomePage = () => {
	return (
		<HomePageContainer>
			<BackgroundContainer/>	
			<Directory/>
		</HomePageContainer>
	)
}

export default HomePage;
