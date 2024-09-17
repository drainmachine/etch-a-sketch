const createGrid = function() {
    const container = document.querySelector('.container');

    let count = 0;
    while (count < 256) {
        const div = document.createElement('div');
        div.style.backgroundColor = 'rgb(209, 223, 246)';
        div.style.height = '50px';
        div.style.width = '50px';



        div.addEventListener("mouseover", function() {
            div.style.backgroundColor = 'rgb(0, 223, 246)';
        });


        
        container.appendChild(div);
        count++;
    }
}

document.addEventListener('DOMContentLoaded', createGrid);

div.addEventListener("mouseover", console.log("I'm over a div"))
  



