const d=document;

export default function soundNav(){

const $whoAreUs=d.querySelector('.quienes'),
    $artists=d.querySelector('.artistas'),
    $servives=d.querySelector('.servicios'),
    $proyects=d.querySelector('.proyectos'),
    $Alarm=d.createElement('audio')
   
    
    d.addEventListener('click',e=>{
        if(e.target===$whoAreUs){
         let sonido= $Alarm.src="/assets/y2mate.com - final 5 segundos audio intro.mp3"
           $Alarm.play()

        }
        if(e.target===$artists){
            let sonido= $Alarm.src="/assets/y2mate.com - final 5 segundos audio intro.mp3"
           $Alarm.play()
        }
        if(e.target===$servives){
            const sonido=$Alarm.src="/assets/y2mate.com - final 5 segundos audio intro.mp3"
            $Alarm.play()
        }
        if(e.target===$proyects){
            const sonido=$Alarm.src="/assets/y2mate.com - final 5 segundos audio intro.mp3"
            $Alarm.play()
        }
    })






}