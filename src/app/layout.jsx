import {Inter} from "next/font/google"
import clsx from "clsx"


import "@/styles/preflight.css"
import  "@/styles/layout.css"

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
})

export const metadata={
  title:{
    template :'%s - Pocket',
    default :'Pocket - Invest at the perfect time.'
  },
  description:"By leveraging insights from our network of industry insiders, you’ll know exactly when to buy to maximize profit, and exactly when to sell to avoid painful losses."
}



export default function Layout({ children }) {
  return (
    <html className={clsx("layout-html",inter.variable)}> 
     <body> 
      {children}
    </body>
    </html>
  );
}