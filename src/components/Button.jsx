import Link from "next/link";
import clsx from "clsx";

import "@/styles/button.css"


const baseStyles={
    solid:'basestyles-solid',
    outline:'basestyles-outline'
}


const variantStyles={
    solid:{
        cyan:'variantstyles-cyan',
        white:'variantstyles-white',
        gray:'variantstyles-gray'
    },

    outline:{
        gray:'variantstyles-outline-gray'
    }
}


export function Button({ className, ...props}){
    props.variant ??='solid';
    props.color ??='gray'  ;


    className=clsx(
        baseStyles[props.variant],
        props.variant === 'outline'?
        variantStyles.outline[props.color]:
        props.varaiant == 'solid'?
        variantStyles.solid[props.color]: undefined,
        className
    )

    return typeof props.href === 'undefined'?
    <button className={className} {...props} />:
    <Link className={className} {...props} />
}

