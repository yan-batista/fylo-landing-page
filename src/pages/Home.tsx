import illust1 from "../assets/illustration-1.svg";
import illust2 from "../assets/illustration-2.svg";
import bgCurveMobile from "../assets/bg-curve-desktop.svg";
import iconArrow from "../assets/icon-arrow.svg";

import Testimonial from "../components/Testimonial";

import { Illustration, Center, Container, BackgroundCurve, SecondContainer, LinkIconContainer, Icon } from "./styles";

const Home = () => {
  return (
    <Center className="center">
      <Container mt={"73px"}>
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

      <BackgroundCurve src={bgCurveMobile} />
      <SecondContainer>
        <Illustration src={illust2} />
        <div className="container-text">
          <h1 className="ff-openSans">Stay productive, wherever you are</h1>
          <p className="ff-openSans">
            Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage
            needs.
          </p>
          <p className="ff-openSans">
            Securely share files and folders with friends, family and colleagues for live collaboration. No email
            attachments required!
          </p>
          <LinkIconContainer>
            <a className="ff-openSans">See how Fylo works</a>
            <Icon src={iconArrow} alt="arrow icon pointing to the right" />
          </LinkIconContainer>
        </div>

        <Testimonial />
      </SecondContainer>
    </Center>
  );
};

export default Home;
