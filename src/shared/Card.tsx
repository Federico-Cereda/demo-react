import clsx from "clsx";
import { PropsWithChildren, useState } from "react";

interface CardProps {
    title: string;
    icon?: string;
    iconClick?: () => void;
    variant?: 'primary' | 'secondary' | 'danger' | 'success';
}

export function Card(props: PropsWithChildren<CardProps>) {
    const { title, icon/*= 'fa fa-times'*/, children, iconClick, variant } = props;
    const [isOpened, setIsOpened] = useState(true)

    function iconClickHandler(event: React.MouseEvent) {
        event.stopPropagation();
        if (iconClick)
        iconClick()
    }

    return (
        <div className="card">
            <div className={clsx('card-header', {
                'bg-primary': variant === 'primary',
                'bg-secondary': variant === 'secondary',
                'bg-danger': variant === 'danger',
                'bg-success': variant === 'success',
            })} onClick={() => setIsOpened(prev => !prev)}>
                <div className="d-flex justify-content-between align-items-center">
                    <div>{title}</div>
                    { icon && <i onClick={iconClickHandler} className={icon}></i> }
                </div>
            </div>
            {
                isOpened && (
                <div className="card-body">
                    { children }
                </div> 
                )
            }
        </div>
    )
}