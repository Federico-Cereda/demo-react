import { PropsWithChildren } from "react";

interface ModalProps {
    open: boolean;
}

export function Modal(props: PropsWithChildren<ModalProps>) {
    return props.open ?
        <div className="position-fexed bg-dark top-0" style={{ width: '100%', height: '100vh', zIndex: 10 }}>
            <div className="p-3">
                {props.children}
            </div>
        </div> : null
}
