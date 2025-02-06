import Image from 'next/image'
import Link from 'next/link'


import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { TextField } from '@/components/Fields'
import { Logomark} from '@/components/Logo'
import { NavLinks  } from './Navlinks'
import qrCode  from '@/images/qr-code.svg'
import "@/styles/footer.css"

function QrCodeBorder(props) {
    return (
      <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" {...props}>
        <path
          d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    )
  }


  export function Footer(){
    return(
        <footer className='footer'>
            <Container>
                <div className='footer-div'>
                <div>
                  <div className='footer-div1'>
                  <Logomark className="footer-logomark"/>
                  <div style={{marginLeft:'1rem'}}>
                    <p style={{fontSize:'1rem',lineHeight:'1.5rem', fontWeight:'600'}}>Pocket</p>
                    <p style={{marginTop:'0.25rem',fontSize:'0.875rem',lineHeight:'1.5rem'}}>Invest at the perfect time </p>
                  </div>
                  </div>
                  <nav style={{marginTop:'2.75rem',display:'flex',gap:'2rem'}}>
                  <NavLinks/>
                  </nav>
                </div>
                <div className=' group footer-div2'>
                  <div className='footer-div3'>
                  <QrCodeBorder className="qrcode-border"/>
                  <Image src={qrCode} alt='' unoptimized/>
                  </div>
                  <div className='footer-div4'>
                  <p style={{fontSize:'1rem',lineHeight:'1.5rem',color:'rgb(23 23 23 / 1)',fontWeight:'600'}}>
                      <Link href={'#'}>
                          <span className='footer-div4-span' />
                          Download the app 
                      </Link>
                  </p>
                  <p style={{marginTop:'0.25rem',fontSize:'0.875rem',lineHeight:'1.5rem',color:'rgb(55 65 81 / 1)'}}>
                  Scan the QR code to download the app from the App store
                  </p>
                  </div>
                </div>
                </div>
                <div className='footer-div5'>
                  <form className='footer-form'>
                    <TextField 
                    type='email'
                    aria-label="Email address"
                    placeholder='Email address'
                    autoComplete='email'
                    required
                    className='footer-textfield'
                    />
                    <Button type="submit" color="cyan" className={'footer-button'}>
                      <span className='footer-form-span'>Join our newsletter</span>
                      <span className='footer-form-span1'>Join newsletter</span>
                    </Button>
                  </form>
                  <p className='footer-form-p'>
                    &copy; Copyright {new Date().getFullYear()}. All rights reserved.
                    </p> 
                </div>
            </Container>
        </footer>
    )
  }