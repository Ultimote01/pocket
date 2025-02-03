import { AppStoreLink } from "./AppStoreLink";
import { CircleBackground } from "./CircleBackground";
import { Container } from "./Container";
import "@/styles/calltoaction.css"

export function CallToAction(){
    return(
        <section
        id="get-free-shares-today"
        className="calltoactionSection">
            <div className="calltoactiondiv">
                <CircleBackground color='#fff' className='calltoactionCircleBackground'/>
            </div>
            <Container className='calltoactionContainer'>
                <div className="calltoactiondiv1">
                    <h2 className="calltoactionh2">
                        Get your first tips today 
                    </h2>
                    <p style={{marginTop:'1rem',fontSize:'1.125rem',lineHeight:'2rem',color:'rgb(212 212 212 / 1)'}}>
                        It takes 30 seconds to sign up. Download the app and create an
                        account today and we’ll send you a tip guaranteed to double your
                        first investment.
                    </p>
                    <div style={{marginTop:'2rem',display:'flex',justifyContent:'center'}}>
                        <AppStoreLink color="white"/>
                    </div>
                </div>
            </Container>
        </section>
    )
}