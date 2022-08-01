import React from 'react'
import styled from 'styled-components'

const Skills = () => {
  return (
    <Container>

        <Title>
            <h2>My Skills</h2>
        </Title>
            
        <Content>
            
            <Card>
                <div className='card'>
                    <div className='img'>
                        <img src='./icons/frontend.png' alt='icon'/>
                    </div>

                    <div className='heading'>
                        <h2>Front End Development</h2>
                        <p>I concentrate primarily on responsive and dynamic animation layouts, utilising performance enhancement.</p>
                    </div>

                </div>
            </Card>
            <Card>
                <div className='card'>

                    <div className='img'>
                        <img src='./icons/backend.png' alt='icon'/>
                    </div>

                    <div className='heading'>
                        <h2>Back end development</h2>
                        <p>I love algorithms. The backend is RESTful and secure, with authorization and database validation.</p>
                    </div>

                </div>
            </Card>
            <Card>
                <div>
                    <div className='img'>
                        <img src='./icons/design.png' alt='icon'/>
                    </div>

                    <div className='heading'>
                        <h2>Graphic and motion design</h2>
                        <p>I always strive to create memorable experiences that are aesthetically appealing, functional and distinctive.</p>
                    </div>
                    
                </div>
            </Card>


        </Content>

    </Container>
  )
}

export default Skills

const Container = styled.div`
    padding: 6rem 3rem;
    margin: 4rem 0;
    display: flex;
    width: 100%;
    justify-content: space-between;
    /* background-color: ; */

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
        margin: 0rem 0 3rem 0;
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
    filter: drop-shadow(0px 0px 10px rgba(56, 56, 56, 0.1));
    display: flex;
    

    div{
        position: relative;
        overflow: hidden;
    }

        .img{
            transition: 0.3s  all ease-in-out;
            border-radius: 3px;
            img{
                width: 100%
            }
        }

        .heading{
            background-color: white;
            position: absolute;
            left: 0;
            bottom: 0;
            right: 0;
            transform: translateY(50%);
            transition: 0.3s  all ease-in-out;

            h2{
                font-size: 1.3rem;
                padding: 1.5rem  1rem;
            }

            p{
                padding: 0 1.5rem  1.5rem 1rem;
            }

            @media (max-width: 800px) {
                transform: translateY(50%);
            }
        }

        &:hover .img{
            transform: translateY(-9%);
        }

        &:hover .heading{
            transform: translateY(0%);
            box-shadow: 0px 0px 50px rgba(56, 56, 56, 0.181);
        }

        @media (max-width: 800px) {
         &:hover .heading{
            transform: translateY(50%);
            box-shadow: 0px 0px 50px rgba(56, 56, 56, 0.181);
        }   

        &:hover .img{
            transform: scale(1);
        }
        width: 320px;
        }


`