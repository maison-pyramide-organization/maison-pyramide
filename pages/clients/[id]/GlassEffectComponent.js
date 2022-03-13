import { useState ,useCallback , useEffect} from 'react';


export default function GlassEffectComponent({handleScroll}) {
    const [y, setY] = useState(0);
    const handleNavigation = useCallback(
        e => {
          const window = e.currentTarget;
          if (y > window.scrollY) {
            handleScroll(y,'up');
          } else if (y < window.scrollY) {
            handleScroll(y,'down');
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