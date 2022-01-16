import react from "react";
import { Container, Item } from "semantic-ui-react";
import styled from "styled-components";
import { MdLocalMovies } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <Section id="services">
      <Container1 class="container">
        <SectionHeading class="section-heading" data-outline="Services">
          Admin Dashboard
        </SectionHeading>
        <AllItems class="all-items">
          <Items class="item">
            <Icon class="icon">
              <MdLocalMovies size={25} />
            </Icon>
            <ItemHeading class="item-heading">
              View all listed films as well as add, edit, and delete <br />
              <br />
            </ItemHeading>
            <Button>View all films</Button>
          </Items>

          <Items class="item">
            <Icon class="icon">
              <FiUsers size={25} />
            </Icon>
            <ItemHeading class="item-heading">
              View all users that are already logged into the Wes Anderson Film
              Festival Website.
            </ItemHeading>
            <Button>View all users</Button>
          </Items>
        </AllItems>
      </Container1>
    </Section>
  );
};

export default Dashboard;

const Section = styled.section`
  padding: 0;
  margin: 0;
  box-sizing: border-box;

  padding: 15rem 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container1 = styled.div`
  padding: 30px;
  margin: 0;
  box-sizing: border-box;
  background-color: #35589a;
  mix-blend-mode: soft-light;
  box-shadow: 9px 9px 4px rgba(0, 0, 0, 0.25);
  border-radius: 83px;

  width: 90%;
  margin: 0 auto;
  max-width: 1000px;
`;

const SectionHeading = styled.h2`
  padding: 0;
  margin: 0;
  box-sizing: border-box;

  font-size: clamp(1rem, 5vw, 4rem);
  text-transform: uppercase;
  font-family: "Montserrat";
  letter-spacing: 0.2rem;
  text-align: center;
  position: relative;
  margin-bottom: 5rem;
`;

const AllItems = styled.div`
  padding: 0;
  margin: 0;
  box-sizing: border-box;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;
const Items = styled.div`
  padding: 0;
  margin: 0;
  box-sizing: border-box;

  padding: 1.5rem;
  transition: 0.3s ease-in-out background-color;
  border-radius: 30px;
  border: 1px solid #000000;
  flex: 1;

  &:hover {
    background-color: rgb(234 208 75 / 60%);
  }

  @media only screen and (max-width: 768px) {
    margin: 2rem 0;
  }
`;

const Icon = styled.div`
  padding: 0;
  margin: 0;
  box-sizing: border-box;

  width: 50px;
  height: 50px;
  padding: 0.8rem;
  background-color: #ead04b;
  border-radius: 50%;
  margin-bottom: 1rem;

  @media only screen and (max-width: 768px) {
    margin: 0 auto;
    margin-bottom: 1rem;
  }
`;

const ItemHeading = styled.h3`
  padding: 0;
  margin: 0;
  box-sizing: border-box;

  margin-bottom: 1rem;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;

  color: #000000;
`;

const ItemDesc = styled.p`
  padding: 0;
  margin: 0;
  box-sizing: border-box;

  color: var(--secondary-gray);
  font-size: 0.8rem;
  color: var(--secondary-black);
`;

const Button = styled.button`
  font-size: 0.8rem;
  background: #ead04b;
  border: none;
  padding: 1.1rem 0.8rem;
  color: #fff;
  border-radius: 1rem;
  box-shadow: 0px 13px 24px -7px #ead04b;
  transition: all 0.3s ease-in-out;
  margin-left: 17rem;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 17px 16px -11px #ead04b;
    transform: translateY(-5px);
  }
  @media (max-width: 670px) {
    /* width: 100%; */
    padding: 0.3;
  }
`;

const ItemBox = styled.div``;
