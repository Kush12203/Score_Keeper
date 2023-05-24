const p1button= document.querySelector('#p1Button')
const p2button= document.querySelector('#p2Button')
const p1score= document.querySelector('#p1Score')
const p2score= document.querySelector('#p2Score') 
const resetbutton= document.querySelector('#reset')
const winningScoreSelect = document.querySelector('#playto');

let Count1=0
let Count2=0
let winningscore=3
let gameover=false

p1button.addEventListener('click',function(){
    if(!gameover){
        Count1+=1
        if(Count1===winningscore){
            gameover=true
            p1score.classList.add('has-text-success')
            p2score.classList.add('has-text-danger')
            p1button.disabled=true;
            p2button.disabled=true;
        }
        p1score.textContent=Count1
    }
})


p2button.addEventListener('click',function(){
    if(!gameover){
        Count2+=1
        if(Count2===winningscore){
            gameover=true
            p2score.classList.add('has-text-success')
            p1score.classList.add('has-text-danger')
            p1button.disabled=true;
            p2button.disabled=true;
        }
        p2score.textContent=Count2
    }
})

winningScoreSelect.addEventListener('change', function () {
    winningscore = parseInt (this.value);
    reset();
})

resetbutton.addEventListener('click',reset)
  

function reset(){
        gameover=false
        Count1=Count2=0
        p1score.textContent = 0
        p2score.textContent = 0
        p2score.classList.remove('has-text-success','has-text-danger')
        p1score.classList.remove('has-text-success','has-text-danger')
        p1button.disabled=false;
            p2button.disabled=false;
}