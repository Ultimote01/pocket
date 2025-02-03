"use client"


import { useState } from "react"
import { Radio, RadioGroup } from "@headlessui/react"
import clsx from "clsx"


import { Button } from "./Button"
import { Container } from "./Container"
import { Logomark } from "./Logo"
import "@/styles/pricing.css"


const plans = [
    {
      name: 'Starter',
      featured: false,
      price: { Monthly: '$0', Annually: '$0' },
      description:
        'You’re new to investing but want to do it right. Get started for free.',
      button: {
        label: 'Get started for free',
        href: '/register',
      },
      features: [
        'Commission-free trading',
        'Multi-layered encryption',
        'One tip every day',
        'Invest up to $1,500 each month',
      ],
      logomarkClassName: 'logomark-starter',
    },
    {
      name: 'Investor',
      featured: false,
      price: { Monthly: '$7', Annually: '$70' },
      description:
        'You’ve been investing for a while. Invest more and grow your wealth faster.',
      button: {
        label: 'Subscribe',
        href: '/register',
      },
      features: [
        'Commission-free trading',
        'Multi-layered encryption',
        'One tip every hour',
        'Invest up to $15,000 each month',
        'Basic transaction anonymization',
      ],
      logomarkClassName: 'logomark-investor',
    },
    {
      name: 'VIP',
      featured: true,
      price: { Monthly: '$199', Annually: '$1,990' },
      description:
        'You’ve got a huge amount of assets but it’s not enough. To the moon.',
      button: {
        label: 'Subscribe',
        href: '/register',
      },
      features: [
        'Commission-free trading',
        'Multi-layered encryption',
        'Real-time tip notifications',
        'No investment limits',
        'Advanced transaction anonymization',
        'Automated tax-loss harvesting',
      ],
      logomarkClassName: 'logomark-vip',
    },
  ]


  function CheckIcon(props) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
        <path
          d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
          fill="currentColor"
        />
        <circle
          cx="12"
          cy="12"
          r="8.25"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }


 function Plan({
    name,
    price,
    description,
    button,
    features,
    activePeriod,
    logomarkClassName,
    featured=false}){
      
        return (
            <section
            className={clsx('pricingsection',
                featured? "pricingsectionOpt":'pricingsectionOpt1'
            )}>
                <h3
                className={clsx(
                    'pricingh3',
                    featured ? 'pricingh3Opt':'pricingh3Opt1'
                )}>
                    <Logomark className={clsx('pricinglogomask',logomarkClassName)} fill=''/>
                    <span style={{marginLeft:"1rem"}}>{name}</span>
                </h3>
                <p 
                className={clsx("pricingp",
                  featured ? "pricingpOpt":'pricingpOpt1'
                )}>
                  {price.Monthly === price.Annually ? (
                    price.Monthly
                  ):
                  (
                    <>
                    <span 
                    aria-hidden={activePeriod === 'Annually'}
                    className={clsx(
                      'pricingspan',
                      activePeriod === 'Annually' && 
                      'pricingspanOpt'
                    )}>
                      {price.Monthly}
                    </span>
                    <span
                    aria-hidden={activePeriod === 'Monthly'}
                    className={clsx(
                      'pricingspan1',
                      activePeriod  === 'Monthly' && 
                      'pricingspan1Opt'
                    )}>
                      {price.Annually}
                    </span>
                    </>
                  )}
                </p>
                <p 
                className={clsx(
                  "pricingspan2",
                  featured?
                  "pricingspan2Opt"
                  :'pricingspan2Opt1'
                )}>
                    {description}
                </p>
                <div className="pricingdiv1">
                    <ul
                    role="list"
                    className={clsx(
                      "pricingul",
                      featured ?
                      'pricingulOpt'
                      :'pricingulOpt1'
                    )}>
                      {
                        features.map((feature)=>(
                          <li key={feature} style={{display:'flex',padding:'0.5rem 0px 0.5rem 0px'}}>
                              <CheckIcon
                              className={clsx(
                                'pricingcheckIcon',
                                featured ?
                                'pricingcheckIconOpt'
                                :'pricingcheckIconOpt1'
                              )}/>
                              <span style={{marginLeft:'1rem'}}>{feature}</span>
                          </li>
                        ))
                      }
                    </ul>
                </div>
                <Button
                href={button.href}
                color={featured ? 'cyan':'grey'}
                aria-label={`Get started with the ${name} plan for ${price}`}>
                  {button.label}
                </Button>
            </section>
        )
    }


    export function Pricing(){
      let [activePeriod, setActivePeriod] = useState('Monthly')

      return(
        <section
        id='pricing'
        aria-labelledby="pricing-title"
        className="pricingsection1">
        
        <Container>
          <div className="pricingdiv2" >
          <h2 
          id="pricing-title"
          className="pricingh2">
              Flat pricing, no management fees.
          </h2>
          <p style={{marginTop:'0.5rem', fontSize:'1.125rem',lineHeight:'2rem', color:'rgb(82 82 82 82 / 1)'}}>
          Whether you’re one person trying to get ahead or a big firm trying
          to take over the world, we’ve got a plan for you.
          </p>
          </div>

          <div style={{marginTop:'2rem', display:'flex', justifyContent:'center'}}>
            <div style={{position:'relative'}}>
                <RadioGroup
                value={activePeriod}
                onChange={setActivePeriod}
                className='pricingradioGroup'
                >
                  {['Monthly', 'Annaully'].map((period)=>(
                    <Radio
                    key={period}
                    value={period}
                    className={clsx(
                      'pricingradio',
                      period === 'Monthly'
                      ? 'pricingradioOpt'
                      : 'pricingradioOpt1'
                    )}
                    >
                      {period}
                    </Radio>
                  ))}
                </RadioGroup>
                <div
                aria-hidden='true'
                className={clsx(
                  'pricingdiv3',
                  activePeriod === 'Monthly'
                  ? 'pricingdiv3Opt'
                  : 'pricingdiv3Opt1'
                )}
                >
                  {['Monthly', 'Annually'].map((period)=>(
                    <div
                      key={period}
                      style={{padding:'0.5rem 0px 0.5rem 0px',textAlign:'center',fontSize:'0.875rem',lineHeight:'1.5rem',fontWeight:'500',color:'rgb(255 255 255 / 1)',marginLeft:`${period === 'Annually' && '-1px'}`}}
                    >
                      {period}
                    </div>
                  ))}
                </div>
            </div>
          </div>

          <div className="pricingdiv4">
                  {plans.map((plan)=>(
                    <Plan key={plan.name} {...plan} activePeriod={activePeriod}/>
                  ))}
          </div>
        </Container>

        </section>
      )
    }