

function generate(){
    let used ='';
    if(document.getElementById('lowerCase').checked){
        used+='abcdefghijklmnopqrstuvwxyz'
    }
    if(document.getElementById('upperCase').checked){
        used+='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }
    if(document.getElementById('number').checked){
        used+='0123456789'
    }
    if(document.getElementById('special').checked){
        used+='!@#$%^&*()_+=-[]{}<>.?~:'
    }

    const length = document.querySelector('input[type="range"]').value;

    if(length <1 || used.length === 0 ){
        return;
    }

    let password = '';
    for(let i=0;i<length;i++){
        const position = Math.floor(Math.random()*used.length);
        password+= used[position]
    }

    document.querySelector('input[type=text]').value= password;
}

[...document.querySelectorAll('input[type="checkbox"], button.generate')].forEach(e =>{
    e.addEventListener('click',generate)
})

document.querySelector('input[type="range"]').addEventListener('input', () => {
   document.querySelector('div.range span').innerHTML= document.querySelector('input[type="range"]').value
    generate();
})

document.querySelector('div.password button').addEventListener('click', () =>{
    const password = document.querySelector('input[type=text]').value;
    navigator.clipboard.writeText(password).then(() =>{
        document.querySelector('div.password button').innerHTML ='copied';
        setTimeout( () =>{
            document.querySelector('div.password button').innerHTML ='copy';
        },1000);
    })
})

generate();
