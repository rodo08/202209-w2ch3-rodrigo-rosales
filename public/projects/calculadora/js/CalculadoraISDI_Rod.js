let reset = document.getElementById('reset');
let percentage = document.getElementById('percentage');
let erase = document.getElementById('erase');
let division = document.getElementById('division');
let seven = document.getElementById('seven');
let eigth = document.getElementById('eigth');
let nine = document.getElementById('nine');
let multiplication = document.getElementById('multiplication');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let plus = document.getElementById('plus');
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let minus = document.getElementById('minus');
let dobleZero = document.getElementById('doble-zero');
let zero = document.getElementById('zero');
let dot = document.getElementById('dot');
let equal = document.getElementById('equal');
let screen = document.getElementById('screen');

const calculatorIsdi = () => {
    one.addEventListener('click', ()=> {
        screen.innerText = screen.innerText + '1';
    });
    
    two.addEventListener('click', ()=> {
        screen.innerText = screen.innerText + '2';
    });
    
    three.addEventListener('click', ()=> {
        screen.innerText = screen.innerText + '3';
    });
    
    four.addEventListener('click', ()=> {
        screen.innerText = screen.innerText + '4';
    });
    
    five.addEventListener('click', ()=> {
        screen.innerText = screen.innerText + '5';
    });
    
    six.addEventListener('click', ()=> {
        screen.innerText = screen.innerText + '6';
    });
    
    seven.addEventListener('click', ()=> {
        screen.innerText = screen.innerText + '7';
    });
    
    eigth.addEventListener('click', ()=> {
        screen.innerText = screen.innerText + '8';
    });
    
    nine.addEventListener('click', ()=> {
        screen.innerText = screen.innerText + '9';
    });
    
    zero.addEventListener('click', ()=> {
        screen.innerText = screen.innerText + '0';
    });
    
    dobleZero.addEventListener('click', ()=> {
        screen.innerText = screen.innerText + '00';
    });
    
    dot.addEventListener('click', ()=> {
        screen.innerText = screen.innerText + '.';
    });
    
    plus.addEventListener('click', ()=> {
        screen.innerText = screen.innerText + '+';
    });
    
    minus.addEventListener('click', ()=> {
        screen.innerText = screen.innerText + '-';
    });
    
    division.addEventListener('click', ()=> {
        screen.innerText = screen.innerText + '/';
    });
    
    multiplication.addEventListener('click', ()=> {
        screen.innerText = screen.innerText + '*';
    });
    
    percentage.addEventListener('click', ()=> {
        screen.innerText = screen.innerText + '*0.01*';    
    });
    
    reset.addEventListener('click', ()=> {
        screen.innerText = '';
    });
    
    erase.addEventListener('click', ()=> {
        screen.innerText = screen.innerText.slice(0, -1);
    });
    
    equal.addEventListener('click', () => {
        try {
            screen.innerText = eval(screen.innerText);
       // console.log(screen.innerText);
        } catch {
            screen.innerText = 'ERROR';
        }
        
    })
}

calculatorIsdi();