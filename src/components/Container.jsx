import clsx from 'clsx'


import "@/styles/container.css"


export function Container({ className, ...props }) {
  return (
    <div
      className={clsx("container", className)}
      {...props}
    />
  )
}
