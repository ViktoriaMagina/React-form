import { ReactNode } from "react";

interface FormWrapperProps{
    title: string;
    children: ReactNode
}

export default function FormWrapper({title, children}: FormWrapperProps){
    return(
        <div>
        <h2>{title}</h2>
        <div className="form-wrapper">{children}</div>
        </div>
    )
}