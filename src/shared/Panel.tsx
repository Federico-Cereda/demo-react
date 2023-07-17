import { Children, PropsWithChildren, createElement } from "react";

interface PanelProps {
}

export function Panel(props: PropsWithChildren<PanelProps>) {
    const { children } = props;
    return <div>
        <div className="card">
            <div className="card-header">
                <div className="d-flex justify-content-between align-items-center">
                {
                    Children.toArray(children)
                    .filter((child: any) => {
                        console.log(child)
                        return child.type.name === 'PanelTitle'
                    })
                }
                </div>
            </div>
            <div className="card-body">
                {
                    Children.toArray(children)
                    .filter((child: any) => {
                        console.log(child)
                        return child.type.name === 'PanelBody'
                    })
                }
            </div>
        </div>
    </div>
}

export function PanelTitle(props: PropsWithChildren) {
    return <div>
        {props.children}
    </div>
}

export function PanelBody(props: PropsWithChildren) {
    return <div>
        {props.children}
    </div>
}

Panel.Title = PanelTitle;
Panel.Body = PanelBody;
