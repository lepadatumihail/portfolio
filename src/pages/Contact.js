import React from 'react';
import styled from 'styled-components';
import MailSVG from '../img/mail.svg';
import Linkin from '../img/linked.svg';
import Emailz from '../img/emailz.svg';
import Phonez from '../img/phonez.svg'
//animation
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation.js";



const Contact = () => {
    return (
        <ContactStyle variants={pageAnimation} initial="hidden" animate="show" exit="exit" >
            <Title>
                <Hide>
                  <Spanny variants={titleAnim} initial="hidden" animate="visible" >Get in Touch!</Spanny>
                  <motion.h2 style={{fontSize:"1.5rem"}} variants={titleAnim}>Feel free to contact me for any possible inquiries such as internships, job offers or simillar projects!</motion.h2>
                </Hide>
            </Title>


          

                <Hide  style={{marginTop:'2rem'}}>

                <motion.div variants={titleAnim}  id="logz" style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
                <motion.a style={{textDecoration:"none",color:"white",marginRight:"2rem"}} href={(`mailto:g.lepadatu@student.fontys.nl?subject=Internship&body=Hello Mihail,`)}><img style={{height:'7rem',margin:"2rem"}} src={Emailz} alt="mail" /><br></br><h2 style={{fontSize:"1.4rem"}}>g.lepadatu@student.fontys.nl</h2> </motion.a>
                <motion.a style={{textDecoration:"none",color:"white",marginRight:"2rem"}} href={(`tel:+31634334385`)}><img style={{height:'7rem',margin:"2rem"}} src={Phonez} alt="mail" /><br></br><h2 style={{fontSize:"1.4rem"}}>+31 6 343 343 85</h2> </motion.a>
                <motion.a style={{textDecoration:"none",color:"white",}} href={(`https://www.linkedin.com/in/mihail-lepadatu-ba65a91a2/`)}><img style={{height:'7rem',margin:"2rem"}} src={Linkin} alt="mail" /><br/><h2 style={{fontSize:"1.4rem"}}>LinkedIn</h2>  </motion.a>
           
                </motion.div>
            
                
            
            </Hide>

             

        </ContactStyle>
    );
};



const ContactStyle = styled(motion.div)`
    padding: 2rem 10rem;
    min-height: 88vh;
    color:white;
    text-align:center;
    img{
        position: relative;
        z-index: 6;
    }
    @media (max-width: 1300px){
        padding:1rem;
        font-size:1rem;
        h2{
            font-size: small;
        }
    }

    #logz{
        h2{
            position: relative;
            z-index:9;
            border-bottom: 1px solid aqua;
        }
        img:hover {
            border-radius: 50%;
            background-color: aqua;
        }
    }
`;

const Title = styled(motion.div)`
    margin-bottom: 8rem;
    color:white;
    @media (max-width: 1300px){
        margin-top: 5rem;
    }
`;

const Hide = styled(motion.div)`
overflow:hidden;
margin:0;
`;



const Social = styled(motion.div)`
    align-items: center;
    h2{
        margin:1rem 0 1rem 0;
        font-size: xx-large;
    }
`;
const Spanny = styled(motion.span)`
  font-weight: normal;
  margin: 0 0 0 3rem;
  font-size: 4.5em;
  //font-family: Halfomania,sans-serif;
  background: linear-gradient(330deg, #17ff70 0%, #99e052 25%, #52e0e0 50%, #9952e0 75%, #003adb 100%);
  //background: linear-gradient(200deg,#e5ff00,#8300ee);
  -webkit-background-clip: text;
  background-clip:text;
  -webkit-text-fill-color: transparent;
  line-height: 200px;

`;


export default Contact;