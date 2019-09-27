import React, { useEffect, useRef } from "react"
import * as d3 from "d3"
import { fruitBowl } from './fruitBowl'

const D3EnterExitAppendDemo = props => {
    const ref = useRef(null);

    useEffect(() => {
        const svg = d3.select(ref.current)

        const control = () => {

            // creates a new object with a property of type and assigns a unique id
            const makeFruit = type => ({ 
                type,
                id: Math.random() 
            });
            // d3.range creates an empty array with 5 indexes. .map runs a function that runs makeFruit for each index
            let fruits = d3.range(5)
                .map(() => makeFruit('apple'));

            let selectedFruit = null;

            const setSelectedElement = id => {
                selectedFruit = id;
                console.log(id);
                render();
            }

            // splits out a module, fruitBowl
            const render = () => {
                fruitBowl(svg, {
                    fruits,
                    height: props.height,
                    setSelectedElement,
                    selectedFruit
                })
            }

            render();

            setTimeout(() => {
                //eat an apple
                fruits.pop();
                render()
            }, 1000);

            setTimeout(() => {
                //replace an apple with a lemon
                fruits[2].type = 'lemon';
                render()
            }, 2000);

            setTimeout(() => {
                //filter out the second index of the fruits array
                fruits = fruits.filter((d, i) => i !== 1);
                render()
            }, 3000);
        }
        control();
    }, []);

    return (
        <div>
            <svg width={props.width} height={props.height}>
                <g ref={ref} />
            </svg>
        </div>
    )
}

export default D3EnterExitAppendDemo;