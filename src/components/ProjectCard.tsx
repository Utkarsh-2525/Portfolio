/**
 * @copyright 2025 M.Utkarsh
 * @license Apache-2.0
 */
import React from "react";

type ProjectCardProps = {
    imgSrc: string;
    projectLink: string;
    tags: string[];
    title: string;
    classes?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({imgSrc, projectLink, tags, title, classes}) => {
    return (
        <div className={'' + classes}>
            <figure className="img-box">
                <img src={imgSrc}
                     alt={title}
                     loading='lazy'
                     className="img-cover"/>
            </figure>
            <div className="">
                <div>
                    <h3 className="title-1">
                        {title}
                    </h3>
                    <div className="">
                        {tags.map((label, key) => (
                            <span className="" key={key}>
                                {label}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="">
                    <span className="material-symbols-rounded" aria-hidden='true'>
                        arrow-outward
                    </span>
                </div>
            </div>
            <a href={projectLink} className="" target='_blank'></a>
        </div>
    );
};


export default ProjectCard;