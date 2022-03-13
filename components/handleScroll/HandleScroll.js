import { useState ,useCallback , useEffect} from 'react';


export default function HandleScroll({handleNavStyle}) {
    const [y, setY] = useState(window.scrollY);
    const handleNavigation = useCallback(
        e => {
          const window = e.currentTarget;
          if (y > window.scrollY) {
            handleNavStyle(y,'up');
            
          } else if (y < window.scrollY) {
            handleNavStyle(y,'down');
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