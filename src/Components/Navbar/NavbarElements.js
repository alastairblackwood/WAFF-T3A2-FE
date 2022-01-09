import styled from "styled-components";

export const NavbarContainer = styled.div`
    /* display: flex; */
    height: 60px;
    background-color: ${props => props.theme.waffBlue};
    /* position: fixed; */
`
export const NavA = styled.a`
    font-family: ${props => props.theme.jostFont};
    font-weight: 500;
    font-size: 24px;
    color: #FFD80B;
    text-decoration: none;

    &:hover {
        color: #FFABE7;
    }

`

export const NavLi = styled.li`
    background-color: red;
`