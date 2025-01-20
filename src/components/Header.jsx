'use client'

import Link from "next/link"
import {
    Popover,
    PopoverButton,
    PopoverBackdrop,
    PopoverPanel
} from "@headlessui/react"
import { AnimatePresence , motion } from "framer-motion"


import { Button } from "@/components/Button"
import { Container } from "@/components/Container"
import { Logo } from  "@/components/Logo"
import { NavLinks } from "@/components/Navlinks"
import "@/styles/header.css"

function MenuIcon(props) {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
        <path
          d="M5 6h14M5 18h14M5 12h14"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }
  
  function ChevronUpIcon(props) {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
        <path
          d="M17 14l-5-5-5 5"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }


  function MobileNavLink(props)  {
    return (
        <PopoverButton
            as={Link}
            className="mobilenav-link"
            {...props}
        />
    )
  }


  export function Header(){
    return (
        <header>
            <nav>
                <Container className="header-container">
                  <div className="header-div">
                    <Link href={"/"} aria-label="Home">
                    <Logo className="header-logo"/>
                    </Link> 
                    <div className="header-div1">
                      <NavLinks/>
                    </div>
                  </div>
                  <div className="header-div2">
                  <Popover className={"header-popover"}>
                    {({ open }) => (
                      <>
                      <PopoverButton className="header-popoverbutton"
                      aria-label="Toogle site navigation">
                        {({open})=> open?(
                          <ChevronUpIcon className="chevronup-icon"/>
                        ):(<MenuIcon className="menuUp-icon"/>)}
                          
                      </PopoverButton>
                      
                        <AnimatePresence>
                          {open && (
                            <>
                            <PopoverBackdrop
                            static
                            as={motion.div}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="popover-backdrop">
                              <PopoverPanel
                              static
                              as={motion.div}
                              initial={{opacity: 0, y: -32}}
                              animate={{opacity: 1, y: 0}}
                              exit={{
                                opacity: 0,
                                y: -32,
                                transition: { duration: 0.2},
                              }}
                              className="popover-panel">
                                <div className="mobilenav-container">
                                <MobileNavLink href="/#features">
                                  Features
                                </MobileNavLink>
                                <MobileNavLink href="/#reviews">
                                  Reviews
                                </MobileNavLink>
                                <MobileNavLink href="/#pricing">
                                  Pricing
                                </MobileNavLink>
                                <MobileNavLink href="/#faq">
                                  FAQs
                                </MobileNavLink>
                                </div>
                                <div className="mobilenav-button-container" >
                                <Button href="/login" variant="outline">
                                Log in 
                                </Button>
                                <Button href="#">
                                  Download the app
                                </Button>
                                </div>
                              </PopoverPanel>
                            </PopoverBackdrop>
                            </>
                          )}
                        </AnimatePresence>
                      </>
                    )}
                  </Popover>
                  <Button href="/login" variant="outline" className={"header-login-button"}>
                    Log in
                  </Button>
                  <Button href="#" className={"header-download-button"}>
                    Download
                    </Button>
                  </div>
                </Container>
            </nav>
        </header>
    )
  }