import React, {useEffect, useRef} from 'react'
import styled from 'styled-components'
import {HashLink as Link} from 'react-router-hash-link'

function Navbar() {

    const toggle = () =>{
        let btn = document.querySelector('.menu')
        btn.classList.toggle('toggle-menu')

        let line = document.querySelector('.line')
        line.classList.toggle('line-one')

        let lineTwo = document.querySelector('.line-2')
        lineTwo.classList.toggle('line-two')

    }

  return (

    <MainNav id='home'>

        <Phone className='visible'>

            <div className='menu'>
                    <ul>
                    
                    <p>NAVIGATION</p>

                    <li><a href='#'>Home</a></li> 
                    <li><a href='#'>Works</a></li> 
                    <li><a href='#'>Resume</a></li> 
                    <li><a href='#'>Work</a></li> 
                    <li><a href='#'><button>Hire me</button></a></li> 
                </ul>

                <div>
                    <a href='https://www.linkedin.com/in/reshil-obeth-75a42221a/'><p>Linkedin</p></a>
                    <a href='https://www.behance.net/reshilobeth'><p>Behance</p></a>
                    <a href='https://github.com/Reshilobeth'><p>Github</p></a>
                </div>
            </div>

        </Phone>

        <Nav>
        
            <Logo>
                <Link spy={true} smooth={true} offset={500} duration={500} to= '#home'><img src='./images/logo-01.png' alt='logo' /></Link>
            </Logo>

            <Menu className='links'>
                <Link className='link' to= '#work' spy={true} smooth={true} offset={500} duration={500}>Works</Link>
                <Link className='link' to= '#work'>Resume</Link>
                <Link className='link' to= '#work'>About me</Link>
            </Menu>

            <Button>
                Hire Me
            </Button>

            <Line onClick={toggle}>
                    <button className='line '></button>
                    <button className='line line-2'></button>
            </Line>

        </Nav>

    </MainNav>

    
  )
}

export default Navbar

const MainNav = styled.div`

`

const Phone = styled.div`
    .menu{
        position: fixed;
        z-index: 1;
        width: 100%;
        height: 100vh;
        background-color: #FF174E;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 3rem 3rem 0rem 3rem;


        @media (min-width:800px){
            display: none;
        }

        transform: translateX(100%);
        transition: 0.5s all ease-in-out;

        ul{
            

            P{
                color: white;
                opacity: .5;
                border-bottom: 1px solid white;
                padding: .5rem 0;
            }

            li{
                padding: .5rem 0;
                a{
                    color: white;

                    button{
                        margin-top: 3rem;
                        padding: .5rem 1rem;
                        border: none;
                        background-color: #FFFFFF;
                        color: #FF174E;
                        border-radius: 8px;
                        font-family: skr;
                        font-size: .5em;
                        text-align: center;
                        text-transform: uppercase;
                    }
                }
                font-size: clamp(2rem, 2vw, 3rem);
            }
        }

        div{
            display: flex;
            color: white;
            border-top: 1px solid #ffffff80;
            a{
                    
                color: white;
                &:hover{
                    text-decoration: underline;
                    
                }

                p{
                    padding-top: 1rem;
                    padding-right: 2rem;
                    font-size: 1.2rem;
                }
            }
        }
    }

    .toggle-menu{
        transform: translateX(0%);
        transition: 0.5s all ease-in-out;
    }
`

const Line = styled.div`


        .line{
            border: none;
            display: flex;
            width: 30px;
            height: 2px;
            background-color:#393939;
            margin: .4rem;
            transform: translatey(0) rotatez(0);
            transition: 0.3s all ease-in-out;
        }

        .line-one{
            transform: translatey(8px) rotatez(45deg);
        }

        .line-two{
            transform: rotate(-45deg);
        }

        .line:focus{
            outline: none;
        }

        

        @media (min-width:800px){
            display: none;
        }
`

const Nav = styled.div`
    width: 100%;
    display: flex;
    justify-content:space-between;
    font-family: skr;
    align-items: center;
    padding:.5rem 2rem;
    z-index: 2;
    position: fixed;
    background-color: hsla(0, 0%, 100%, 0.3);
    backdrop-filter: blur(15px);
    border-bottom: rgba(255, 255, 255, 0.3) 1px solid;    
`


const Logo =  styled.div`
    img{
        width: 100px;

        @media (max-width: 420px) {
            width: 85px;
        }
    }
`

const Menu = styled.ul`
    display: flex;
    
        .link{
            margin: 0 1rem;
            color: #393939;
            
            &::after{
                content: '';
                background-color: #FF174E;
                display: block;
                height: 1.5px;
                width: 0;
                margin-top: 2px;
                transform-origin: left;
                transition: 0.3s all ease-in-out;
            }

            &:hover::after{
                width: 100%;
            }

            a{
                color: #393939;
                text-decoration: none;
            }

            @media (max-width:800px){
            
                    display: none;
                
            }
        }

`

const Button = styled.button`
    padding: .8rem 2rem;
    border: none;
    background-color: #FF174E;
    color: #FFFFFF;
    border-radius: 8px;
    font-family: skr;
    font-size: 1.1em;
    transition: 0.3s all  ease-in-out;
    cursor: pointer;

    @media (max-width:800px){
            display: none;
    }

    &:hover{
    /* color: #FF174E;
    background-color: #393939; */
    box-shadow: 0px 0px 30px #ff174d71;
}

`