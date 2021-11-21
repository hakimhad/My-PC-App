const contents = document.querySelectorAll('.content');
const tabs = document.querySelectorAll('.tab');
let index = 0




tabs.forEach(tab => {
    tab.addEventListener('click', ()=>{
        if(tab.classList.contains('active')){
            return;
        }else{
            tab.classList.add('active')
        }        
        index = tab.getAttribute('data-anim')
        // console.log(index);
        for (i=0; i<tabs.length; i++){
            if (tabs[i].getAttribute('data-anim') != index){
                tabs[i].classList.remove('active');
            }
        }
        for (j=0; j<contents.length; j++){
            if (contents[j].getAttribute('data-anim') != index){
                contents[j].classList.add('hide-content');
            }else {
                contents[j].classList.remove('hide-content');
            }
        }
    }
)
})



