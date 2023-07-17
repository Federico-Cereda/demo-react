import { Children, PropsWithChildren, createElement } from "react";

interface CardProps {
    title: string;
    icon?: string;
}

export function Card(props: PropsWithChildren<CardProps>) {
    const { title, icon
        //  = 'fa fa-times'
         , children } = props;
    return <div>
        <div className="card">
            <div className="card-header">
                <div className="d-flex justify-content-between align-items-center">
                    <div>{title}</div>
                    {icon && <i className={icon}></i>}
                </div>
            </div>
            <div className="card-body">
                {
                    Children.toArray(children)
                    .filter((child: any) => {
                        return child.props.className === 'two'
                    })
                }
            </div>
        </div>
    </div>
}