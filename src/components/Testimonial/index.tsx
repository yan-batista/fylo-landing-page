import { Container, Icon, Avatar } from "./styles";

import quotes from "../../assets/icon-quotes.svg";
import kyleAvatar from "../../assets/avatar-testimonial.jpg";

const Testimonial = () => {
  return (
    <Container>
      <Icon src={quotes} alt="quotes icon" />
      <p className="ff-openSans">
        Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a
        well-oiled collaboration machine.
      </p>
      <div className="person-container">
        <Avatar src={kyleAvatar} />
        <div className="person-name">
          <p className="ff-openSans name">Kyle Burton</p>
          <p className="ff-openSans">Founder & CEO, Huddle</p>
        </div>
      </div>
    </Container>
  );
};

export default Testimonial;
