import React from "react"
// import "../styles.css"
import skillData from "./skillData.json"

class SkillMatrix extends React.Component {
    render() {
        return (
            <div>
                <div className="webBox">
                    <TypeGrid />
                </div>
            </div>
        )
    }
}

class TypeGrid extends React.Component {
    renderSquare(i) {
        return (
            <Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    render() {
        const data = skillData;
        console.log(data.units[0].types)

        return (
            <div>
                <div>
                    {data.units[0].types.map((unit, index) => (
                        <div key={index}>
                            {unit.name}
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    )
}

export default SkillMatrix;