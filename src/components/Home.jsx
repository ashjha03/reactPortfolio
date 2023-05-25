import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillFacebook,
} from "react-icons/ai";
import {
  SiCodechef,
  SiCodeforces,
  SiLeetcode,
  SiGeeksforgeeks,
} from "react-icons/si";
import { TypeAnimation } from "react-type-animation";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";



const Home = ({ theme }) => {

  return (
    <div
      data-theme={theme}
      className="lg:px-10 py-10 p-5 lg:flex lg:justify-around border-b"
    >
      <AnimationOnScroll animatePreScroll={true} initiallyVisible={true} animateIn="animate__flip" className="homeImg w-[30%] hidden lg:block">
        <img
          src={require("../assets/Prof2.png")}
          className="lg:w-[50%] lg:mx-auto"
          alt="profile"
        />
      </AnimationOnScroll>
      <AnimationOnScroll animatePreScroll={true} initiallyVisible={true} animateIn="animate__fadeInRightBig"  className="homeContent lg:w-[60%] lg:p-10">
        <h1 className="text-4xl lg:text-5xl pb-5 pl-5 pt-5 lg:pt-0">Hello !</h1>
        <h1 className="text-6xl lg:text-8xl pb-5">Ashish Jha</h1>
        <TypeAnimation
          sequence={[
            "Web Developer",
            1000,
            "Web Designer",
            1000,
            "Competitive Programmer",
            1000
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: "2em", display: "inline-block" }}
        />
        <div className="socialLinks flex pt-4">
          <a
            href="https://linkedin.com/in/ashjha03"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-150 transition-all link text-4xl pr-2"
          >
            <AiFillLinkedin />
          </a>
          <a
            href="https://github.com/ashjha03"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-150 transition-all link text-4xl pr-2"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://twitter.com/ashjha03"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-150 transition-all link text-4xl pr-2"
          >
            <AiFillTwitterCircle />
          </a>
          <a
            href="https://www.instagram.com/ashjha03/"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-150 transition-all link text-4xl pr-2"
          >
            <AiFillInstagram />
          </a>
          <a
            href="https://www.facebook.com/ashjha03"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-150 transition-all link text-4xl pr-2"
          >
            <AiFillFacebook />
          </a>
        </div>
        <div className="codingProfiles flex pt-4">
          <a
            href="https://codechef.com/users/bakhtabar"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-150 transition-all link text-4xl pr-5"
          >
            <SiCodechef />
          </a>
          <a
            href="https://codeforces.com/profile/bakhtabar"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-150 transition-all link text-4xl pr-5"
          >
            <SiCodeforces />
          </a>
          <a
            href="https://leetcode.com/bakhtabar/"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-150 transition-all link text-4xl pr-5"
          >
            <SiLeetcode />
          </a>
          <a
            href="https://auth.geeksforgeeks.org/user/ashjha03"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-150 transition-all link text-4xl pr-5"
          >
            <SiGeeksforgeeks />
          </a>
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default Home;
