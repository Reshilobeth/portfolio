import React, {useEffect, useRef} from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

function Projects() {

    const title = useRef(null)

    useEffect(() => {
        const el = title.current;
        gsap. fromTo(el, {}, {
            scrollTrigger:{
                trigger:'.projects',
                // markers:true,
                start:'top 90%',
                end:'bottom 70%',
                pin:'.pro-title',
                pinSpacing:false,
            }
        })
    },[])

  return (
    <Container className='work' id='work' ref={title}>

        <Title >
            <h1 className='pro-title'>Recent <b>Works</b></h1>
        </Title>

        <Section className='projects'>

            <Image>
                <img src='./projects/1.png' alt='pro'/>
            </Image>
            <Image>
                <img src='./projects/2.png' alt='pro'/>
            </Image>
            <Image>
                <img src='./projects/3.png' alt='pro'/>
            </Image>
            <Image>
                <img src='./projects/4.png' alt='pro'/>
            </Image>

        </Section>

    </Container>
  )
}

export default Projects

const Container = styled.div`
    margin: 8rem 0;
    
    @media (max-width: 800px) {
     margin: 3rem 0 ;
    }

`

const Title = styled.div`
        height: 80vh;
        /* width: 100%; */
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: skb;


        h1{
            z-index: -1;
            font-size: clamp(1.5rem, 5vw, 5rem);
            
            b{
                color: #FF174E;
            }
        }

        @media (max-width:600px) {
            height: 70vh;
        }
        @media (max-width:500px) {
            height: 50vh;
        }

`

const Section = styled.div`

    display: flex;
    flex-direction: column;
    gap: 50px;

`

const Image = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin: 2rem 0;

    @media (max-width:500px) {
        margin: 0;
    }

    img{
        width: 70%;

         @media (max-width:800px) {
            width: 85%;
        }
    }

   
`