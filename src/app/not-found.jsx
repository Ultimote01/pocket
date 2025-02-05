import { Button }    from "../components/Button";
import { CirclesBackground } from "@/components/CirclesBackground";
import { Container } from "@/components/Container";
import { Layout } from "@/components/Layout";
import "@/styles/notfound.css"

export default function NotFound() {
  return (
    <Layout>
      <Container className='notfoundContainer'> 
        <CirclesBackground className='notfoundCirclebackground' />
        <p style={{fontSize:'0.875rem',lineHeight:'1.5rem',fontWeight:'600',color:'rgb(23 23 23 / 1 )'}}>404</p>
        <h1 style={{marginTop:'0.5rem', fontSize:'2rem',lineHeight:'3rem',fontWeight:'600',letterSpacing:'-0.025em',color:'rgb(23 23 23 / 1 )'}}>
          Page not found
        </h1>
        <p style={{marginTop:'0.5rem',fontSize:'1.125rem',lineHeight:'2rem',color:'rgb(82 82 82 / 1)'}}>
          Sorry, we couldn't find the page you're looking for.  
        </p>
        <Button href="/" variant='outline' className='notfoundbutton' >
          Go back home
        </Button>
      </Container>
    </Layout>
  );
}