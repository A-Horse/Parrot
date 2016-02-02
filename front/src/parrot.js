'use strict';

//let $ = require('jquery');
//import $ from 'jquery';



const operaButtons = [
    {
        name: 'Message',
        clicked: (event) => {
            
        }
    },
    {
        name: 'Talk',
        clicked: (event) => {
            console.log('I will talk.');
        }
    }
];


export default class Parrot {

    constructor (name = 'Parrot') {
        this.name = name;
    }


    summon (body) {
        let container = document.createElement('div');

        container.classList.add('parrot-container');

        let parrotCage = document.createElement('div');

        parrotCage.classList.add('parrot-cage');
        
        container.appendChild(parrotCage);

        operaButtons.map((operaBtn) => {
            let btn = document.createElement('div');
            btn.classList.add('p-opera-btn');
            btn.innerHTML = operaBtn.name;
            btn.setAttribute('id', 'p-opera-btn-' + operaBtn.name);

            
            
            btn.addEventListener('click', (event) => {
                operaBtn.clicked(event);
            }, false);

            container.appendChild(btn);
        });
        
        
        body.appendChild(container);
        
    }
}

