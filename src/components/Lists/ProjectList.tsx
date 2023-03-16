import { ProjectThumbnail, ProjectType } from "../../models/project-thumbnail.model";
import { t } from "i18next";

type ProjectListProps = {
    projectList: ProjectThumbnail[];
}

export default function ProjectList({ projectList }: ProjectListProps) {
    return (
        projectList.map((project, index) => (
                <article key={"project-" + index} className='rounded-xl shadow-lg ease-in duration-150 transition hover:shadow-2xl w-full md:w-2/5 xl:w-1/4 bg-white dark:bg-gray-800 flex flex-col h-auto'>
                    <picture>
                        <source srcSet={`${project.thumbs[0]}`} media="(min-width: 992px)" />
                        <source srcSet={`${project.thumbs[0]}.small.webp`} media="(min-width: 0px)" />
                        <img loading="lazy" src={`${project.thumbs[0]}.small.webp`} className="h-56 w-full object-cover rounded-t-xl" alt={project.description} />
                    </picture>
                    <section className='p-6 flex flex-col h-full'>
                        <header>
                            <h1 className="text-xl md:text-2xl text-black dark:text-white font-bold pb-1 md:pb-3 relative ">{t(project.title)}
                                {/* <span className="absolute top-0 ml-2 p-1.5 px-2 text-xs font-bold bg-blue-600 text-white rounded-md">
                                {new Date(project.date).getFullYear()}
                            </span> */}
                            </h1>
                        </header>
                        <p className="text-xs md:text-sm pb-8">{t(project.description)}</p>
                        {/* <span className="text-lg font-bold text-black">
							{new Date(project.date).getFullYear()}
						</span> */}
                        <h4 className="text-lg font-bold pb-2 mt-auto">{t('projects.technologies')}:</h4>
                        <div className='flex flex-wrap space-x-3 w-full mb-8'>
                            {
                                project.usedTechnologies
                                    .map((tech, index) => (
                                        <picture title={tech.name} tabIndex={-1} key={"tech-" + index}>
                                            <source srcSet={`${tech.icon}`} media="(min-width: 992px)" />
                                            <source srcSet={`${tech.icon}.small.webp`} media="(min-width: 0px)" />
                                            <img loading="lazy" src={tech.icon} className='w-auto h-6 filter drop-shadow-xl zoom-in' alt={tech.name} />
                                        </picture>
                                    ))
                            }
                        </div>
                        <div className='space-x-2'>
                            <a href={project.href} /* href={`/${i18n.language}/project/${project.Id}`} */>
                                <button className='view-more mt-auto text-white'>{t('projects.visit')}</button>
                            </a>
                            {
                                project.projectType === ProjectType.OPEN_SOURCE ?
                                    <a href={project.projectSource} target='_blank'>
                                        <button className='open-source mt-auto text-white'>{t('projects.visitGithub')}</button>
                                    </a>
                                    :
                                    null
                            }
                        </div>

                    </section>
                </article>
            ))
    )
};