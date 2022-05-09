import ajax from "./consultas/ajax.js";
import { API_KEY } from "./consultas/api.js";
import router from "./consultas/router.js";
import showResponsive from "./showResponsive.js";



const d=document,
w=window;
/*Aca dependiendo del size se ejecutaran los videos o solo daremos los links si estan en width de telefono */
export default function responsiveVideos(){
   let breakPoint=w.matchMedia('(max-width:700px)')


    const responsive=(e)=>{
        if(e.matches){
            showResponsive()
        }else{
            router()
        }
      
    }

    breakPoint.addEventListener('change',responsive)
    responsive(breakPoint);


 
            
         
         
   

}



















