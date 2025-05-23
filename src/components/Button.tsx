import React from 'react';

type ButtonProps = {
    label: string;
    href?: string;
    target?: string;
    icon?: string;
    classes?: string;
    download?: boolean;
};

const ButtonPrimary: React.FC<ButtonProps> = ({
                                                  href,
                                                  target = "_self",
                                                  label,
                                                  icon,
                                                  classes = "",
                                                  download = false
                                              }) => {
    if (href) {
        return (
            <a
                href={href}
                target={target}
                download={download ? "" : undefined} // <-- important for download
                className={'btn btn-primary ' + classes}
            >
                {label}
                {icon && (
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icon}
                    </span>
                )}
            </a>
        );
    } else {
        return (
            <button className={'btn btn-primary ' + classes}>
                {label}
                {icon && (
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icon}
                    </span>
                )}
            </button>
        );
    }
};

const ButtonOutline: React.FC<ButtonProps> = ({
                                                  href,
                                                  target = "_self",
                                                  label,
                                                  icon,
                                                  classes = ""
                                              }) => {
    if (href) {
        return (
            <a href={href} target={target} className={'btn btn-outline ' + classes}>
                {label}
                {icon && (
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icon}
                    </span>
                )}
            </a>
        );
    } else {
        return (
            <button className={'btn btn-outline ' + classes}>
                {label}
                {icon && (
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icon}
                    </span>
                )}
            </button>
        );
    }
};

export {ButtonPrimary, ButtonOutline};
