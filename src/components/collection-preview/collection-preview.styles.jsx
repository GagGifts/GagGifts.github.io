import styled from 'styled-components'

export const CollectionPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`

export const TitleContainer = styled.span`
    font-size: 28px;
    margin-bottom: 25px;
    cursor: pointer;
    font-weight: bold;

    &:hover {
        color: grey;
    }
`

export const PreviewContainer = styled.div`
    display: flex;
    justify-content: space-between;
`