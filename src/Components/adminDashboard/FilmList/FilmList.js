import React from 'react';
import styled from 'styled-components';


const FilmList = () => {
    return (
        <div>
            <FilmListContainer className='Container'>
                <FilmEditContainer>

                </FilmEditContainer>
            </FilmListContainer>
            
        </div>
    )
}

export default FilmList

const FilmListContainer = styled.div`
    justify-content: space-between;
    align-items: left;
    flex-wrap: wrap;
    position: absolute;    

    display: flex;
    width: 978px;
    height: 970px;
    left: 414px;
    top: 130px;

    background: #C4C4C4;
    mix-blend-mode: soft-light;
    border-radius: 83px;
`;

const FilmEditContainer = styled.div`

`;