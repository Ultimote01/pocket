'use client'

import {useId , useRef , useState} from "react"
import clsx from 'clsx'
import {motion , useInView, useMotionValue } from "framer-motion"


import { AppScreen } from "@/components/AppScreen"
import "@/styles/appdemo.css"

const prices = [
    997.56, 944.34, 972.25, 832.4, 888.76, 834.8, 805.56, 767.38, 861.21, 669.6,
    694.39, 721.32, 694.03, 610.1, 502.2, 549.56, 611.03, 583.4, 610.14, 660.6,
    752.11, 721.19, 638.89, 661.7, 694.51, 580.3, 638.0, 613.3, 651.64, 560.51,
    611.45, 670.68, 752.56,
  ]
  const maxPrice = Math.max(...prices)
  const minPrice = Math.min(...prices)

  function Chart({
    className,
    activePointIndex,
    onChangeActivePointIndex,
    width: totalWidth,
    height: totalHeight,
    paddingX = 0,
    paddingY = 0,
    gridLines = 6,
    ...props
  }) {
    let width = totalWidth - paddingX * 2
    let height = totalHeight - paddingY * 2
  
    let id = useId()
    let svgRef = useRef(null)
    let pathRef = useRef(null)
    let isInView = useInView(svgRef, { amount: 0.5, once: true })
    let pathWidth = useMotionValue(0)
    let [interactionEnabled, setInteractionEnabled] = useState(false)
  
    let path = ''
    let points = []
  
    for (let index = 0; index < prices.length; index++) {
      let x = paddingX + (index / (prices.length - 1)) * width
      let y = paddingY + (1 - (prices[index] - minPrice) / (maxPrice - minPrice)) * height
  
      points.push({ x, y })
      path += `${index === 0 ? 'M' : 'L'} ${x.toFixed(4)} ${y.toFixed(4)}`
    }
  
    return (
      <svg
        ref={svgRef}
        viewBox={`0 0 ${totalWidth} ${totalHeight}`}
        style={{overflow:'visible'}}
        {...(interactionEnabled
          ? {
              onPointerLeave: () => onChangeActivePointIndex(null),
              onPointerMove: (event) => {
                let x = event.nativeEvent.offsetX
                let closestPointIndex = null
                let closestDistance = Infinity
                for (
                  let pointIndex = 0;
                  pointIndex < points.length;
                  pointIndex++
                ) {
                  let point = points[pointIndex]
                  let distance = Math.abs(point.x - x)
                  if (distance < closestDistance) {
                    closestDistance = distance
                    closestPointIndex = pointIndex
                  } else {
                    break
                  }
                }
                onChangeActivePointIndex(closestPointIndex)
              },
            }
          : {})}
        {...props}
      >
        <defs>
          <clipPath id={`${id}-clip`}>
            <path d={`${path} V ${height + paddingY} H ${paddingX} Z`} />
          </clipPath>
          <linearGradient id={`${id}-gradient`} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#13B5C8" />
            <stop offset="100%" stopColor="#13B5C8" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[...Array(gridLines - 1).keys()].map((index) => (
          <line
            key={index}
            stroke="#a3a3a3"
            opacity="0.1"
            x1="0"
            y1={(totalHeight / gridLines) * (index + 1)}
            x2={totalWidth}
            y2={(totalHeight / gridLines) * (index + 1)}
          />
        ))}
        <motion.rect
          y={paddingY}
          width={pathWidth}
          height={height}
          fill={`url(#${id}-gradient)`}
          clipPath={`url(#${id}-clip)`}
          opacity="0.5"
        />
        <motion.path
          ref={pathRef}
          d={path}
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          transition={{ duration: 1 }}
          {...(isInView ? { stroke: '#06b6d4', animate: { pathLength: 1 } } : {})}
          onUpdate={({ pathLength }) => {
            if (pathRef.current && typeof pathLength === 'number') {
              pathWidth.set(
                pathRef.current.getPointAtLength(
                  pathLength * pathRef.current.getTotalLength(),
                ).x,
              )
            }
          }}
          onAnimationComplete={() => setInteractionEnabled(true)}
        />
        {activePointIndex !== null && (
          <>
            <line
              x1="0"
              y1={points[activePointIndex].y}
              x2={totalWidth}
              y2={points[activePointIndex].y}
              stroke="#06b6d4"
              strokeDasharray="1 3"
            />
            <circle
              r="4"
              cx={points[activePointIndex].x}
              cy={points[activePointIndex].y}
              fill="#fff"
              strokeWidth="2"
              stroke="#06b6d4"
            />
          </>
        )}
      </svg>
    )
}


export function AppDemo() {
    let [ activePointIndex, setActivePointIndex ] = useState(null);
    let activePriceIndex = activePointIndex ?? prices.length - 1;
    let activeValue = prices[activePriceIndex]
    let previousValue = prices[activePriceIndex - 1]
    let percentageChange= activePriceIndex === 0 ? null:
    ((activeValue - previousValue) / previousValue) * 100 


    return(
        <AppScreen>
            <AppScreen.Body>
            <div style={{padding:'1rem'}}>
                <div style={{display: 'flex', gap:'0.5rem'}}>
                    <div style={{fontSize:'0.75rem',lineHeight:'1.5rem',color:'rgb(107 112 128 / 1)'}}>
                    Ultimote Serline Tech company
                    </div>
                    <div style={{fontSize:'0.875rem',lineHeight:'1.5rem',color:'rgb(17 24 39 / 1)'}}>$CSS</div>
                    <svg viewBox="0 0 24 24" style={{marginLeft:'auto', height:'1.5rem',width:'1.5rem'}} fill="none">
                        <path 
                          d="M5 12a7 7 0 1 1 14 0 7 7 0 0 1-14 0ZM12 9v6M15 12H9"
                          stroke="#171717"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                    </svg>
                </div>
                <div style={{marginTop:"0.75rem", borderTopWidth:'1px',borderColor:'rgb(229 231 235 / 1)',paddingTop:'1.25rem'}}>
                    <div style={{display:'flex', alignItems:'baseline',gap:'0.5rem'}}>
                           <div style={{fontSize:'1.5rem',lineHeight:'2rem', fontVariantNumeric:'tabular-nums',letterSpacing:'-0.025em',color:'rgb(17 24 39 / 1)'}}>
                                {activeValue.toFixed(2)}
                           </div>
                           <div style={{fontSize:'0.875rem',lineHeight:'1.25rem',color:'rgb(17 24 39 / 1)'}}>USD</div>
                            {percentageChange && (
                                <div 
                                 style={{
                                    marginLeft:'auto',
                                    fontSize:'0.875rem',
                                    lineHeight:'1.25rem',
                                    fontVariantNumeric:'tabular-nums',
                                    letterSpacing:'-0.025em',
                                    color:percentageChange >= 0? "rgb(6 182 212 / 1)" :"rgb(107 114 128 / 1)"
                                 }}> 
                                 {`${
                                    percentageChange >= 0 ?  "+" :''
                                 }${percentageChange.toFixed(2)}%`}
                                </div>
                            )
                            }
                    </div>
                    <div style={{marginTop:'1.5rem', display:'flex', gap:'1rem', color:'rgb(115 115 115 / 1)',fontSize:'0.75rem',lineHeight:'1rem'}}>
                        <div>1D</div>
                        <div>5D</div>
                        <div style={{fontWeight:"600",color:'rgb(8 145 178 / 1)'}}>1M</div>
                        <div>6M</div>
                        <div>1Y</div>
                        <div>5Y</div>
                    </div>
                    <div style={{marginTop:'0.75rem',borderRadius:'0.5rem',backgroundColor:'rgb(249 250 251 / 1)',
                    boxShadow:'rgb(255, 255, 255) 0px 0px 0px 0px inset, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0) 0px 0px 0px 0px'}}>
                    <Chart
                    width={286}
                    height={208}
                    paddingX={16}
                    paddingY={32}
                    activePointIndex={activePointIndex}
                    onChangeActivePointIndex={setActivePointIndex}/>
                    </div>
                    <div style={{marginTop:'1rem', borderRadius:'0.5rem',backgroundColor:'rgb(6 182 212 / 1)', padding:'0.5rem 1rem',textAlign:'center',fontSize:'0.875rem',lineHeight:'1.5rem',fontWeight:'600',color:'rgb(255 255 255 / 1)'}}>
                        Trade 
                    </div>
                    <div className="appdemo-div">
                        <div style={{display:'flex',justifyContent:'space-between',padding:'0.2rem 0px'}}>
                            <div style={{color:'rgb(115 115 115 / 1)'}}>Open</div>
                            <div style={{fontWeight:"500",color:'rgb(17 24 39 / 1)'}}>6,387.55</div>
                        </div>
                        <div style={{display:'flex',justifyContent:'space-between',padding:'0.2rem 0px'}}>
                            <div style={{color:'rgb(115 115 115 / 1)'}}>Closed</div>
                            <div style={{fontWeight:"500",color:'rgb(17 24 39 / 1)'}}>6,487.09</div>
                        </div>
                        <div style={{display:'flex',justifyContent:'space-between',padding:'0.2rem 0px'}}>
                            <div style={{color:'rgb(115 115 115 / 1)'}}>Low</div>
                            <div style={{fontWeight:"500",color:'rgb(17 24 39 / 1)'}}>6,322.01</div>
                        </div>
                    </div>
                </div>
            </div>
            </AppScreen.Body>
        </AppScreen>
    )
}