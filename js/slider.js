(function(){

    const sliders = [...document.querySelectorAll('.pcorto__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentPcorto = document.querySelector('.pcorto__body--show').dataset.id;
        value =Number(currentPcorto);
        value+= add;

        sliders[Number(currentPcorto)-1].classList.remove('pcorto__body--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length : 1;
        }

        sliders[value-1].classList.add('pcorto__body--show');
    }


})();