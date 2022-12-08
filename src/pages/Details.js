import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import {useHistory} from "react-router-dom";
import {MovieState} from "../movieState";
//animation
import {motion} from "framer-motion";
import {pageAnimation} from "../animation.js";

const Details = () =>{

    const history = useHistory();
    const url = history.location.pathname;
    const[movies,setMovies] = useState(MovieState);
    const [movie,setMovie] = useState(null);

    //Use effect
    useEffect(() => {
        const currentMovie = movies.filter((stateMovie) =>  stateMovie.url === url );
        setMovie(currentMovie[0]);
        console.log(movie);
    },[movies,url]);

    return (
        <>
        {movie && (
             <Detail variants={pageAnimation} initial="hidden" animate="show" exit="exit">
                <HeadLine>
                    <h2>{movie.title}</h2>
                    <a href={movie.extra1}> <p>{movie.extra}</p> </a>
                    <img src={movie.mainImg} alt="movie"/>
                    
                </HeadLine>

            <Awards>
                {movie.awards.map((award) => (
                <Award title={award.title} description={award.description} key={award.title} />
                ))}
            </Awards>
            <ImageDisplay>
              <img src={movie.secondaryImg} alt="vruh"/>
            </ImageDisplay>
        </Detail>
        )}
        </>
       
    );

};

const Detail = styled(motion.div)`
    color: white;
    
`;
const HeadLine = styled.div`
    text-align:center;
    position:relative;
    z-index:10;
    padding-top: 10vh;
    p {
        cursor:pointer;
    }
    img{
        padding: 0rem 5rem;
        width:100%; 
        height: 76vh;
        object-fit: contain;

    }
    @media (max-width: 1300px){
        padding:0rem;
        height:50vh;
        img{
            object-fit: contain;
            padding:0rem;
            height:35vh;
        }
    }

`;

const Awards = styled.div`
    min-height: 50vh;
    display: flex;
    margin: 5rem 10rem;
    align-items: center;
    justify-content: space-evenly;
    @media (max-width: 1300px){
        display:block;
        margin: 2rem 2rem;
    }
`;

const AwardStyle = styled.div`
    padding: 4rem;
    h3{
        font-size: 2rem;
    }
    .line{
        width:90%;
        background: #23d997;
        height:0.3rem;
        margin: 1rem 0rem;
    }
    p{
        padding: 2rem 0rem;
    }
`;

const ImageDisplay = styled.div`
    min-height: 50vh;
    img{
        padding: 2rem 15rem;
        width: 100%;
        height:90vh;
        object-fit: contain;
        
    }
    @media (max-width: 1300px){
        padding:0rem;
        min-height:5vh;
        img{
            object-fit: contain;
            padding:0rem;
        }
    }
`;
//Award Component
const Award = ({title, description}) => {
    return (
        <AwardStyle>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </AwardStyle>
    )
};


export default Details;