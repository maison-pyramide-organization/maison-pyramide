
export default function IsMobileComponent({handleMobile}) {
    if(window !== "undefined"){
            if(window.innerWidth > 799){
                handleMobile(false);
            }
            else{
                handleMobile(true);
            }       
    }
    
    return(
        <>
        </>
    )
}
