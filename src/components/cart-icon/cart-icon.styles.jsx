import styled from 'styled-components'
import { ReactComponent as ShoppingIconSVG } from './shopping-bag.svg'
export const CartIconContainer = styled.div`
    width: 45px;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

export const ShopIconContainer = styled(ShoppingIconSVG)`
    width: 24px;
    height: 24px;
`

export const ItemCountContainer = styled.div`
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: 12px;
`