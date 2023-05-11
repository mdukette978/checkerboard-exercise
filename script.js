//const container = document.querySelector('#container');

const container = document.createElement('div');
container.className = 'container'; 
document.body.appendChild(container);

container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.width = '800px';
container.style.height = '800px';



function makeCheckerSquare (val) {
    const div = document.createElement('div');
   // div.className = 'container';
    
        div.style.width = '12.5%';
        div.style.height = '12.5%';
        //div.style.backgroundColor = 'red';
        //div.style.borderColor = 'black';
        //div.style.border = '1px solid';


    if (val % 2 === 0) {
        div.style.backgroundColor = random_hex_color_code();
    } else {
        div.style.backgroundColor = random_hex_color_code();
    }




    container.appendChild(div);
}

/*for (let i = 0; i < 64; i++) {
    makeCheckerSquare(i)
}*/


    for(let j = 0; j < 8; j++) {
        for (let k = 0; k < 8; k++){
        makeCheckerSquare(j + k);
        }
    }
 
    function random_hex_color_code() {
        let n = (Math.random() * 16777215 * 1000000).toString(16);
        return '#' + n.slice(0, 6);
      };