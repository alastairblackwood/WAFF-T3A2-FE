import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
    height: auto;
    background-color: ${props => props.theme.waffYellow};
    width: 100%;
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
export const FooterTextWrapper = styled.div`
    display: flex;
    justify-content: center;
`
export const FooterH2Wrapper = styled.div`
    padding: 10px;
    
    
`
export const FooterA = styled(Link)`
    font-family: 'Jost', sans-serif;
    font-weight: bold;
    color: ${props => props.theme.waffBlue};
    text-align: left;
    font-size: 26px;
    text-decoration: none;
    cursor: pointer;
    &:hover {
        color: #FFABE7;
    }
`

export const FooterIconWrapper = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
`

export const FooterYellow = styled.div`
    padding: 20px;

`
export const FooterSpan = styled.span`
    font-family: 'Jost', sans-serif;
    font-weight: bold;
    font-size: 20px;
    color: ${props => props.theme.waffBlue};

`

export const FooterIcons = styled.div`
    display: flex;
    gap: 20px;
`

export const FooterIconLink = styled(Link)`
    color: ${props => props.theme.waffBlue};
    font-size: 20px;

    &:hover {
        color: #FFABE7;
    }
`