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
    /* display: flex;
    flex-flow: column; */
    padding: 10px;
    /* justify-content: center; */
    text-align: center;
    
`
export const FooterH2 = styled.h2`
    font-family: 'Jost', sans-serif;
    font-weight: bold;
    
`

export const FooterIconWrapper = styled.div`
    /* flex-flow: column wrap; */
`

export const FooterIconColumn = styled.div`
    /* background-color: red; */
    display: flex;
    flex-flow: row wrap;
    justify-content: center;

`