import {SiGmail} from "react-icons/si"
import {AiFillGithub, AiFillLinkedin, AiFillInstagram} from "react-icons/ai"

const Contact = ({theme}) => {
  return (
    <div data-theme={theme} id="contact" className="py-10 lg:px-8 px-3 border-t">
      <div className="contactHead text-center pb-5">
        <h1 className="text-6xl  font-bold">Contact Me</h1>
      </div>
      <div className="contactBox lg:flex lg:justify-center lg:items-center lg:px-10">
        <div className="contact-form lg:w-[50%] py-4">
            <div className="contact-data-head text-4xl pb-3 ">Message Me</div>
            <form name="contact" method="POST" data-netlify="true">
                <div className="inputBox pb-3">
                    <input type="text" name="Name" placeholder="Name" className="p-3 w-[90%] border shadow rounded-lg" />
                </div>
                <div className="inputBox pb-3">
                    <input type="email" name="Email" placeholder="Email" className="p-3 w-[90%] border rounded-lg shadow" />
                </div>
                <div className="inputBox pb-3">
                    <input type="text" placeholder="Mobile Number" name="mobile" className="p-3 w-[90%] border rounded-lg shadow" />
                </div>
                <div className="inputBox pb-3">
                    <textarea name="message" placeholder="Message" className="p-5 w-[90%] border  shadow rounded-lg h-[200px]" ></textarea>
                </div>
                <button type="submit" className="btn w-[90%]">Submit</button>
            </form>
        </div>
        <div className="contact-data lg:w-[50%] py-4">
            <div className="contact-data-head text-4xl pb-3 ">Get in touch</div>
            <div className="contact-data-data">
                <p className="text-lg pb-10">I am Ashish Jha, a Full Stack Web Developer/designer focused on crafting great web experiences. Designing and Coding have been my passion since the days I started working with computers.</p>
                <p className="text-lg pb-10">Wanna contact me, you can fill the contact form attached and I'll reach you at the earliest.</p>
                <div className="contact-links">
                    <div className="mail flex items-center text-xl pb-1">
                        <SiGmail className="pr-3 text-3xl" />
                        ashjha2002@gmail.com
                    </div>
                    <div className="github flex items-center text-xl pb-1">
                        <AiFillGithub className="pr-3 text-3xl" />
                        @ashjha03
                    </div>
                    <div className="linkedin flex items-center text-xl pb-1">
                        <AiFillLinkedin className="pr-3 text-3xl"/>
                        @ashjha03
                    </div>
                    <div className="insta flex items-center text-xl pb-1">
                        <AiFillInstagram className="pr-3 text-3xl" />
                        @ashjha03
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
