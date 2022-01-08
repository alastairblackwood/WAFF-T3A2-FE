import styled from "styled-components";

export const ScheduleContainer = styled.div`
    height: 100%;
    min-height: 400px;
    background: ${props => props.theme.waffBlue};
    padding: 50px;
    background-color: #517ab9;
    background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0V0zm10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm20 0a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM10 37a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm10-17h20v20H20V20zm10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14z' fill='%23ced6e7' fill-opacity='0.12' fill-rule='evenodd'/%3E%3C/svg%3E");
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
    border: none;
    border-radius: 20px;
    padding: 20px;
    display: grid;
    /* flex-flow: column wrap; */
`