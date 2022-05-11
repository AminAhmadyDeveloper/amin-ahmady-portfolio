import Header from "./../components/Header";
import styled from "styled-components";
import amin from "./../assets/images/amin.jpg";

export default function App(props) {
  return (
    <MainBody>
      <Header />
      <Content className="m-8 flex flex-col md:flex-row">
        <img
          src={amin}
          className="rounded-2xl w-full h-auto md:w-6/12 lg:w-4/12 hover:scale-105"
          draggable="false"
        />
        <p className="mt-6 text-center text-xl md:text-6xl lg:text-8xl md:ml-8 md:mt-0">A Full Stack Developer</p>
      </Content>
    </MainBody>
  );
}

const MainBody = styled.div`
  background: #d6d6d6;
  height: 100%;
  background-size: cover;
  background-attachment: fixed;
`;

const Content = styled.div``;
