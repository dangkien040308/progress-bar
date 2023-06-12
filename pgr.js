var value = document.querySelector('.progress-value')
var progress = document.querySelector('.progress-circle')
var text = document.querySelector('.progress-text')
var inputText = document.querySelector('.input-text')
var button = document.querySelector('.input-btn')


button.addEventListener('click', handleProgress) 

function handleProgress ()  {
     var contentText = inputText.value
     text.innerText = contentText 
     var start = 0 ;
     var random = Math.floor(Math.random()*101)
      
     var progressID = setInterval( () => { 
         start++
         value.innerText = `${start}%`
         progress.style.background = `conic-gradient(#FF9966 ${start * 3.6}deg , #ededed 0deg)`;
         if (start == random) {
            clearInterval(progressID)
            inputText.value = ''
         }
    },25)


} 