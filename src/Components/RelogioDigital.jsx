import { useEffect, useState } from "react"; 

function RelogioDigital (){
    
    const[hora,setHora] = useState(new Date().toLocaleTimeString()); 
       
    useEffect(()=>{
        const interval = setInterval(() =>{
            setHora(new Date().toLocaletimeString()) 
        }, 1000)            
            return () => clearInterval(interval);},[]);
            
            return (
                <>
                <h2>Relogio Digital</h2>
                <p>{hora}</p>
                </>
            );
    } 
    
    export default RelogioDigital

