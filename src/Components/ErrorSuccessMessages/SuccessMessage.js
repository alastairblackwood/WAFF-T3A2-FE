import React from 'react'
import styled from 'styled-components'
import {AiOutlineAlert} from "react-icons/ai"

const SuccessMessage = () => {
    return (
        <SuccessContainer className='alert alert-danger d-flex align-items-center' role="alert">
                <AlertIcon>
                    <AiOutlineAlert className='bi flex-shrink-0 me-2'/>
                </AlertIcon>
            <SuccessChildren>Great success</SuccessChildren>
         </SuccessContainer>
    )
}

export default SuccessMessage

export const AlertIcon  = styled.i`
    height: 45px;
`
export const SuccessContainer = styled.div`
    /* height: 40px; */
    /* display: block; */
    
`

export const SuccessChildren = styled.p`
    /* color: #A00808; */
`