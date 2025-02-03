'use client'


import {Fragment, useEffect, useId,useRef, useState } from 'react';
import {Tab, TabGroup, TabList, TabPanel, TabPanels} from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion';
import { useDebouncedCallback } from 'use-debounce';

import { AppScreen } from './AppScreen';
import { CircleBackground } from './CircleBackground';
import { Container } from './Container';
import { PhoneFrame } from './PhoneFrame';
import {
    DiageoLogo,
    LaravelLogo,
    MirageLogo,
    ReversableLogo,
    StatamicLogo,
    StaticKitLogo,
    TransistorLogo,
    TupleLogo
} from "@/components/StockLogos"

import "@/styles/primaryfeatures.css"

 

const MotionAppScreenHeader=motion(AppScreen.Header)
const MotionAppScreenBody= motion(AppScreen.Body)

const features = [
    {
        name: 'Invite friends for better returns',
        description:
        "For every friend you invite to Pocket, you get insider notifications 5 seconds sooner. And it’s 10 seconds if you invite an insider",
        icon:DeviceUserIcon,
        screen: InviteScreen,
    },
    {
        name: 'Notificationon stock dips',
        description:
        "Get a push notification every time we find out something that's going to lower the share price on holdings so you can sell before the information hits the public markets. ",
        icon: DeviceNotificationIcon,
        screen: StocksScreen,
    },
    {
        name: 'Invest what you want',
        description:
        "We hide your stock purchases behind thousands of anonymous trading accounts, so suspicious activity can never be traced back to you.",
        icon: DeviceTouchIcon,
        screen: InvestScreen,
    },
]


function DeviceUserIcon (props){
    return(
        <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
        <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 23a3 3 0 100-6 3 3 0 000 6zm-1 2a4 4 0 00-4 4v1a2 2 0 002 2h6a2 2 0 002-2v-1a4 4 0 00-4-4h-2z"
          fill="#737373"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 4a4 4 0 014-4h14a4 4 0 014 4v24a4.002 4.002 0 01-3.01 3.877c-.535.136-.99-.325-.99-.877s.474-.98.959-1.244A2 2 0 0025 28V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 001.041 1.756C8.525 30.02 9 30.448 9 31s-.455 1.013-.99.877A4.002 4.002 0 015 28V4z"
          fill="#A3A3A3"
        />
      </svg>
    )
}

function DeviceNotificationIcon(props){
    return(
        <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
        <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
          fill="#A3A3A3"
        />
        <path
          d="M9 8a2 2 0 012-2h10a2 2 0 012 2v2a2 2 0 01-2 2H11a2 2 0 01-2-2V8z"
          fill="#737373"
        />
      </svg>
    )
}

function DeviceTouchIcon(props){
    let id = useId()

    return(
        <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <defs>
        <linearGradient
          id={`${id}-gradient`}
          x1={14}
          y1={14.5}
          x2={7}
          y2={17}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#737373" />
          <stop offset={1} stopColor="#D4D4D4" stopOpacity={0} />
        </linearGradient>
      </defs>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4a4 4 0 014-4h14a4 4 0 014 4v13h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h4v2H9a4 4 0 01-4-4V4z"
        fill="#A3A3A3"
      />
      <path
        d="M7 22c0-4.694 3.5-8 8-8"
        stroke={`url(#${id}-gradient)`}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 20l.217-5.513a1.431 1.431 0 00-2.85-.226L17.5 21.5l-1.51-1.51a2.107 2.107 0 00-2.98 0 .024.024 0 00-.005.024l3.083 9.25A4 4 0 0019.883 32H25a4 4 0 004-4v-5a3 3 0 00-3-3h-5z"
        fill="#A3A3A3"
      />
    </svg>
    )
}

const headerAnimation = {
  initial: { opacity: 0, transition: { duration: 0.3 } },
  animate: { opacity: 1, transition: { duration: 0.3, delay: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

const maxZIndex = 2147483647

const bodyVariantBackwards = {
  opacity: 0.4,
  scale: 0.8,
  zIndex: 0,
  filter: 'blur(4px)',
  transition: { duration: 0.4 },
}

const bodyVariantForwards = (custom) => ({
  y: '100%',
  zIndex: maxZIndex - custom.changeCount,
  transition: { duration: 0.4 },
})

const bodyAnimation = {
  initial: 'initial',
  animate: 'animate',
  exit: 'exit',
  variants: {
    initial: (custom, ...props) =>
      custom.isForwards
        ? bodyVariantForwards(custom, ...props)
        : bodyVariantBackwards,
    animate: (custom) => ({
      y: '0%',
      opacity: 1,
      scale: 1,
      zIndex: maxZIndex / 2 - custom.changeCount,
      filter: 'blur(0px)',
      transition: { duration: 0.4 },
    }),
    exit: (custom, ...props) =>
      custom.isForwards
        ? bodyVariantBackwards
        : bodyVariantForwards(custom, ...props),
  },
}



function InviteScreen(props){
    return(
        <AppScreen style={{width: '100%'}}>
            <MotionAppScreenHeader {...(props.animated? headerAnimation: {})}>
            <AppScreen.Title>Invite people</AppScreen.Title>
            <AppScreen.Subtitle>
                Get tips <span style={{color:'rgb(255 255 255 / 1)'}}>5s sooner</span> for every invite.
            </AppScreen.Subtitle>
            </MotionAppScreenHeader>
            <MotionAppScreenBody
            {...(props.animated? {...bodyAnimation, custom: props.custom}: {})}
            >
                <div className='invitescreendiv'>
                    <div className='invitescreendiv1'>
                        {
                            [{ label: 'Full name', value: 'Albert H.wiggin'},
                             { label: 'Email address', value: 'awiggin@chase.com'},
                            ].map((field)=>(
                               <div key={field.label}>
                                    <div style={{fontSize:'0.875rem',lineHeight:'1.5rem',color:'rgb(107 114 128 / 1)'}}>{field.label}</div>
                                    <div className='invitescreendiv2'>{field.value}</div>
                               </div> 
                            ))
                        }
                    </div>
                    <div className='invitescreendiv3'>
                        Invite  person
                    </div>
                </div>
            </MotionAppScreenBody>
        </AppScreen>
    )
}

function StocksScreen(props){
  return(
      <AppScreen  style={{width:'100%'}}>
        <MotionAppScreenHeader {...(props.animated ? headerAnimation: {})}>
          <AppScreen.Title>Stocks</AppScreen.Title>
          <AppScreen.Subtitle>March 9, 2022</AppScreen.Subtitle>
        </MotionAppScreenHeader>
        <MotionAppScreenBody 
         {...(props.animated ? {...bodyAnimation, custom: props.custom}:{})}>
          <div className='stockscreendiv'>
            {[
              {
                name :'Laravel',
                price: '4,098.01',
                change: '+4.98%',
                color: '#F9322C',
                logo: LaravelLogo,
              },
              {
                name: 'Tuple',
                price: '5,451.10',
                change: '-3.38%',
                color: '#5A67D8',
                logo: TupleLogo,
              },
              {
                name: 'Transistor',
                price: '4,098.41',
                change: '+6.25%',
                color: '#2A5B94',
                logo: TransistorLogo,
              },
              {
                name: 'Diageo',
                price: '250.65',
                change: '+1.25%',
                color: '#3320A7',
                logo: DiageoLogo,
              },
              {
                name: 'staticKit',
                price: '250.65',
                change: '-3.38%',
                color: '#2A3034',
                logo: StaticKitLogo,
              },
              {
                name: 'Statamic',
                price: '5,040.85',
                change: '-3.11%',
                color: '#0EA5E9',
                logo: StatamicLogo,
              },
              {
                name: 'Mirage',
                price: '140.44',
                change: '+9.09%',
                logo: MirageLogo,
              },
              {
                name: 'Reversable',
                price: '550.60',
                change: '-1.25%',
                color: '#8D8D8D',
                logo: ReversableLogo,
              },
            ].map((stock)=>(
              <div key={stock.name} style={{display:'flex',alignItems:'center',gap:'1rem',padding:'0.75rem 1rem'}}>
                <div 
                style={{flex:'none',borderRadius:'9999px',backgroundColor:stock.color}}>
                  <stock.logo style={{height:'2.5rem',width:'2.5rem'}} />
                </div>
                <div style={{flex:'1 1 auto',fontSize:'0.875rem',lineHeight:'1.5rem',color:'rgb(17 24 39 / 1)'}}>
                  {stock.name}
                </div>
                <div style={{flex:'none',textAlign:'right'}}>
                  <div style={{fontSize:'0.875rem',lineHeight:'1.5rem',fontWeight:'500',color:'rgb(17 24 39 / 1)'}}>
                    {stock.price}
                  </div>
                  <div style={{fontSize:'0.75rem',lineHeight:'1.25rem',color:`${stock.change?.startsWith('+') ?'rgb(6 182 212 / 1)':'rgb(115 115 115  / 1)'}` }}>
                    {stock.change}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </MotionAppScreenBody>
      </AppScreen>
  )
}


function InvestScreen(props){
  return(
    <AppScreen  style={{width:'100%'}}>
     <MotionAppScreenHeader {...(props.animated ? headerAnimation:{})}>
      <AppScreen.Title>Buy $LA</AppScreen.Title>
      <AppScreen.Subtitle>
        <span style={{color:'rgb(255 255 255 / 1)'}}>$34.28</span> per share
      </AppScreen.Subtitle>
      </MotionAppScreenHeader> 
      <MotionAppScreenBody {...(props.animated ? {...bodyAnimation, custom: props.custom}: {})}>
        <div style={{padding:'1.5rem 1rem'}}>
          <div className='investscreendiv'>
            {[{
              label: 'Number of shares', value: '100'
            },
            {
              label: 'Current market price',
              value: (
                <div style={{display:'flex'}}>
                  $34.28
                  <svg viewBox="0 0 24 24" fill="none"   style={{height:'1.5rem',width:'1.5rem'}}>
                      <path
                        d="M17 15V7H9M17 7 7 17"
                        stroke="#06B6D4"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                </div>
              ),
            },
            {label : 'Estimated cost', value: '$3,428.00'}
            ].map((item)=>(
              <div
              key={item.label}
              style={{display:'flex', justifyContent: 'space-between',borderBottomWidth:'1px',borderColor:'rgb(243 244 246 / 1)',paddingBottom:'1rem'}}>
                <div style={{fontSize:'0.875rem',lineHeight:'1.5rem',color:'rgb(107 114 128 / 1)'}}>{item.label}</div>
                <div style={{fontSize:'0.875rem',lineHeight:'1.5rem',fontWeight:'600',color:'rgb(17 24 39 / 1)'}}>
                  {item.value}
                </div>
              </div>
            ))}
            <div style={{borderRadius:'0.5rem',backgroundColor:'rgb(6 182 212 / 1)',padding:'0.5rem 0.75rem', textAlign:'center',fontSize:'0.875rem',lineHeight:'1.5rem',fontWeight:'600',color:'rgb(255 255 255 / 1)'}}>
              Buy shares
            </div>
          </div>
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  )
}

function  usePrevious(value){
  let ref = useRef()
  console.log(ref)

  useEffect(()=>{
    ref.current = value
  },[value])

  return ref.current
}


function FeaturesDesktop(){
    let [changeCount, setChangeCount] = useState(0)
    let [selectedIndex, setSelectedIndex] = useState(0)
    let prevIndex = usePrevious(selectedIndex)
    let isForwards = prevIndex === undefined ? true : selectedIndex > prevIndex
  
    let  onChange = useDebouncedCallback(
      (selectedIndex) => {
         setSelectedIndex(selectedIndex)
         setChangeCount((changeCount)=> changeCount + 1)
      },
      100,
      {leading: true},
    )

    return (
      <TabGroup
      className="featuresdesktopTabGroup"
      selectedIndex={selectedIndex}
      onChange={onChange}
      vertical
      >
      <TabList
      className='featuresdesktopTabList'>
        {
          features.map((feature, featureIndex)=>(
            <div
            key={feature.name}
            className='featuresdesktopdiv'>
            {featureIndex === selectedIndex && (
              <motion.div 
              layoutId='activeBackground'
              style={{position:'absolute',inset:'0px',backgroundColor:'rgb(38 38 38 / 1)'}}
              initial={{borderRadius: 16}}
              />
            )}
            <div style={{position:'relative', zIndex:'10',padding:'2rem'}}>
              <feature.icon style={{height:'2rem',width:'2rem'}}/>
                <h3 style={{marginTop:'1.5rem',fontSize:'1.125rem',lineHeight:'1.75rem', fontWeight:'600',color:'rgb(255 255 255 / 1)'}}>
                  <Tab className='featuresdesktopTab'>
                  <span style={{position:'absolute',inset:'0',borderRadius:'1rem'}}/>
                  {feature.name}
                  </Tab> 
                </h3>
                <p style={{marginTop:'0.5rem', fontSize:'0.875rem', lineHeight:'1.25rem',color:'rgb(156 163 175 / 1)'}}>
                  {feature.description}
                </p>
            </div>
            </div>
          ))
        }
      </TabList>
      <div style={{position:'relative', gridColumn:'span 6 / span 6'}} >
        <div style={{position:'absolute',left:'50%',top:'50%',transform:'translateX(-50%) translateY(-50%)'}}>
            <CircleBackground color='#13B5Cb' className='featuresdesktopCB'/>
        </div>
        <PhoneFrame style={{zIndex:'10',margin:'0px auto',width:'100%',maxWidth:'366px'}}>
          <TabPanels as={Fragment}>
            
            <AnimatePresence
            initial={false}
            custom={{isForwards , changeCount}}> 
            {features.map((feature, featureIndex)=>
              selectedIndex === featureIndex?
              (<TabPanel className="featuresdesktopTabpanel"  data-arialated="done"
              static
              key={feature.name + changeCount}> 
              <feature.screen animated custom={{isForwards, changeCount}} />
              </TabPanel>):null)}
              </AnimatePresence>
          </TabPanels>
        </PhoneFrame>
      </div>
      </TabGroup>
    )
  }

export function FeaturesMobile() {
  let [ activeIndex, setActiveIndex] =useState(0)
  let slideContainerRef = useRef(null)
  let slideRefs = useRef([])

  useEffect(()=>{
    let observer = new window.IntersectionObserver(
      (entries)=>{
        for (let entry of entries){
          if (entry.isIntersecting && entry.target instanceof HTMLDivElement){
            setActiveIndex(slideRefs.current.indexOf(entry.target))
            break
          }
        }
      },
      {
        root: slideContainerRef.current,
        threshold: 0.6
      },
    )
    for (let slide of slideRefs.current){
      if (slide){
        observer.observe(slide);
      }
    }

    return ()=>{
      observer.disconnect()
    }
  },[slideContainerRef,slideRefs])


  return(
      <>
      <div
      ref={slideContainerRef}
      className='featuresmobilediv'>
        {features.map((feature, featureIndex)=>(
          <div
          key={featureIndex}
          ref={(ref)=>ref && (slideRefs.current[featureIndex] = ref)}
          className='featuresmobilediv1'
          >
          
            <div style={{position:'relative',overflow:'hidden',borderRadius:'1rem',backgroundColor:'rgb(38 38 38 / 1) ',padding:'1.5rem 1.25rem'}}>
              <div style={{position:'absolute',left:'50%',top:'50%',transform:'translateX(-50%) translateY(-50%)'}}>
                <CircleBackground
                color='#13B5CB'
                style={{transform:`${featureIndex % 2 === 1 ? 'rotate(180deg)':''}`}}/>
              </div>
              <PhoneFrame className='featuresmobilephoneframe'>
                <feature.screen/>
              </PhoneFrame>
              <div className='featuresmobilediv2'>
                <feature.icon style={{height:'2rem',width:'2rem'}}/>
                <h3 className='featuresmobileh3'>
                  {feature.name}
                </h3>
                <p style={{marginTop:'0.5rem', fontSize:'0.875rem',lineHeight:'1.5rem', color:'rgb(163 163 163 / 1)'}}>
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      
      </div>
      <div style={{marginTop:'1.5rem',display:'flex',justifyContent:'center',gap:'0.75rem'}}>
            { features.map((_, featureIndex)=>(
              <button
              type='button'
              key={featureIndex}
              style={{position:'relative',height:'0.125rem',width:'1rem',borderRadius:'9999px',backgroundColor:`${featureIndex === activeIndex ? 'rgb(209 213 219 / 1)':'rgb(107 114 128  / 1)'}`}}
              aria-label={`Go to slide ${featureIndex + 1}`}
              onClick={()=>{
                slideRefs.current[featureIndex].scrollIntoView({
                  block: 'nearest',
                  inline: 'nearest'
                })
              }} >
                <span style={{position:'absolute',inset:'0.75rem 0.375rem'}}/>
              </button>
            ))
            }
          </div>
      </>
  )
}

export function PrimaryFeatures() {
  
  return(
    <section
    id='features'
    aria-label='Features for investing all your money'
    className='primaryfeatures-section'
    >

      <Container>
        <div className='primaryfeatures-div'>
          <h2 style={{fontSize:'2rem',lineHeight:'3rem',fontWeight:'500',letterSpacing:'-0.025em',color:'rgb(255 255 255 / 1)'}}>
            Every feature you need to win. Try it for yourself.
          </h2>
          <p style={{marginTop:'0.5rem', fontSize:'1.125rem',lineHeight:'2rem',color:'rgb(156 163 175 / 1)'}}>
            Pocket was built for investors like you who play by their own rules
            and aren't going to let SEC regulations get in the way of their
            dreams. If other investing tools are afraid to build it, Pocket has it.
          </p>
        </div>
      </Container>
      <div className='primaryfeatures-div1'>
          <FeaturesMobile/>
      </div>
      <Container  className="primaryfeatures2ndcontainer">
        <FeaturesDesktop/>
      </Container>
    </section>
  )
}