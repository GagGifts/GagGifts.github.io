import styled from 'styled-components'
import mainStyle from '../../styles/main'

const { device: {mobile} } = mainStyle

export const SignUpAndSignInContainer = styled.div`
    width: 850px;
    display: flex;
    justify-content: space-between;
    margin: 30px auto;
	
	@media ${mobile} {
		display: flex;
		width: 90vw;
		flex-direction: column;
		justify-content: space-between;
		gap: 30px;
	}
`
