import React from "react"
import "./matrixStyle.css"
import skillData from "./skillData.json"
import { Flex } from 'rebass'
import UnitContainer from './UnitContainer'

class SkillMatrix extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: skillData,
            boxBackgrounds: ['#bbdefb', '#2196f3', '#0d47a1',
                '#b2dfdb', '#009688', '#004d40',
                '#ffecb3', '#ffc107', '#ff8f00',
                '#ff9e80', '#ff6e40', '#ff3d00',
                '#ea80fc', '#e040fb', '#aa00ff',
                '#e0e0e0', '#757575', '#212121',
                '#64dd17', '#558b2f', '#33691e',
                '#8c9eff', '#536dfe', '#304ffe',
            ],
        }
    }
    render() {
        return (
            <Flex flexWrap='wrap'>
                {
                    this.state.data.units.map((unitType, index) => (
                        <UnitContainer data={unitType} key={index} />
                    ))
                }
            </Flex>
        )
    }
}

export default SkillMatrix;