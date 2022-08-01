import React from 'react'
import styled from 'styled-components'
import {HashLink as Link} from 'react-router-hash-link'

const Footer = () => {
  return (
    <Container>

      <Button>
        <div>
          <h1>
            Let's start a <br />
            <span>Project together</span>
          </h1>

          <div>
            <button>reshilobeth5510@gmail.com</button>
            <button>+91 97903 92441</button>
          </div>
        </div>

      </Button>

      <Top>

        <div>
          <a href='https://www.linkedin.com/in/reshil-obeth-75a42221a/'><p>Linkedin</p></a>
          <a href='https://www.behance.net/reshilobeth'><p>Behance</p></a>
          <a href='https://github.com/Reshilobeth'><p>Github</p></a>
          <a href='https://github.com/Reshilobeth'><p>Instagram</p></a>
        </div>
        <span>
            <Link spy={true} smooth={true} offset={500} duration={500} to= '#home'><img src='./images/logo-white.png' alt='logo' /></Link>
        </span>

      </Top>

    </Container>
  )
}

export default Footer

const Container = styled.div`
  width: 100%;
  overflow: hidden;
  padding: 9rem 4rem;
  padding-bottom: 0;
  background-color: #151515;

  @media (max-width:500px) {
    padding: 9rem 2rem ;
    padding-bottom: 0;
  }

`

const Button = styled.div`
  div{
    h1{
      color: #F3F3F3;
      font-family: skr;
      font-size: clamp(3rem, 6vw, 8rem);
      span{
        color: #FF174E;
        font-size: clamp(2.5rem, 6vw, 8rem);
      }
    }

    div{
      button{
        border: none;
        padding: 1.4rem 2rem;
        border-radius: 50px;
        border: 1px solid #F3F3F3;
        background-color: transparent;
        color: #F3F3F3;
        margin: 2rem 2rem 0 0;
        transition: 0.3s all ease-in-out;

        &:hover{
          background-color: #FF174E;
          border: 1px solid #FF174E;
        }
        @media (max-width: 500px) {
         width: 100%;
        }
      }
    }
  }
`

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  div{
    display: flex;
    margin-top: 10rem;
    a{

      padding-right: 2rem;
      margin-bottom: 3rem;
      color: #F3F3F3;
      font-family: skr;

      &:hover{
        color:#FF174E;
      }
    }

    @media (max-width: 650px) {
    }
  }

  span{
    img{
        width: 100px;

        @media (max-width: 420px) {
            width: 85px;
        }
    }

    @media (max-width: 650px) {
     display:none;
    }
  }
`