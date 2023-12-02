/*
DEBOUMCING=>>   
    In JavaScript, debounce is a powerful technique used to optimize event handling by delaying the 
    execution of a function until after a specified period of inactivity. It helps prevent excessive
     function calls triggered by rapid events, such as keystrokes or scroll movements.
    Debouncing in JavaScript is a practice used to improve browser performance.

example=>>
            let input = document.querySelector("input")
        let c = 0
        function getData(){
            console.log(input.value+" "+input.value.length)
        }

        function debounce(callback,delay){
        let timer;
        return function(...args){
            if(timer) clearTimeout();
            else setTimeout(()=>{
        callback()
            },delay)
        }
    
        }

        let fun = debounce(getData , 1000);


*/

        