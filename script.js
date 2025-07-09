let string ="";
let buttons=document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click',(e)=>{

    if(e.target.innerHTML=='AC'){
      string = "";
      document.querySelector('input').value="";
    }
    else if(e.target.innerHTML=='='){
      string = eval(string);
      document.querySelector('input').value=string;
    }
    else{
      string=string+e.target.textContent;
      document.querySelector('input').value=string;
    }
  })
})
