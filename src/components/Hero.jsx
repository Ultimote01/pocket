import { useId } from "react";
import Image from "next/image"
import clsx from "clsx"

import { AppDemo } from "./AppDemo";
import { AppStoreLink } from "./AppStoreLink";
import { Button } from "./Button";
import { Container } from "./Container";
import { PhoneFrame } from "./PhoneFrame";
import logBbc from "@/images/logos/bbc.svg"
import logoCbs from "@/images/logos/cbs.svg"
import logoCnn from "@/images/logos/cnn.svg"
import logoFastCompany from "@/images/logos/fast-company.svg"
import logoForbes from "@/images/logos/forbes.svg"
import logoHuffpost from "@/images/logos/huffpost.svg"
import logoTechcrunch from "@/images/logos/techcrunch.svg"
import logoWired from "@/images/logos/wired.svg"
import "@/styles/hero.css"




function BackgroundIllustration(props){
        let id =useId();


        return(
        <div {...props}>
       <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="herosvg"
      >
        <path
          d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M513 1025C230.23 1025 1 795.77 1 513"
          stroke={`url(#${id}-gradient-1)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-1`}
            x1="1"
            y1="513"
            x2="1"
            y2="1025"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="herosvg1"
      >
        <path
          d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M913 513c0 220.914-179.086 400-400 400"
          stroke={`url(#${id}-gradient-2)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-2`}
            x1="913"
            y1="513"
            x2="913"
            y2="913"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      </div>
    )
}



function PlayIcon(props) {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
        <circle cx="12" cy="12" r="11.5" stroke="#D4D4D4" />
        <path
          d="M9.5 14.382V9.618a.5.5 0 0 1 .724-.447l4.764 2.382a.5.5 0 0 1 0 .894l-4.764 2.382a.5.5 0 0 1-.724-.447Z"
          fill="#A3A3A3"
          stroke="#A3A3A3"
        />
      </svg>
    )
  }


export function Hero(){
    return(
        <div className="herodiv">
            <Container>
                <div className="herodiv1">
                    <div className="herodiv2">
                        <h1 className="heroh1">
                            Invest at the perfect time.
                        </h1>
                        <p style={{marginTop:'1.5rem',fontSize:'1.125rem',lineHeight:'2rem',color:'rgb(75 85 99 / 1)'}}>
                            By  leveraging insights from our network of industry insiders,
                            you'll know exactly when to buy to maximize profit, and exactly
                            when to sell to avoid painful losses
                        </p>
                        <div style={{marginTop:'2rem',display:'flex',flexWrap:'wrap',gap:'1rem 1.5rem'}}>
                             <AppStoreLink/>
                             <Button
                             href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                             variant="outline">
                                <PlayIcon className="heroplayicon" />
                                <span style={{marginLeft:'0.625rem'}}>Watch the video </span>
                             </Button>
                            
                        </div>
                    </div>
                    <div className="herodiv3">
                        <BackgroundIllustration className="hero-backgroundIllustration"/>
                        <div className="herodiv4">
                            <PhoneFrame className="hero-phoneframe">
                                <AppDemo/>
                            </PhoneFrame>
                        </div>
                    </div>
                    <div className="herodiv5">
                        <p className="herop">
                            As featured in
                        </p>
                        <ul
                        role="list"
                        className="heroul">
                        {[
                            ["Forbes",logoForbes],
                            ['TechCrunch', logoTechcrunch],
                            ['Wired', logoWired],
                            ['CNN', logoCnn, "cnnli"],
                            ['BBC',logBbc],
                            ['CBS',logoCbs],
                            ['Fast Company', logoFastCompany],
                            ['huffPost', logoHuffpost, 'huffpostli']
                        ].map(([name,logo,className])=>(
                            <li key={name} className={clsx(className)}>
                                <Image src={logo} alt={name} className="hero-image" unoptimized/>
                            </li>
                        ))}
                        </ul>
                      
                    </div>
                </div>
            </Container>
        </div>
    )
}