

const Projects = ({theme}) => {
  return (
    <div data-theme={theme} id="projects" className='py-10 lg:px-10 px-4'>
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
                    <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sit veritatis enim non molestias ipsum accusantium. Officiis laudantium fugit.</p>
                </div>
            </div>
        </div>
        <div className="project-box border-2 hover:scale-105 shadow-lg rounded-xl">
            <a href="https://postify.onrender.com/" rel="noreferrer" target="_blank"  className="box-img mb-2 border-b">
                <img src={require("../../assets/Postify.png")} className='h-[275px] rounded-t-xl rounded mx-auto' alt="Project"/>
            </a>
            <div className="box-content p-4">
                <div className="project-head text-center pb-2">
                    <h1 className="text-3xl font-bold">Postify</h1>
                </div>
                <div className="project-about">
                    <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sit veritatis enim non molestias ipsum accusantium. Officiis laudantium fugit.</p>
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
                    <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sit veritatis enim non molestias ipsum accusantium. Officiis laudantium fugit.</p>
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
                    <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sit veritatis enim non molestias ipsum accusantium. Officiis laudantium fugit.</p>
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
                    <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sit veritatis enim non molestias ipsum accusantium. Officiis laudantium fugit.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
