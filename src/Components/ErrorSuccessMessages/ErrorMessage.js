import React from 'react'
import styled from 'styled-components'
import {AiOutlineAlert} from "react-icons/ai"

const ErrorMessage = ({children}) => {
 


    return (
        <ErrorContainer className='alert alert-danger d-flex align-items-center' role="alert">
                <AlertIcon>
                    <AiOutlineAlert className='bi flex-shrink-0 me-2'/>
                </AlertIcon>
            <ErrorChildren>{children}</ErrorChildren>
 
        </ErrorContainer>
    )
}

export default ErrorMessage

export const AlertIcon  = styled.i`
    height: 45px;
`
export const ErrorContainer = styled.div`
    /* height: 40px; */
    /* display: block; */
    
`

export const ErrorChildren = styled.p`
    /* color: #A00808; */
`