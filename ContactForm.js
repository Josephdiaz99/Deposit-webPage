const d=document

export default function contactForm(){
   const $form=d.querySelector('.contact-form'),
   $inputs=d.querySelectorAll('.contact-form [required]')
//aca cachamos los mensjes de error de los formularios
   $inputs.forEach(input=>{
       const $span=d.createElement('span');
       $span.id=input.name;
       $span.textContent=input.title;
       $span.classList.add('contact-form-error','none')
       input.insertAdjacentElement('afterend',$span)
   })
   //aca usamos un evento para que dinamicamente muestre el error
   d.addEventListener('keyup',(e)=>{
       if(e.target.matches('.contact-form [required]')){
           let $input=e.target,
           pattern=$input.pattern||$input.dataset.pattern;//aca vemos los dos, ya sea el text area o los otros inputs que si aceptan pattern
           // console.log($input)
           if(pattern && $input.value!==''){
               let regex=new RegExp(pattern);
               return !regex.exec($input.value)
               ? d.getElementById($input.name).classList.add('is-active')
               : d.getElementById($input.name).classList.remove('is-active')
           }

           if(!pattern){
               return $input.value===''
               ? d.getElementById($input.name).classList.add('is-active')
               : d.getElementById($input.name).classList.remove('is-active')
           }
       }
   })

   d.addEventListener('submit',(e)=>{
       e.preventDefault()
       const $loader=d.querySelector('.contact-form-loader'),
       $response=d.querySelector('.contact-form-response');

       $loader.classList.remove('none')

       fetch("https://formsubmit.co/ajax/801bc976b222a227577dd012e03127bc",{
           method:'POST',
           body:new FormData(e.target)
       })
       .then(res=>res.ok ?res.json():Promise.reject(res))
       .then(json=>{

       $loader.classList.add('none')
       $response.classList.remove('none')
       $form.reset();
       })
       .catch(err=>{
           console.log(err)
           let message=err.statusText||'Ocurrio un error al enviar intenta nuevamente'
           $response.innerHTML=`<p>Error ${err.status}: ${message}</p>`
       })
       .finally(()=>setTimeout(()=>{
           $response.classList.add('none');
           $response.innerHTML='';
       },3000));
      
   });
}

