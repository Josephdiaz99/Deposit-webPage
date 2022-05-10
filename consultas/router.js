import ajax from "./ajax.js";
import { URLMUSIC,URLBEATS } from "./api.js";

const d=document

export default async function router(){

const $musicChannel=d.querySelector('.music'),
$beatsChannel=d.querySelector('.beats'),
$soonBtn=d.querySelector('.soon');
const jsonMusic= await JSON.parse(localStorage.getItem('music'))
const jsonBeats= await JSON.parse(localStorage.getItem('beats'))
        
            /*activado de canal musica por defecto */
            
                  function activeVideo1(){
                    $musicChannel.classList.add('active')
                    let $template='',
                    $videosPlace=d.querySelector('.videosyt')
                    let musicData=jsonMusic.items;
         
                  let musicRender= musicData.forEach(el => {
                     $template+=` 
                     
                     <div class="swiper-slide videoyt">
                     <figure>
                     <h3 class="video__title" >${el.snippet.title} </h3>
                     <iframe class="video__yt" width="650" height="350" src="https://www.youtube.com/embed/${el.id.videoId} " title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                 </figure>
                     </div>
                    
                    
                     `
                    });
                   
                    $videosPlace.innerHTML=$template
                   }
                   activeVideo1()
              /*Activado el click a el canal musica*/ 
                   d.addEventListener('click',e=>{
                       if(e.target===$musicChannel){      
                        $musicChannel.classList.add('active')            
                        activeVideo1()
                       }
                   })
         
           
        
    
    d.addEventListener('click',e=>{
       
        $beatsChannel.classList.remove('active')
      
        if(e.target===$beatsChannel){
            $beatsChannel.classList.add('active')    
           let $template='',
           $videosPlace=d.querySelector('.videosyt'),
            beatsData=jsonBeats.items

          let beatsRender=beatsData.forEach(el => {
                $template+=`

              
                <div class="swiper-slide videoyt">
                <figure>
                <h3 class="video__title" >${el.snippet.title} </h3>
                <iframe class="video__yt" width="650" height="350" src="https://www.youtube.com/embed/${el.id.videoId} " title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </figure>
                </div>
             
                
                `
               });
    
               $videosPlace.innerHTML=$template

               



        }
    })
    d.addEventListener('click',e=>{
    
        $soonBtn.classList.remove('active')
        if(e.target===$soonBtn){
            $soonBtn.classList.add('active')
            alert('tocaste proximamente')
        }
    })



}