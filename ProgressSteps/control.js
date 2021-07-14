const circles = document.querySelectorAll('.circle');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const progress = document.getElementById('progress');

let currentActive = 1;

next.addEventListener("click", () => {
    if (currentActive < circles.length) {
        currentActive += 1;
    } 
    update()
});

prev.addEventListener("click", () => {
    if (currentActive > 1){
        currentActive -= 1;
    } 
    update();
});

function update() {
    for (let i = 0; i < circles.length; i++) {
        if (i < currentActive) {
            circles[i].classList.add('active')
        }
        else{
            circles[i].classList.remove('active')
        }
    }

    progress.style.width = ((currentActive - 1)/(circles.length-1)) * 100 +'%'
    
    if (currentActive === 1){
        prev.disabled = true
    } else if (currentActive === circles.length){
        next.disabled = true
    } else {
        next.disabled = false
        prev.disabled = false
    }
    
}