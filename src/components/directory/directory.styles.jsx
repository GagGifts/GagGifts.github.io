import styled from 'styled-components'
import mainStyle from '../../styles/main'

const { device: {mobile}  } = mainStyle

export const DirectoryContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

	@media ${mobile} {
		width: 90vw
	}
`
