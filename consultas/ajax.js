import { URLMUSIC, URLBEATS } from "./api.js";

const d=document


export default async function ajax(){
   const $videosPlace=d.querySelector('.videosyoutube')
   Promise.all([
      fetch(URLMUSIC),
      fetch(URLBEATS)
  ]).then(responses=>Promise.all(responses.map(res=>res.json())))
  .then(json=>{
  
   localStorage.setItem('music',JSON.stringify(json[0]))
   localStorage.setItem('beats',JSON.stringify(json[1]))
  })
  .catch(err=>{
      console.log(err)
      let message=err.statusText||'Ocurrio un error al conectarse con el API de youtube'
      $videosPlace.innerHTML=`${message}:${err}  `
  })
    


}
















