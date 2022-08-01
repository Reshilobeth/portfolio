import React, {useEffect, useRef} from 'react'
import styled from 'styled-components'
import gsap from 'gsap'

function Hero() {

     const title = useRef(null)

    useEffect(() =>{
        
     }, [])

  return (
    
    <Header ref={title}>
       <Titie>
        <h1 className='title-1 title'>full-stack web </h1>
        <h2 className='title-2 title'>developer & designer</h2>
       </Titie>

       <Para>
            <p>
                I’m Reshil Obeth. Specialised in Web development, 
                Web design, graphic and motion design. 
                My passion for design and coding puts me in a unique position.
            </p>
       </Para>

        <Learnmore>
            <p>LEARN MORE</p>
        </Learnmore>

    </Header>
    

  )
}

export default Hero

const Header = styled.div`
    /* height: 60vh; */
    padding-top: 3rem;

    @media (max-width: 700px) {
        padding-top: 7rem;
    }
`

const Titie = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin:2rem 0rem;
    text-align: left;  

    h1{
        color: #FF174E;
        font-family: skb;
        font-size: clamp(3rem, 10vw, 7rem);
        text-transform: capitalize;
        padding-top: 2rem;
        transition: 1s all ease-in-out;

        @media (max-width: 500px) {
            padding: 1rem 0;
        }
    }
   h2{
        color: #393939;
        font-family: skb;
        font-size: clamp(2.1rem, 8vw, 6rem);
        text-transform: capitalize;
        margin-top: -1rem;
        transition: 1s all ease-in-out;
    }
`

const Para = styled.div`
    p{
        font-size: clamp(1rem, 1.3vw, 2rem);
        font-family: skr;
        color: #393939;
        display: flex;
        justify-content: center;
        align-items: center;
        /* margin: 2.5rem 0  2rem  0; */
        margin: 2.5rem 20rem 2rem 20rem;
        text-align: center;

        @media (max-width:1100px) {
                font-size: clamp(1rem, 1.3vw, 2rem);
                font-family: skr;
                color: #393939;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 2.5rem 2rem 2rem 2rem;
                text-align: center;
            }
        @media (max-width:700px) {
                font-size: clamp(.85rem, 1.3vw, 2rem);

            }

    }
`

const Learnmore = styled.div`
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    opacity: 0.7;

    p{
        color: #FF174E;
        font-family: skb;
        letter-spacing: 4px;
        font-size: clamp(.8rem, .5vw, 1.4rem);
        transition: 0.3s all ease-in-out;
        padding: 0 1rem;
    }
`


