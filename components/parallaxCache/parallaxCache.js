import {useRouter } from 'next/router';
import { useEffect ,useLayoutEffect} from 'react';

import { useParallaxController } from 'react-scroll-parallax';


const ParallaxCache = () => {
    const parallaxController = useParallaxController();
    const router = useRouter();

    useLayoutEffect(() => {
        const handler = () => parallaxController.update();
        window.addEventListener('load', handler);

        const handleRouteChange = () => {
            parallaxController.update();

		};
		router.events.on('routeChangeComplete', handleRouteChange);
		return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
            window.removeEventListener('load', handler);
		};

    }, [parallaxController,router.events]);

    return null;


    return null;
};

export default ParallaxCache;