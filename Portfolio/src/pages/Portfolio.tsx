import { FunctionComponent, useCallback } from "react";
import "./Portfolio.css";

const Portfolio: FunctionComponent = () => {
  const onResumeText1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='resumeContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onProjectsText1Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='projectsContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onSkillsText1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='skillsContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="portfolio">
      <div className="footer">
        <div className="social-media">
          <div className="github">
            <div className="github-httpsgithubcomume">
              <p className="httpsgithubcomumer1abdull"> Github:</p>
              <p className="httpsgithubcomumer1abdull">
                https://github.com/Umer1Abdullah15
              </p>
            </div>
            <img className="github-icon" alt="" src="/github@2x.png" />
          </div>
          <div className="fiverr">
            <div className="fiverr-httpswwwfiverrcom">
              <p className="httpsgithubcomumer1abdull"> Fiverr:</p>
              <p className="httpsgithubcomumer1abdull">
                https://www.fiverr.com/umerabdullah15?up_rollout=true
              </p>
            </div>
            <img className="fiverr-icon" alt="" src="/fiverr@2x.png" />
          </div>
          <div className="linkedin">
            <div className="linkedin-httpswwwlinkedin">
              <p className="httpsgithubcomumer1abdull"> Linkedin:</p>
              <p className="httpsgithubcomumer1abdull">
                https://www.linkedin.com/in/umer-abdullah-30bb78250/
              </p>
            </div>
            <img className="linkedin-icon" alt="" src="/linkedin-icon@2x.png" />
          </div>
        </div>
        <div className="contacts">
          <div className="phone">
            <div className="phone-no-92-334-5763279">
              Phone No: +92-334-5763279
            </div>
            <img className="phone-icon" alt="" src="/phone-icon@2x.png" />
          </div>
          <div className="email">
            <div className="email-umer1abdullah15gmailc">
              Email: umer1abdullah15@gmail.com
            </div>
            <img className="email-icon" alt="" src="/email-icon@2x.png" />
          </div>
        </div>
        <div className="explore">
          <p className="httpsgithubcomumer1abdull">Explore:</p>
        </div>
        <div className="contact">Contact:</div>
      </div>
      <div className="resume" data-scroll-to="resumeContainer">
        <div className="resume1">Resume</div>
        <div className="download-wrapper">
          <div className="download">Download</div>
        </div>
      </div>
      <div className="projects" data-scroll-to="projectsContainer">
        <div className="autozhub-pics">
          <img className="autozhub3-icon" alt="" src="/autozhub3@2x.png" />
          <img className="autozhub2-icon" alt="" src="/autozhub2@2x.png" />
          <img className="autozhub1-icon" alt="" src="/autozhub1@2x.png" />
        </div>
        <div className="autozhubadd">
          <div className="autozhub-parent">
            <div className="autozhub">AutozHub:</div>
            <div className="fintrack-cut-1" />
            <div className="man-project-car-container">
              <ul className="man-project-car-enthusiast-app">
                <li className="man-project2">2-Man Project</li>
                <li className="man-project2">Car Enthusiast App</li>
              </ul>
            </div>
            <div className="made-using">{`Made using: `}</div>
            <div className="figma-react-native-container">
              <ul className="man-project-car-enthusiast-app">
                <li className="man-project2">Figma</li>
                <li className="man-project2">React Native</li>
                <li className="man-project2">Anima</li>
                <li className="man-project2">Canva</li>
              </ul>
            </div>
          </div>
          <img
            className="autozhub-1-removebg-preview-icon"
            alt=""
            src="/autozhub--1-removebgpreview-1-1@2x.png"
          />
          <img
            className="autozhub-1-removebg-preview-icon1"
            alt=""
            src="/autozhub--1-removebgpreview-1-2@2x.png"
          />
        </div>
        <div className="projects-child" />
        <div className="fintrack-pics">
          <img className="fintrack3-icon" alt="" src="/fintrack3@2x.png" />
          <img className="fintrack2-icon" alt="" src="/fintrack2@2x.png" />
          <img className="fintrack1-icon" alt="" src="/fintrack1@2x.png" />
        </div>
        <div className="fintrackadd">
          <div className="autozhub-parent">
            <div className="fintrack">{`Fintrack: `}</div>
            <img
              className="fintrack-cut-11"
              alt=""
              src="/fintrack-cut-1@2x.png"
            />
            <div className="man-project-car-container">
              <ul className="man-project-car-enthusiast-app">
                <li className="man-project2">4-Man Project</li>
                <li className="man-project2">Banking Mobile App</li>
              </ul>
            </div>
            <div className="made-using">{`Made using: `}</div>
            <div className="figma-react-native-container">
              <ul className="man-project-car-enthusiast-app">
                <li className="man-project2">Figma</li>
                <li className="man-project2">React Native</li>
                <li className="man-project2">NodeJS</li>
                <li className="man-project2">Android Studio</li>
                <li className="man-project2">Canva</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="projects1">Projects</div>
      </div>
      <div className="skills" data-scroll-to="skillsContainer">
        <div className="technoly-icons">
          <div className="html5-1-parent">
            <img className="html5-1-icon" alt="" src="/html5-1@2x.png" />
            <img className="css3-1-icon" alt="" src="/css3-1@2x.png" />
            <img
              className="react-native-logo-1-icon"
              alt=""
              src="/reactnativelogo-1@2x.png"
            />
            <img className="reactjs-1-icon" alt="" src="/reactjs-1@2x.png" />
          </div>
          <div className="wordpress-1-parent">
            <img
              className="wordpress-1-icon"
              alt=""
              src="/wordpress-1@2x.png"
            />
            <img className="c-1-icon" alt="" src="/c-1@2x.png" />
            <img
              className="matlab-logo-1-icon"
              alt=""
              src="/matlab-logo-1@2x.png"
            />
            <img className="python-1-icon" alt="" src="/python-1@2x.png" />
          </div>
          <div className="angular-1-parent">
            <img className="angular-1-icon" alt="" src="/angular-1@2x.png" />
            <img
              className="px-figma-logo-1-icon"
              alt=""
              src="/1667pxfigmalogo-1@2x.png"
            />
            <img className="nodejs-1-icon" alt="" src="/nodejs-1@2x.png" />
          </div>
        </div>
        <div className="skills-text">
          <div className="skills1">Skills</div>
            <div className="i-have-experience-container">
              <p className="httpsgithubcomumer1abdull">
                I have experience in developing amazing and fancy websites using
                many different frameworks.
              </p>
            </div>
            <div className="fancy-and-modern-container">
              <ul className="fancy-and-modern-ui-ui-catered">
                <li className="man-project">Fancy and modern UI</li>
                <li className="man-project">
                  UI catered to people with disablilities
                </li>
                <li className="man-project">Highly interactive and responsive UI</li>
              </ul>
            </div>
          </div>
      </div>
      <div className="about">
        <div className="info">
          <div className="assalamualaikum-this-is">
            Assalamualaikum, This is Umer Abdullah
          </div>
          <div className="im-a-passionate-container">
            <p className="im-a-passionate">
              I’m a passionate Front-end Developer with experience in:
            </p>
          </div>
          <b className="reactjs-react-native-container">
            <ul className="reactjs-react-native-angular-f">
              <li className="man-project1">ReactJS</li>
              <li className="man-project1">React Native</li>
              <li className="man-project1">Angular</li>
              <li className="man-project1">Figma</li>
              <li className="man-project1">Wordpress</li>
            </ul>
          </b>
        </div>
      </div>
      <div className="header">
        <div className="profile">
          <div className="umer-abdullah">
            <p className="httpsgithubcomumer1abdull">{`Umer `}</p>
            <p className="httpsgithubcomumer1abdull">Abdullah</p>
          </div>
          <img className="profile-pic-icon" alt="" src="/profile-pic@2x.png" />
        </div>
        <div className="links">
          <div className="resume2" onClick={onResumeText1Click}>
            Resume
          </div>
          <div className="projects2" onClick={onProjectsText1Click}>
            Projects
          </div>
          <div className="skills2" onClick={onSkillsText1Click}>
            Skills
          </div>
          <div className="home">Home</div>
        </div>
        <img className="icon" alt="" src="/1409294200-1@2x.png" />
      </div>
      <img className="me-icon" alt="" src="/me@2x.png" />
    </div>
  );
};

export default Portfolio;
