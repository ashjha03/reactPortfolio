import React, { useEffect } from "react"
import {AiFillGithub, AiFillLinkedin, AiFillInstagram, AiFillTwitterCircle, AiFillFacebook} from "react-icons/ai"
import {SiCodechef, SiCodeforces, SiLeetcode, SiGeeksforgeeks} from "react-icons/si"
import Typed from 'typed.js'

const Home = ({theme}) => {
  const el = React.useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Web Developer', 'Web Designer', 'Competitive Programmer'],
      typeSpeed: 100,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy()
      typed.cursorBlinking()
    };
  }, []);

  return (
    <div data-theme={theme} className='lg:px-10 py-10 p-5 lg:flex lg:justify-around border-b'>
      <div className="homeImg w-[30%] hidden lg:block">
        <img src={require("./Prof2.png")} className='lg:w-[50%] lg:mx-auto' alt="profile" />
      </div>
      <div className="homeContent lg:w-[60%] lg:p-10">
        <h1 className="text-5xl pb-5 pl-5 pt-5 lg:pt-0">Hello !</h1>
        <h1 className="text-8xl pb-5">Ashish Jha</h1>
        <p className="text-4xl"><span ref={el} /> </p>
        <div className="socialLinks flex pt-4">
            <a href="https://linkedin.com/in/ashjha03" target="_blank" rel="noreferrer" className="hover:text-5xl transition-all link text-4xl pr-2" ><AiFillLinkedin /></a>
            <a href="https://github.com/ashjha03" target="_blank" rel="noreferrer" className="hover:text-5xl transition-all link text-4xl pr-2" ><AiFillGithub /></a>
            <a href="https://twitter.com/ashjha03" target="_blank" rel="noreferrer" className="hover:text-5xl transition-all link text-4xl pr-2" ><AiFillTwitterCircle /></a>
            <a href="https://github.com/ashishjha" target="_blank" rel="noreferrer" className="hover:text-5xl transition-all link text-4xl pr-2" ><AiFillInstagram /></a>
            <a href="https://github.com/ashishjha" target="_blank" rel="noreferrer" className="hover:text-5xl transition-all link text-4xl pr-2" ><AiFillFacebook /></a>
        </div>
        <div className="codingProfiles flex pt-4">
            <a href="https://codechef.com/users/bakhtabar" target="_blank" rel="noreferrer" className="hover:text-5xl transition-all link text-4xl pr-5"><SiCodechef /></a>
            <a href="https://codeforces.com/profile/bakhtabar" target="_blank" rel="noreferrer" className="hover:text-5xl transition-all link text-4xl pr-5"><SiCodeforces /></a>
            <a href="https://leetcode.com/bakhtabar/" target="_blank" rel="noreferrer" className="hover:text-5xl transition-all link text-4xl pr-5"><SiLeetcode /></a>
            <a href="https://auth.geeksforgeeks.org/user/ashjha03" target="_blank" rel="noreferrer" className="hover:text-5xl transition-all link text-4xl pr-5"><SiGeeksforgeeks /></a>
        </div>
      </div>
    </div>
  )
}

export default Home
