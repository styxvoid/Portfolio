import { projects } from '/src/data/projects'

function Work() {
    return (
        <Panel>
            {projects.map((project) => (
                <div key={project.title}>
                    <h3>{project.title}</h3>
                    <span>{project.year}</span>

                    <div className='flex gap-2'>
                        {project.stack.map((tech) => (
                            <Techpill key={tech} label={tech} />
                        ))}
                    </div>
                </div>
            ))}
            </Panel>
    )
}