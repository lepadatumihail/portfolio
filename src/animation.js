export const pageAnimation = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.2,
            when: "beforeChildren",
            staggerChildren: 0.2,
        },
    },
    exit:{
        opacity: 0,
        transition:{
            duration: 0.3,
        },
    },
};


export const titleAnim = {
    hidden: {y:200,x:100},
    show:{
        y: 0,
        x: 0,
        transition:{
            duration:0.5, ease: "easeOut"
        },
    },
};

export const Fade ={
    hidden: {
        opacity: 0,
    },
    show: {
        opacity:1,
        transition: {ease: "easeOut", duration:1},
    },
};

export const imgRot = {
    hidden: {scale:1.5,opacity:0},
    show: {scale: 1,
           opacity: 1, 
           transition:{duration: 0.82,
                       ease:"easeOut"}
           }
};

export const LineAnim = {
    hidden: {width: "0%"},
    show: {
        width: "100%",
        transition: {duration: 1},
    },
};

export const slider = {
    hidden: {x: "-130%", skew: "45deg"},
    show: {
        x: "100%",
        skew: "90deg",
        transition: {ease: "easeOut", duration: 1.05},
    },
};

export const sliderContainer = {
    hidden: {opacity:1},
    show: {
        opacity: 1,
        transition: {staggerChildren:0.2, ease: "easeOut"},
    }
};

export const ScrollReveal ={
    hidden: {opacity: 0, scale: 1.2, transition: {duration: 0.5}},
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5
        }
    }
};

export const Sentence = {
    hidden: {opacity:0},
    visible:{
        opacity:1,
        transition:{
            delay:0.5,
            staggerChildren:0.08,
        },
    },
}

export const Letter ={
    hidden:{opacity:0,y:50 },
    visible: {
        opacity:1, 
        y:0,
    },
}