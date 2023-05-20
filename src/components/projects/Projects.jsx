

const Projects = ({theme}) => {
  return (
    <div data-theme={theme} id="projects" className='py-10 lg:px-10 px-4 border-b'>
      <div className="project-head text-center pb-5">
        <h1 className="text-7xl font-bold">My Work</h1>
      </div>
      <div className="projects pt-5 grid lg:grid-cols-3 gap-8">
        <div className="project-box shadow-lg hover:scale-105 transition-all border-2 rounded-xl">
            <a href="https://youtube-ashjha03.vercel.app/" rel="noreferrer" target="_blank"  className="box-img mb-2 border-b">
                <img src={require("../../assets/Youtubeclone.png")} className='h-[275px] rounded-t-xl rounded mx-auto' alt="Project"/>
            </a>
            <div className="box-content p-4">
                <div className="project-head text-center pb-2">
                    <h1 className="text-3xl font-bold">YouTube Clone</h1>
                </div>
                <div className="project-about">
                    <p className="text-lg">By combining the flexibility of React with the extensive features provided by the YouTube API v3, MyTubeClone delivers a feature-rich YouTube-like experience. </p>
                </div>
            </div>
        </div>
        <div className="project-box border-2 hover:scale-105 shadow-lg rounded-xl">
            <a href="https://postify.cyclic.app/" rel="noreferrer" target="_blank"  className="box-img mb-2 border-b">
                <img src={require("../../assets/Postify.png")} className='h-[275px] rounded-t-xl rounded mx-auto' alt="Project"/>
            </a>
            <div className="box-content p-4">
                <div className="project-head text-center pb-2">
                    <h1 className="text-3xl font-bold">Postify</h1>
                </div>
                <div className="project-about">
                    <p className="text-lg">A feature-rich web application built with Node.js, EJS, MongoDB, and JavaScript. Postify provides seamless CRUD (Create, Read, Update, Delete) operations, allowing users to effortlessly manage their content.</p>
                </div>
            </div>
        </div>
        <div className="project-box border-2 hover:scale-105 shadow-lg rounded-xl">
            <a href="https://gaurishankarrishtenaatekendra.netlify.app/" rel="noreferrer" target="_blank"  className="box-img mb-2 border-b">
                <img src={require("../../assets/Gsrnk.png")} className='h-[275px] rounded-t-xl rounded mx-auto' alt="Project"/>
            </a>
            <div className="box-content p-4">
                <div className="project-head text-center pb-2">
                    <h1 className="text-3xl font-bold">Gauri Shankar Rishte Naate Kendra</h1>
                </div>
                <div className="project-about">
                    <p className="text-lg">A dedicated matrimony website catering to the needs of individuals seeking life partners. Created with HTML, CSS, and JavaScript, this platform provides a user-friendly interface for users.</p>
                </div>
            </div>
        </div>
        <div className="project-box border-2 hover:scale-105 shadow-lg rounded-xl">
            <a href="/" rel="noreferrer" className="box-img mb-2 border-b">
                <img src={require("../../assets/Portfolio.png")} className='h-[275px] rounded-t-xl rounded mx-auto' alt="Project"/>
            </a>
            <div className="box-content p-4">
                <div className="project-head text-center pb-2">
                    <h1 className="text-3xl font-bold">Personal Portfolio</h1>
                </div>
                <div className="project-about">
                    <p className="text-lg"> A stunning website built with ReactJS, Tailwind CSS, and DaisyUI. This portfolio showcases my skills, projects, and achievements in a visually appealing and responsive design. Experience my professional journey and expertise through My Portfolio today.</p>
                </div>
            </div>
        </div>
        <div className="project-box border-2 hover:scale-105 shadow-lg rounded-xl">
            <a href="https://shreerammedimed.netlify.app/" rel="noreferrer" target="_blank"  className="box-img mb-2 border-b">
                <img src={require("../../assets/Srm.png")} className='h-[275px] rounded-t-xl rounded mx-auto' alt="Project"/>
            </a>
            <div className="box-content p-4">
                <div className="project-head text-center pb-2">
                    <h1 className="text-3xl font-bold">Shree Ram Medimed</h1>
                </div>
                <div className="project-about">
                    <p className="text-lg">A professional website representing an orthopaedic company specializing in selling their high-quality products. Created with HTML, CSS, and JavaScript, this website offers a user-friendly interface where visitors can explore a range of orthopaedic products.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
