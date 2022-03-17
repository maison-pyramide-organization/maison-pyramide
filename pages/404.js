import Image from 'next/image'
import { useEffect, useState } from 'react';

import Layout from "../components/layout/Layout";
import img404 from '../public/imgs/404.png';
import homeStyles from './Home.module.scss';


export default function Custom404() {
    const [x , setX] = useState('calc(40% - 100px)');
    const [y , setY] = useState('-5%');
    const [isStart , setIsStart] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsStart(true);
        }, 3000);
    },[])
    const handleMove = (e) =>{
        if(!isStart) return false;
        let x = e.clientX - 200;
        let y = e.clientY - 200;
        setX(x);
        setY(y)
    }
    return (
        <Layout>
            <div className={`text-center ${homeStyles.error}`} onMouseMove={handleMove}>
                <div className={`${homeStyles.container} w-100 h-100`}>
                <div className={homeStyles.triangle} style={{top:y,left:x, transition:'all 500ms ease'}}>
                </div>

                {/* <Image src={img404}></Image> */}
                <h1>404</h1>
                <h1 className={homeStyles.duplicate404}>404</h1>
                </div>
                <br/>
                <p>Seems like this page doesn&apos;t exist</p>
                <button>TAKE ME HOME</button>
               
            </div>
        </Layout>
    )
  }