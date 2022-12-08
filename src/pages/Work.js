import React from 'react';
import {Link} from 'react-router-dom';
import {UseScroll} from '../components/UseScroll';
//Images
import ulta from '../img/work/ulta.png'
import simul from '../img/work/joke.jpg'
import skilly from '../img/work/code.png'
//Style
import styled from "styled-components";
//animation
import {motion} from "framer-motion";
import {pageAnimation,Fade, LineAnim, ScrollReveal,imgRot} from "../animation.js";




const Work = () =>
{
    const [element,controls] = UseScroll();
    const [element2,controls2] = UseScroll();
    return(
        
        <Worky variants={pageAnimation} initial="hidden" animate="show" exit="exit" >
            
            {/* <motion.div variants = {sliderContainer}>
            <Frame1 variants={slider}></Frame1>
            <Frame2 variants={slider}></Frame2>
            <Frame3 variants={slider}></Frame3>
            <Frame4 variants={slider}></Frame4>
            </motion.div> */}


            <Movie> 
                <motion.h2  variants={Fade}>Freelance</motion.h2>
            <motion.div variants={LineAnim} className="line"></motion.div>               
                <Link to="/work/the-athlete">
                    <Hide>
                        <motion.img variants={imgRot} src={ulta} alt="booy"/>
                    </Hide>
                </Link>
            </Movie>

            <Movie variants={ScrollReveal} ref={element} animate={controls} initial="hidden"> 
                <motion.h2>C# Traffic Simulation</motion.h2>
            <motion.div className="line" variants={LineAnim}></motion.div>
               
                
                <Link to="/work/the-racer">
                    <motion.img src={simul} alt="race"/>
                </Link>
            </Movie>

            <Movie variants={ScrollReveal} ref={element2} animate={controls2} initial="hidden">
                <motion.h2>Laravel Web Project</motion.h2>
                <motion.div variants={LineAnim} className="line"></motion.div>
                <Link to="/work/good-times">
                    <motion.img src={skilly} alt="goodz"/>
                </Link>
            </Movie>

            
          
        </Worky>
    );
};

const Worky = styled(motion.div)`
    min-height: 100vh;
    position: relative;
    z-index:8;
    overflow: hidden;
    color:white;
    padding: 5rem 15rem;
    h2{
        padding: 1rem 0rem;
    }
    @media (max-width: 1300px){
        padding:0rem;
        img{
            object-fit: contain;
            padding:0rem;
        }
    }
`;

const Movie = styled(motion.div)`
    padding-bottom: 9rem;
    position: relative;
    .line{
        height:0.3rem;
        background: linear-gradient(100deg, #000000 0%, #99e052 25%, #52e0e0 50%, #9952e0 75%, #080303 100%);
        margin-bottom: 3rem;
    }
    img{
        width:100%;
        object-fit:cover;
        padding:1rem 5rem;
        height:75vh;
    }
    @media (max-width: 1300px){
        img{
            height:25vh;
        }
    }
`;

const Hide = styled.div`
    overflow:hidden;
`;

//------------Frame Animation--------------------
const Frame1 = styled(motion.div)`
    position:fixed;
    left: 0%;
    top: 8%;
    width:100% ;
    height: 100vh;
    background: linear-gradient(100deg, #818181 0%, #99e052 25%, #52e0e0 50%, #9952e0 75%, #080303 100%);
    z-index: 2;
`;

const Frame2 = styled(Frame1)`
    background: linear-gradient(100deg, #000000 0%, #3d7901 25%, #52e0e0 50%, #9952e0 75%, #300042 100%);
`;

const Frame3 = styled(Frame1)`
    background: #9952e0 ;
`;

const Frame4 = styled(Frame1)`
    background:#001845;
`


export default Work;    
