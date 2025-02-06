import Link from 'next/link'


import { Logo } from './Logo'
import "@/styles/authlayout.css"
import { CirclesBackground } from './CirclesBackground'

export function AuthLayout({title, subtitle ,children})
{
    console.log(subtitle)
    return(
        <main className='authlayoutmain'>
            <div className='authlayoutdiv'>
                <Link href='/' aria-label='home'>
                    <Logo className='authlayoutlogo'/>
                </Link>
                <div className='authlayoutdiv1'>
                    <CirclesBackground
                    width='1090'
                    height='1090'
                    className='authlayoutcirclebackground'
                    />
                    <h1 className='authlayouth1'>
                        {title}
                    </h1>
                    {subtitle &&(
                        <p style={{marginTop:'0.75rem',textAlign:'center',fontSize:'1.125rem',lineHeight:'2rem'}}>{subtitle}</p>  
                    )}
                </div>
                <div className='authlayoutdiv2'>
                    {children}
                </div>
            </div>
        </main>
    )
}