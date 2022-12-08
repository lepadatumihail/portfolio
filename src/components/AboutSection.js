import { motion } from 'framer-motion';
import React from 'react';
import Home1 from '../img/logo1.png';
import {titleAnim, Fade, imgRot} from "../animation.js";
import Wave from '../components/Wave';
import pdf from '../img/work/cv.pdf';

//Styled Components
import {About, Description, Image, Hide} from "../styles";



const AboutSection = () => {
    return(
        <About>
            <Description>
                    <motion.div >
                            <Hide>
                                <motion.h2 variants={titleAnim} > 
                                <span>Welcome</span> to my story,   </motion.h2>
                            </Hide>
                            <Hide>
                                <motion.h2 variants={titleAnim} >my work and my <span>virtual</span> portfolio.</motion.h2>
                            </Hide>

                            <Hide>
                                <motion.h2 variants={titleAnim}></motion.h2>
                            </Hide>
                    </motion.div>

                    <motion.p variants={Fade}>I'm Mihail Lepadatu, a software engineering student based in Eindhoven who loves creating
                    interactive apps and websites (and much more).   </motion.p>
                  
                   <a href={pdf} style={{zIndex:3}}> <motion.button variants={Fade}>Open Resume / CV</motion.button></a>
                   
            
            </Description>

                <Image>
                    <motion.img id='logoM' variants={imgRot} 
                    style={{height:'28vh',}}
                    src={Home1}
                    alt="portrait"/>
               </Image>

               <Wave/>
           
        </About>
    );
};


export default AboutSection;