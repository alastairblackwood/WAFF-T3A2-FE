import React, {useState} from 'react'
import styled from 'styled-components'

const SideProfile = () => {

    const [name,setName] = useState('Your Name');
    const [lastname,setLastname] = useState('Your Lastname');
    const [email,setEmail] = useState('Your Email');
    const [username,setUsername] = useState('Your Username');
    const [password,setPassword] = useState('Your Password');

    return (
        <div>
            <SidebarContainer className='Card'>
                <SidebarUpperContent className="upper-container">
                    <ProfilePicture className="image-container">
                        <Picture src='' alt='' height='100px' width='100px' border-radius='50%' />
                    </ProfilePicture>
                </SidebarUpperContent>
                <SidebarLowerContent className='lower-container'>
                    <SidebarInfo> {name} </SidebarInfo>
                    <SidebarInfo> {lastname} </SidebarInfo>
                    <SidebarInfo> {email} </SidebarInfo>
                    <SidebarInfo> {username} </SidebarInfo>
                    <SidebarInfo> {password} </SidebarInfo>
                    <SidebarButton>Visit Profile</SidebarButton>
                    <br/><br/>
                    <SidebarButton>Add New Admin </SidebarButton>
                </SidebarLowerContent>
            </SidebarContainer>
            
        </div>
    )
}

export default SideProfile


const SidebarContainer = styled.div`

    justify-content: space-between;
    align-items: left;
    flex-wrap: wrap;
    position: absolute;

    color: #000000;
    border-radius: 83px;
    margin-top: 150px;
    width: 300px;
    height:480px;
    background: #CDC9C3;
    overflow: hidden;
`;

const SidebarUpperContent = styled.div`
    height: 100px;
  


`;

const ProfilePicture = styled.div`

`;

const Picture = styled.img`
    background: white;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    padding: 5px;
    transform: translate(95px,45px);
    border: 2px solid black
`;

const SidebarLowerContent = styled.div`
    margin-top: 80px;
    height: 300px;
    text-align: center;
    font-family: Raleway;
    font-size: 0.8rem;
`;

const SidebarInfo = styled.h3`

`;

const SidebarButton = styled.button`
    font-size: 0.8rem;
    background: #f774c5;
    border: none;
    padding: 0.5rem 1.1rem;
    color: #fff;
    border-radius: 1rem;
    box-shadow: 0px 13px 24px -7px #ecb6d7;
    transition: all 0.3s ease-in-out;
    margin-left: 0.5rem;
    cursor: pointer;
    &:hover {
        box-shadow: 0px 17px 16px -11px #ecb6d7;
        transform: translateY(-5px);
    }
    @media (max-width: 670px) {
        /* width: 100%; */
        padding: 0.3; 
    }

`;