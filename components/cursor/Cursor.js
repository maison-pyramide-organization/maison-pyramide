// function Cursor() {
//     var MousePosition = {
//         left: 200,
//         top: 67
//     }
//     const handleMouseMove = (ev) => { 
//         MousePosition = {left: ev.pageX, top: ev.pageY}; 
//         // console.log('wqwq',MousePosition);
//     }

//     if(typeof window !== "undefined"){
//         window.addEventListener("mousemove",(e) => handleMouseMove(e));
//     }
//     if(typeof document !== "undefined"){
//         let cursor = document.getElementById('cursor');
//         setTimeout(() => {
//             setInterval(() => {
//                 cursor.style.left = MousePosition.left+'px';
//                 cursor.style.top = MousePosition.top+'px';
//             }, 100);
//         }, 200);
//     }


   

//     return(
//         <div id="cursor" style={{'transform': 'scale(1) translate(-50%, -50%)', 'top': '200px', 'left': '200px','display':'flex','justifyContent':'center','alignItems':'center'}}>
//             <div style={{'width':'7px','height':'7px','backgroundColor':'black','borderRadius':'50%'}}></div>
//         </div>
//     )
// }
// export default Cursor;
