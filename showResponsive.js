

const d=document

export default function showResponsive(){

const $musicChannel=d.querySelector('.music'),
$beatsChannel=d.querySelector('.beats'),
$soonBtn=d.querySelector('.soon');

        
            /*activado de canal musica por defecto */
                $musicChannel.classList.add('active')
                  function activeLinks(){
                    const jsonResponse=JSON.parse(localStorage.getItem('music'))
                    let $template='',
                    $videosPlace=d.querySelector('.links-youtube')
                    let musicData=jsonResponse.items;
         
                  let musicRender= musicData.forEach(el => {
                     $template+=` 
                     
                     <div>
                     <figure>
                      <a target="_blank" href="https://www.youtube.com/watch?v=${el.id.videoId} ">${el.snippet.title} 
                     </div>
                    
                    
                     `
                    });
                   
                    $videosPlace.innerHTML=$template
                   }

                   activeLinks()
              /*Activado el click a el canal musica*/ 
                   d.addEventListener('click',e=>{
                  
                       if(e.target===$musicChannel){
                        e.preventDefault() 
                        activeLinks()
                       }
                   })
         
           
        
    
    d.addEventListener('click',e=>{
       
        $beatsChannel.classList.remove('active')
      
        if(e.target===$beatsChannel){
            e.preventDefault()
            $musicChannel.classList.remove('active')
           
            $beatsChannel.classList.add('active')
           const jsonResponse=JSON.parse(localStorage.getItem('beats'))
           let $template='',
           $videosPlace=d.querySelector('.links-youtube'),
            beatsData=jsonResponse.items

          beatsData.forEach(el => {
                $template+=`

                <div>
                <figure>
                 <a target="_blank" href="https://www.youtube.com/watch?v=${el.id.videoId}">${el.snippet.title} 
                </div>
             
                
                `
               });
    
               $videosPlace.innerHTML=$template

               



        }
    })
    d.addEventListener('click',e=>{
    
        $soonBtn.classList.remove('active')
        if(e.target===$soonBtn){
            e.preventDefault()
            $soonBtn.classList.add('active')
            alert('tocaste proximamente')
        }
    })



}