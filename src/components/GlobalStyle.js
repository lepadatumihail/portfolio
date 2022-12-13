import { createGlobalStyle } from "styled-components";
import "../index.css";

const GlobalStyle = createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing:border-box;

}
html{
    @media (max-width: 1750px){
        font-size:75%;
    }
}

body{
    background: #000000;
   //background: rgb(2,0,36);
    background: linear-gradient( #000000 0%, #00061a 60%,  #0a001a 100%); 
    //background: linear-gradient(180deg,#0c2a34,#24394a,#24394a,#614963,#985777,#b85772,#be4668,#db4771);
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
   
}

button{
    z-index: 6;
    position: relative;
    font-size:bold;
    font-size: 1rem;
    cursor:pointer;
    padding :1rem 2rem;
    border: 3px solid #23d997;
    border-radius:6px;
    background: transparent;
    color:white;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    transition: all 0.5s ease;
    &:hover{
        background-color: #23d997;
        color: black;
    }
}

h2{
    font-weight:lighter;
    font-size: 3rem;
}

h3{
    color: white;
}

h4{
    font-weight:bold;
    font-size: 1.5rem;
}

a{
    font-size: 1rem; 
}

span{
    font-weight: 600;
    font-size: 3.2rem;
    background: -webkit-linear-gradient(#0051ff, #00ff55);
    background-clip:text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

p{
    padding: 3rem 0rem;
    color: #d3d3d3;
    font-size: 1.4em;
    line-height: 150%;
}


`;

export default GlobalStyle;
