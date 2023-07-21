import { PropsWithChildren } from "react";

export function PageTitle(props: PropsWithChildren) {
    return <h1 className="text-primary">{props.children}</h1>
}
