import { useState ,useCallback , useEffect} from 'react';


export default function HandleFooterScroll({handleFooterStyle}) {
    const [y, setY] = useState(window.scrollY);
    const handleNavigation = useCallback(
        e => {
          const window = e.currentTarget;
          if ((y > window.scrollY) && (window.scrollY < (document.body.scrollHeight )) && (window.scrollY > (document.body.scrollHeight - 800 ))) {
            handleFooterStyle(y,'up',document.body.scrollHeight);
            // console.log('up', window.scrollY, document.body.scrollHeight , document.body.scrollHeight - 800 );
        } else if (y < window.scrollY && (window.scrollY < (document.body.scrollHeight)) && (window.scrollY > (document.body.scrollHeight - 800 )) ) {
            handleFooterStyle(y,'down',document.body.scrollHeight);
            // console.log('test down',window.scrollY);
          }
          setY(window.scrollY);
        }, [y]
      );

    // if(window !== "undefined"){
      useEffect(() => {
          setY(window.scrollY);
          window.addEventListener("scroll", handleNavigation);
        
          return () => {
            window.removeEventListener("scroll", handleNavigation);
          };
        }, [handleNavigation]);
    // }
    return(
        <>
        </>
    )
}