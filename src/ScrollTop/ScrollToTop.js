import React, { useState , useEffect } from 'react';
import { useWindowScroll } from "react-use";


const ScrollToTop = () => {

     const { y:pageYOffset} = useWindowScroll();
     const [visible, setvisible] = useState(false);

     useEffect(() => {
        if ( pageYOffset < 400) {
            setvisible(true);
        } else {
            setvisible(false);
        }
     }, [pageYOffset]);
     
     if (visible){
         return false;
    }
      
const ScrollToTop = () => window.scrollTo({ top:0 , behavior: "smooth"});

    return (
        <div className='scroll-to-top cursor-pointer text-center' onClick={ScrollToTop} >
            <i className='icon fa fa-chevron-up'></i>
        </div>
    );
}

export default ScrollToTop ;
