import React, { useState } from 'react'
import './App.css'

const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
const operator = ['/', '*', '-', '+'];

let botons = document.getElementsByClassName("c-button");

const App = () => {
    const [num, setNum] = useState('0');
    const [last, setLast] = useState(undefined);

    const handleClick = (e) => {
        const { innerText } = e.target;
        for (let i = 0; i < botons.length; i++) {
            if (botons[i].childNodes[0].textContent === innerText) {
                botons[i].classList.toggle('c-button--active');
                setTimeout(() => {
                    botons[i].classList.toggle('c-button--active');
                }, 200);
                break;
            }
        }

        switch (innerText) {
            case 'C': {
                setNum('0');
                break;
            }

            case '=': {
                let n = operator.includes(num.charAt(num.length - 2)) ? num.substr(0, num.length - 2) : num;
                const result = eval(n);
                setNum(result)
                break;
            }

            case '.': {
                if (!last.includes('=')) {
                    const arraySplit = num.split(/[+\-*/]/);
                    const lastt = arraySplit.slice(-1)[0];
                    if (!lastt.includes('.')) {
                        setNum(num + '.')
                    }

                } else {
                    setNum('0.')
                }
                break;
            }

            default: {
                let res = undefined;
                if (operator.includes(innerText)) {
                    if (operator.includes(last) && innerText !== '-') {
                        const lastNumberIdx = num.split('').reverse()
                            .findIndex(char => char !== ' ' && numbers.includes(+char));
                        res = num.slice(0, num.length - lastNumberIdx) + ` ${innerText} `;
                    } else {
                        res = `${num} ${innerText} `;
                    }
                } else {
                    res = (num === '0') ? innerText : (num + innerText);
                }

                setNum(res);
            }
        }
        setLast(innerText)

    }


    return (
        <div className='calculator l-grid'>
            
            <div className="l-grid__item">
                <button className="c-button u-text--red" onClick={handleClick} id='clear'>
                    <span className="c-button__label">C</span>
                </button>
            </div>
            <div className=" l-grid__display" id="display">
                {num}
            </div>
            <div className="l-grid__item">
                <button className="c-button" onClick={handleClick} id='seven'>
                    <span className="c-button__label">7</span>
                </button>
            </div>
            <div className="l-grid__item">
                <button className="c-button" onClick={handleClick} id='eight'>
                    <span className="c-button__label">8</span>
                </button>
            </div>
            <div className="l-grid__item">
                <button className="c-button" onClick={handleClick} id='nine'>
                    <span className="c-button__label">9</span>
                </button>
            </div>
            <div className="l-grid__item">
                <button className="c-button u-text--teal" onClick={handleClick} id='divide'>
                    <span className="c-button__label">/</span>
                </button>
            </div>
            <div className="l-grid__item">
                <button className="c-button" onClick={handleClick} id='four'>
                    <span className="c-button__label">4</span>
                </button>
            </div>
            <div className="l-grid__item">
                <button className="c-button" onClick={handleClick} id='five'>
                    <span className="c-button__label">5</span>
                </button>
            </div>
            <div className="l-grid__item">
                <button className="c-button" onClick={handleClick} id='six'>
                    <span className="c-button__label">6</span>
                </button>
            </div>
            <div className="l-grid__item">
                <button className="c-button u-text--teal" onClick={handleClick} id='multiply'>
                    <span className="c-button__label">*</span>
                </button>
            </div>
            <div className="l-grid__item">
                <button className="c-button" onClick={handleClick} id='one'>
                    <span className="c-button__label">1</span>
                </button>
            </div>
            <div className="l-grid__item">
                <button className="c-button" onClick={handleClick} id='two'>
                    <span className="c-button__label">2</span>
                </button>
            </div>
            <div className="l-grid__item">
                <button className="c-button" onClick={handleClick} id='three'>
                    <span className="c-button__label">3</span>
                </button>
            </div>
            <div className="l-grid__item">
                <button className="c-button u-text--teal" onClick={handleClick} id='subtract'>
                    <span className="c-button__label">-</span>
                </button>
            </div>
            <div className="l-grid__item">
                <button className="c-button" onClick={handleClick} id='zero'>
                    <span className="c-button__label">0</span>
                </button>
            </div>
            <div className="l-grid__item">
                <button className="c-button" onClick={handleClick} id='decimal'>
                    <span className="c-button__label">.</span>
                </button>
            </div>
            <div className="l-grid__item">
                <button className="c-button u-text--teal" onClick={handleClick} id='equals'>
                    <span className="c-button__label">=</span>
                </button>
            </div>
            <div className="l-grid__item">
                <button className="c-button u-text--teal" onClick={handleClick} id='add'>
                    <span className="c-button__label">+</span>
                </button>
            </div>


        </div>

    )

}

export default App
