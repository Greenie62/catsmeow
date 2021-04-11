var pupils = document.querySelectorAll(".pupil")
var mouth = document.querySelector(".mouth")
var eyeLeft;
let counter = 0;

function lookRight(){
pupils.forEach(p=>{
    eyeLeft = parseInt(window.getComputedStyle(p).getPropertyValue('left'));
    console.log(counter)
})
    if(counter < 13){
        counter++
        eyeLeft+=3
        pupils[0].style.left= `${eyeLeft}px`
        pupils[1].style.left= `${eyeLeft}px`
        setTimeout(lookRight,100)

     }
    else{
        console.log('eyes done moving right')
        counter = 0;
        setTimeout(lookLeft,1000)
    }


}


lookRight()


function lookLeft(){
    pupils.forEach(p=>{
        eyeLeft = parseInt(window.getComputedStyle(p).getPropertyValue('left'));
        console.log(counter)
    })
        if(counter < 13){
            counter++
            eyeLeft-=4
            pupils[0].style.left= `${eyeLeft}px`
            pupils[1].style.left= `${eyeLeft}px`
            setTimeout(lookLeft,100)
    
         }
        else{
            // console.log('eyes done')
            counter = 0;
             setTimeout(lookCenter,1000)
        }
}


function lookCenter(){
    pupils.forEach(p=>{
        eyeLeft = parseInt(window.getComputedStyle(p).getPropertyValue('left'));
        eyeTop = parseInt(window.getComputedStyle(p).getPropertyValue('top'));
        console.log(counter)
    })
        if(counter < 12){
            counter++
            eyeLeft+=2
            eyeTop+=2
            pupils[0].style.left= `${eyeLeft}px`
            pupils[1].style.left= `${eyeLeft}px`

            pupils[0].style.top= `${eyeTop}px`
            pupils[1].style.top= `${eyeTop}px`
            setTimeout(lookCenter,100)
    
         }
        else{
            console.log('eyes done')
            document.querySelectorAll('.tint').forEach(t=>{
                t.classList.add('full-tint')
            })
            setTimeout(()=>{
            mouth.classList.remove('close')
setTimeout(()=>{
    mouth.classList.add('close')
},1500)
            document.querySelector('h1').style.opacity =1;
            },2000)
        
            // setTimeout(lookCenter,1000)
        }
}