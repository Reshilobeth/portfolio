import React from 'react'
import styled from 'styled-components'

const Skills = () => {
  return (
    <Container>

        <Title>
            <h2>I can help you with</h2>
        </Title>
            
        <Content>
            
            <Card>
                <div className='card'>
                    <h3>Design</h3>

                    <hr />

                    <p>With a proven track record in web design. 
                        I create digital designs that are both robust 
                        and user-friendly. I focus on the most crucial 
                        components of design and keep it simple and 
                        straightforward.
                    </p>

                </div>
            </Card>
            <Card>
                <div className='card'>

                    <h3>Development</h3>

                    <hr />

                    <p>I build scalable frontend and backend systems 
                        from the ground up that mix in with the design. 
                        My major interests are precision animations, 
                        transitions, and interaction.
                    </p>

                </div>
            </Card>
            <Card>
                <div>
                    <h3>Full package</h3>

                    <hr />

                    <p>What sets me apart is that I can build a website 
                        from start to finish. My keen sense of design 
                        and programming abilities enable me to produce 
                        high-quality products.
                    </p>
                    
                </div>
            </Card>


        </Content>

    </Container>
  )
}

export default Skills

const Container = styled.div`
    padding: 5rem 3rem;
    display: flex;
    width: 100%;
    justify-content: space-between;

    @media (max-width:1200px){
        flex-direction: column;
    }

`
const Title = styled.div`
    h2{
        font-size: clamp(2rem, 5vw, 2.3rem);
        color: hsla(0, 0%, 22%, 0.8);
        font-family: skb;
        display: flex;
        margin: 0rem 0 2rem 0;
    }
`
const Content = styled.div`

    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-gap: 50px;

    @media (max-width:850px){
        width: 100%;
        justify-content: center;
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width:700px){
        width: 100%;
        justify-content: center;
        grid-template-columns: repeat(1, 1fr);
    }
`

const Card = styled.div`    
    width: 350px;

    div{
         h3{
            color: #FF174E;
            font-family: skb;
            padding-bottom: 1rem;
            font-size: clamp(1.9rem, 2.5vw, 2rem);
        }

        p{
            font-size: clamp(1rem, 1vw, 1.5rem);
            color: #393939;
            font-family: skr;
            line-height: 22px;
        }

        hr{
            margin-bottom: 1rem;
            border: none;
            height: .5px;
            background-color: #393939 ;
        }
    }

    @media (max-width: 800px) {
        width: 320px;
        }


`