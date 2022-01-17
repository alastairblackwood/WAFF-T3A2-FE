import styled from "styled-components";

export const DashboardContainer = styled.div`
display: flex;
flex-flow: column;
    height: auto;
    min-height: 400px;
    background: ${(props) => props.theme.waffBlue};
    padding: 200px;
    background-color: #517ab9;
    background-image: url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%23c7bdd9' fill-opacity='0.11' fill-rule='evenodd'/%3E%3C/svg%3E");
    };
    position:relative;
    `;

export const DashboardH1 = styled.h1`
  color: ${(props) => props.theme.waffYellow};
  font-family: ${(props) => props.theme.bitterFont};
  font-weight: bold;
`;

export const FilmContainer = styled.div`
  display: flex;
  flex-flow: column;
  height: auto;
  min-height: 400px;

  position: relative;
  z-index: 1000;
`;

export const UsersContainer = styled.div`
  display: flex;
  flex-flow: column;
  height: auto;
  min-height: 400px;

  position: relative;
  z-index: 1000;
`;

export const Section = styled.section`
  padding: 0;
  margin: 0;
  box-sizing: border-box;

  padding: 15rem 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container1 = styled.div`
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

export const SectionHeading = styled.h2`
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

export const AllItems = styled.div`
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
export const Items = styled.div`
  padding: 0;
  margin: 0;
  box-sizing: border-box;

  padding: 1.5rem;
  transition: 0.3s ease-in-out background-color;
  border-radius: 40px;
  border: 1px solid #000000;
  flex: 1;

  &:hover {
    background-color: rgb(234 208 75 / 60%);
  }

  @media only screen and (max-width: 768px) {
    margin: 2rem 0;
  }
`;

export const Icon = styled.div`
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

export const ItemHeading = styled.h3`
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

export const ItemDesc = styled.p`
  padding: 0;
  margin: 0;
  box-sizing: border-box;

  color: var(--secondary-gray);
  font-size: 0.8rem;
  color: var(--secondary-black);
`;

export const Button = styled.button`
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

export const ItemBox = styled.div``;
export const P = styled.p``;
