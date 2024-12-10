import { PROJECTS } from "../constants"

const Projects = () => {
    return (
        <div >
            <div className="text-center text-4xl my-10 ">Projects</div>

            <div className="flex flex-wrap">
                {PROJECTS.map((project, index) => (
                    <div key={index}>

                        <div className="w-full lg:w-1/4">
                            {project.title}
                        </div>
                        <div className="w-full max-w-xl lg:w-3/4">
                            <p>{project.technologies}</p>
                            <p> {project.description} </p>
                        </div>

                    </div>
                ))}
            </div>







        </div>
    )
}

export default Projects