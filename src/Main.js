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
`;

const Container = styled.div`
  width: 75%;
  background-color: rgba(255, 255, 255, 0.7);
  height: 90%;
  display: flex;
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
