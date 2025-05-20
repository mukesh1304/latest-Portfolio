import { Container } from "./styles";
import reactIcon from "../../assets/react-icon.svg";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import whatsapp from "../../assets/whatsapp.svg";


export function Footer() {
  return (
    <Container className="footer">
      <a href="https://mukeshkaushik.in" className="logo">
        <span>www.mukesh</span>
        <span>kaushik.in</span>
      </a>
      <div>
        <p>
          This Website was made with <img src={reactIcon} alt="React" />
          {/* <span>❤️</span> */}
        </p>
      </div>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/mukesh-kaushik-964a1b191/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/mukesh1304"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=916263201271"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <img src={whatsapp} alt="watsapp" />
        </a>
      </div>
    </Container>
  );
}
