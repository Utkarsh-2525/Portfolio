/**
 * @copyright 2025 M.Utkarsh
 * @license Apache-2.0
 */
import React from "react";

type SkillCardProps = {
    icon: string;
    name: string;
    classes?: string;
};

const SkillCard: React.FC<SkillCardProps> = ({ icon, name, classes }) => {
    return (
        <div className={'flex items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-800 transition-colors group' + classes}>
            <figure className="bg-zinc-700/50 rounded-lg overflow-hidden w-12 h-12 p-2 bg-zinc-900 transition-colors">
                <img
                    src={icon}
                    alt={name}
                    width={40}
                    height={40}
                    className="drop-shadow-md"
                />
            </figure>
            <h3 className="text-zinc-400 text-sm">
                {name}
            </h3>
        </div>
    );
};

export default SkillCard;
