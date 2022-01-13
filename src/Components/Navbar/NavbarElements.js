import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer = styled.nav`
    display: flex;
    min-height: 60px;
    height: auto;
    background-color: ${props => props.theme.waffBlue};
    /* position: fixed; */
    padding: 10px;
    justify-content: space-around;

`

export const NavCollapse = styled.div`
    z-index: 30;
    display: flex;
    flex-flow: row wrap;
    font-weight: bold;
    font-family: ${props => props.theme.bitterFont};
    gap: 20px;
    
    @media only screen and (max-width: 420px) {
    font-size: 14px;
}
`
export const NavA = styled(Link)`
    font-family: ${props => props.theme.jostFont};
    font-weight: 500;
    font-size: 24px;
    color: #FFD80B;
    text-decoration: none;

    &:hover {
        color: #FFABE7;
    }

    @media only screen and (max-width: 420px) {
    font-size: 18px;
}

`
export const NavButton = styled.button`
    color: ${props => props.theme.waffYellow};
    text-decoration: underline;
    font-weight: bold;
    &:hover {
        color: #FFABE7;
    }
`
export const NavLi = styled(Link)`
    color: ${props => props.theme.waffYellow};
    text-decoration: underline;
    &:hover {
        color: #FFABE7;
    }
    :active{
        color: white;
        text-decoration: none;
    }
`
