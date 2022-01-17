import { Link } from "react-router-dom"
import styled from "styled-components"
import { theme } from "../SharedStyles/styledFonts"

export const BookingPage = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 100vw;
    max-width: 100%;
    padding: 40px;
    height: 100%;
    min-height: 70vh;
    background-color: #517ab9;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='Artboard-5' fill='%23ffffff' fill-opacity='0.08' fill-rule='nonzero'%3E%3Cpath d='M6 18h12V6H6v12zM4 4h16v16H4V4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    color: #1a3e7a;
    font-family: ${props => props.theme.jostFont};

`
export const BookingSpan = styled.span`
    color: ${props=> props.theme.waffYellow};
    
`
export const BookingContainer = styled.div`
    height: auto;
    min-width: 300px;
    max-width: 100%;
    width: auto;
    align-self: center;
    background-color: #fefdff;
    background-image: url("data:image/svg+xml,%3Csvg width='80' height='88' viewBox='0 0 80 88' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M22 21.91V26h-2c-9.94 0-18 8.06-18 18 0 9.943 8.058 18 18 18h2v4.09c8.012.722 14.785 5.738 18 12.73 3.212-6.99 9.983-12.008 18-12.73V62h2c9.94 0 18-8.06 18-18 0-9.943-8.058-18-18-18h-2v-4.09c-8.012-.722-14.785-5.738-18-12.73-3.212 6.99-9.983 12.008-18 12.73zM54 58v4.696c-5.574 1.316-10.455 4.428-14 8.69-3.545-4.262-8.426-7.374-14-8.69V58h-5.993C12.27 58 6 51.734 6 44c0-7.732 6.275-14 14.007-14H26v-4.696c5.574-1.316 10.455-4.428 14-8.69 3.545 4.262 8.426 7.374 14 8.69V30h5.993C67.73 30 74 36.266 74 44c0 7.732-6.275 14-14.007 14H54zM42 88c0-9.94 8.06-18 18-18h2v-4.09c8.016-.722 14.787-5.738 18-12.73v7.434c-3.545 4.262-8.426 7.374-14 8.69V74h-5.993C52.275 74 46 80.268 46 88h-4zm-4 0c0-9.943-8.058-18-18-18h-2v-4.09c-8.012-.722-14.785-5.738-18-12.73v7.434c3.545 4.262 8.426 7.374 14 8.69V74h5.993C27.73 74 34 80.266 34 88h4zm4-88c0 9.943 8.058 18 18 18h2v4.09c8.012.722 14.785 5.738 18 12.73v-7.434c-3.545-4.262-8.426-7.374-14-8.69V14h-5.993C52.27 14 46 7.734 46 0h-4zM0 34.82c3.213-6.992 9.984-12.008 18-12.73V18h2c9.94 0 18-8.06 18-18h-4c0 7.732-6.275 14-14.007 14H14v4.696c-5.574 1.316-10.455 4.428-14 8.69v7.433z' fill='%235f6ba4' fill-opacity='0.04' fill-rule='evenodd'/%3E%3C/svg%3E");
    border-radius: 20px;
    padding: 20px;
    @media only screen and (min-width: 600px) {
        min-width: 600px;
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    gap: 20px;
    padding: 20px;
    justify-context: space-around;
`

export const ButtonDirections = styled.button`
    background-color: ${props => props.theme.waffYellow};
    height: 30px;
    width: auto;
    min-width: 70px;
    border-radius: 15px;
    &:active {
        transform: scale(0.9);
    }
`
export const BookingSummaryBody = styled.div`
    display: flex;
    justify-content: space-between;
`

export const PlusMinusContainer = styled.div`
display: flex;
    justify-content: space-between;
`
export const PlusMinus = styled.button`
    font-size: 24px;
    color: ${props => props.theme.waffYellow};
    &:active {
        transform: scale(0.9);
    }
`

export const CheckoutButtonDiv = styled.div`
    display: flex;
    flex-flow; column;
    justify-content: center;
`
export const CheckoutButton = styled(Link)`
    background-color: ${props => props.theme.waffYellow};
    text-align: center;
    height: 30px;
    color: ${props => props.theme.waffBlue};
    font-weight: bold;
    width: 180px;
    border-radius: 15px;
    text-decoration: none;
    &:hover {
        background-color: #d7b500;
    }
    &:active {
        transform: scale(0.98);
    }
`

export const BookingH1 = styled.h1`
    color: ${props => props.theme.waffYellow};

`