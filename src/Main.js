import styled from "styled-components";
import NumberTable from "./core/NumberTable";
import Settings from "./core/Settings";

const MainWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/3303e996717283.5eb617a52c78a.jpg");
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;


  @media (max-width: 768px) {
    background-size: cover;
  }
`;

const Container = styled.div`
  width: 75%;
  background-color: rgba(255, 255, 255, 0.7);
  height: 90%;
  display: flex;

  @media (max-width: 768px) {
    flex-flow: column-reverse;
    width: 100%;
    height: 100%;
  }
`;

function Main() {
  return (
    <MainWrapper>
      <Container>
        <Settings />
        <NumberTable />
      </Container>
    </MainWrapper>
  );
}

export default Main;
