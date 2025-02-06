import { useId } from "react";
import clsx from 'clsx'

import "@/styles/fields.css"

const formClasses=
'textfield'


function Label({id , children}){
    return (
        <label
        htmlFor={id}
        className="label">
            {children}
        </label>
    )
}

export function TextField({label, type='text',className,...props}){
    let id = useId()

    return(
        <div className={className}>
            {label && <Label id={id}>{label}</Label>}
            <input id={id} type={type} {...props} className={clsx(formClasses,className)}></input>
        </div>
    )
}

export function SelectField({label, className, ...props}){
    let id = useId()
    return (
        <div className={className}>
            {label && <Label id={id}>{label}</Label>}
            <select id={id} {...props} className={clsx(formClasses)} style={{paddingRight:'2rem'}}/>
        </div>
    )
}