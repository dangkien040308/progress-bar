var value = document.querySelector('.progress-value')
var progress = document.querySelector('.progress-circle')
var text = document.querySelector('.progress-text')
var inputText = document.querySelector('.input-text')
var inputPercent = document.querySelector('.input-percent')
var button = document.querySelector('.input-btn')


button.addEventListener('click', handleProgress) 

function handleProgress ()  {
     var percent = inputPercent.value 
     var contentText = inputText.value
     text.innerText = contentText 
     var start = 0 ;
     console.log(progress)
     var progressID = setInterval( () => {
         start++
         value.innerText = `${start}%`
         progress.style.background = `conic-gradient(#880bea ${start * 3.6}deg , #ededed 0deg)`;
         if (start == percent) {
            clearInterval(progressID)
            inputPercent.value = ''
            inputText.value = ''
         }
    },10)
} 