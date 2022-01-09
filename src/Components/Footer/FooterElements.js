import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
    height: 30vh;
    background-color: ${props => props.theme.waffYellow};
`

export const FooterLinksWrapper = styled.section`
    min-height: 40%;
    background-color: ${props => props.theme.waffBlue};
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    padding: 10px;
`

export const FooterLinks = styled(Link)`
    text-decoration: none;
    color: white;
    font-family: 'Jost', sans-serif;
    font-weight: 500;
    font-size: 20px;

        &:hover {
            color: #FFABE7
        }
        &:active{
            color: #EAD04B;
        }

`