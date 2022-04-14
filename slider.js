const rangeInput = document.querySelectorAll('.range__input input');
const progress = document.querySelector('.range-content .slider-range');
let priceMin = document.querySelector('.score-min');
let priceMax = document.querySelector('.score-max');
let priceGap = 1000;
console.log(rangeInput);

rangeInput.forEach(input => {
    input.addEventListener('input', event =>{
        let minVal = parseInt(rangeInput[0].value);
        let maxVal = parseInt(rangeInput[1].value);
        let percent = (minVal / rangeInput[0].max) * 100 + '%';

        if(maxVal - minVal < priceGap){
            if(event.target.className === "range-min"){
                rangeInput[0].value = maxVal - priceGap;
            }else{
                rangeInput[1].value = minVal + priceGap;
            }
            
        }else {
            priceMin.innerHTML = minVal;
            priceMax.innerHTML = maxVal;
            
            progress.style.left = percent
            progress.style.right =100 - (maxVal / rangeInput[1].max) * 100 + '%';
            console.log(minVal, maxVal);
        }

        
        
    })
})