const button = document.querySelectorAll('.box');

const body = document.querySelector("body");

button.forEach(function(box)
{
    box.addEventListener('click', function(color){
        if(color.target.id === 'box1')
        {
            body.style.backgroundColor = '#948979';
            body.style.color = 'black';
        }
        else if(color.target.id === 'box2')
        {
            body.style.backgroundColor = '#FFC1DA';
            body.style.color = 'black';
        }
        else if(color.target.id === 'box3')
        {
            body.style.backgroundColor = '#85193C';
            body.style.color = 'black';
        }
        else if(color.target.id === 'box4')
        {
            body.style.backgroundColor = '#ECEFCA';
            body.style.color = 'black'
        }
        else
        {
            body.style.backgroundColor = 'black';
            body.style.color = 'white';
        }
    })
})