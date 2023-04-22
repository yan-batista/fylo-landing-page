import illust1 from "../assets/illustration-1.svg";
import illust2 from "../assets/illustration-2.svg";
import bgCurveMobile from "../assets/bg-curve-desktop.svg";
import iconArrow from "../assets/icon-arrow.svg";
import LogoImg from "../assets/logo.svg";
import PhoneIcon from "../assets/icon-phone.svg";
import EmailIcon from "../assets/icon-email.svg";
import FacebookIcon from "../assets/icon-facebook.svg";
import TwitterIcon from "../assets/icon-twitter.svg";
import InstagramIcon from "../assets/icon-instagram.svg";

import Testimonial from "../components/Testimonial";

import {
  Illustration,
  Center,
  Container,
  BackgroundCurve,
  SecondContainer,
  LinkIconContainer,
  Icon,
  AccessContainer,
  Footer,
  Logo,
} from "./styles";

const Home = () => {
  return (
    <Center className="center">
      <Container mt={"73px"} className="firstContainer">
        <Illustration src={illust1} smWidth={"310px"} lgWidth={"45%"} />
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
        <Illustration src={illust2} smWidth={"310px"} lgWidth={"35%"} />

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
          <Testimonial />
        </div>
      </SecondContainer>

      <AccessContainer>
        <div className="container-text">
          <div className="text-container">
            <h1>Get early access today</h1>
            <p>
              It only takes a minute to sign up and our free starter tier is extremely generous. If you have any
              questions, our support team would be happy to help you.
            </p>
          </div>
          <div className="container-email">
            <input type="text" placeholder="email@example.com"></input>
            <button>Get Started For Free</button>
          </div>
        </div>
      </AccessContainer>

      <Footer>
        <div className="contact-info">
          <Logo src={LogoImg}></Logo>
          <div className="icon-container">
            <Icon src={PhoneIcon}></Icon>
            <p>Phone: +1-543-123-4567</p>
          </div>
          <div className="icon-container">
            <Icon src={EmailIcon}></Icon>
            <p>example@fylo.com</p>
          </div>
        </div>

        <div className="about-us">
          <a href="#" className="footer-link">
            About Us
          </a>
          <a href="#" className="footer-link">
            Jobs
          </a>
          <a href="#" className="footer-link">
            Press
          </a>
          <a href="#" className="footer-link">
            Blog
          </a>
        </div>

        <div className="extra-info">
          <a href="#" className="footer-link">
            Contact Us
          </a>
          <a href="#" className="footer-link">
            Terms
          </a>
          <a href="#" className="footer-link">
            Privacy
          </a>
        </div>

        <div className="links">
          <a href="">
            <Icon src={FacebookIcon} />
          </a>
          <a href="">
            <Icon src={TwitterIcon} />
          </a>
          <a href="">
            <Icon src={InstagramIcon} />
          </a>
        </div>
      </Footer>
    </Center>
  );
};

export default Home;
