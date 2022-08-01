import React, {useEffect, useRef} from 'react'
import styled from 'styled-components'
import gsap from 'gsap'

function HeroImg() {

       const title = useRef(null)

        useEffect(() =>{
          const el = title.current;
        //    gsap.fromTo(el.querySelectorAll('.title'), {y: 30, opacity: 0}, {y:0, duration: .5,opacity: 1, delay: .5})
          gsap.fromTo(el.querySelectorAll('.title'), 
            {clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)',}, 
            {clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'})

        }, [])

  return (
    <Container ref={title}>
      <Img className='title'>
     </Img>
    </Container>
  )
}

export default HeroImg

const Container = styled.div`
  
`

const Img = styled.div`
    position: relative;
    margin-top: 8rem;
    width: 100%;
    height: 90vh;
    background-image: url(./images/graybg.jpg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    /* clip-path: polygon(0 70%, 100% 70%, 100% 100%, 0 100%); */
    transition: 1.5s all ease-in-out;
`

