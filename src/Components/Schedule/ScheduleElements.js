import styled from "styled-components";

export const ScheduleContainer = styled.div`
    max-height: auto;
    height: 100%;
    min-height: 400px;
    background: ${props => props.theme.waffBlue};
    padding: 50px;
    background-color: #8a8a75;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%2326411b' fill-opacity='0.11'%3E%3Cpath fill-rule='evenodd' d='M11 0l5 20H6l5-20zm42 31a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM0 72h40v4H0v-4zm0-8h31v4H0v-4zm20-16h20v4H20v-4zM0 56h40v4H0v-4zm63-25a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM53 41a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-30 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-28-8a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zM56 5a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zm-3 46a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM21 0l5 20H16l5-20zm43 64v-4h-4v4h-4v4h4v4h4v-4h4v-4h-4zM36 13h4v4h-4v-4zm4 4h4v4h-4v-4zm-4 4h4v4h-4v-4zm8-8h4v4h-4v-4z'/%3E%3C/g%3E%3C/svg%3E");

@media only screen and (min-width: 1400px) {
    height: 100vh;
}
@media only screen and (min-height: 750px) {
    height: 80vh;
}
`

export const ScheduleHeader = styled.h1`
    color: ${props => props.theme.waffYellow};
    font-family: ${props => props.theme.bitterFont};
    font-weight: bold;
`

export const ScheduleHeader2 = styled.h2`
    color: white;
    font-family: ${props => props.theme.bitterFont};
`

export const ScheduleHeader3 = styled.h2`
    color: ${props => props.theme.waffYellow};
    font-family: ${props => props.theme.bitterFont};
`

export const ScheduleTable = styled.div`
    background-color: white;
    font-family: ${props => props.theme.bitterFont};
    border: none;
    height: 100%;
    border-radius: 20px;
    padding: 20px;
    display: grid;
    filter: drop-shadow(0px 3px 0px rgba(0, 0, 0, 0.25));
    
    @media only screen and (max-width: 380px){
        font-size: 14px;
    }
    @media only screen and (min-width: 1400px) {
    height: 80%;
    }
    /* flex-flow: column wrap; */
`

export const ScheduleSpan = styled.span`
        font-family: ${props => props.theme.bitterFont};
        font-weight: bold;
        padding: 2%;

    @media only screen and (min-width: 1400px) {
    font-size: 24px;
    }
`

export const ScheduleP = styled.p`
    @media only screen and (min-width: 1400px) {
    font-size: 24px;
    }
`