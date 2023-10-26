import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import ServicesContent from "../../content/ServicesContent.json";
import AboutContent from "../../content/AboutContent.json";
import TeamContent from "../../content/TeamContent.json";
import ContactContent from "../../content/ContactContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="intro.jpeg"
        id="intro"
      />
      <ContentBlock
        type="right"
        title={AboutContent.title}
        content={AboutContent.text}
        icon="about.jpeg"
        id="about"
      />
      <ContentBlock
        type="left"
        title={TeamContent.title}
        content={TeamContent.text}
        icon="parteners.jpeg"
        id="team"
      />
      <ContentBlock
        type="left"
        title={ServicesContent.title}
        content={ServicesContent.text}
        section={ServicesContent.section}
        icon="services.jpeg"
        id="services"
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
