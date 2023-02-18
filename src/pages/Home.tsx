import illust1 from "../assets/illustration-1.svg";

import { Illustration, Center, Container } from "./styles";

const Home = () => {
  return (
    <Center className="center">
      <Container>
        <Illustration src={illust1} />
        <div className="container-text">
          <h1 className="ff-openSans">All your files in one secure location, accessible anywhere.</h1>
          <p className="ff-openSans">
            Fylo stores your most important files in one secure location. Access them wherever you need, share and
            collaborate with friends, family and co-workers.
          </p>
          <div className="container-email">
            <input type="text" placeholder="Enter your email"></input>
            <button>Get Started</button>
          </div>
        </div>
      </Container>
    </Center>
  );
};

export default Home;
