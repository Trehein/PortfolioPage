import React from "react"
import "./matrixStyle.css"
import skillData from "./skillData.json"
import { Box, Flex } from 'rebass'

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
        function unitTypeColor (unitType) {
            console.log(unitType);
            switch (unitType) {
                case 'Troops':
                    return ('#b2dfdb')
                case 'Defensive':
                    return ('#ff9e80')
                case 'Armor':
                    return ('#ea80fc')
                case 'Navy':
                    return ('#2196f3')
                case 'Aircraft':
                    return ('#ffc107')
                case 'Base':
                    return ('#bbdefb')
                default:
                    return ('bbdefb')
            }
        }

        return (
            <Flex flexWrap='wrap'>
                {
                    this.state.data.units.map((unitType, index) => (
                        <UnitTypeContainer data={unitType} key={index} bgColor={ unitTypeColor(unitType.category) } />
                    ))
                }
            </Flex>
        )
    }
}

function UnitTypeContainer(props) {
    let unitType = props.data;
    let bgColor = props.bgColor;
    // console.log(unitType);
    return (
        <Flex 
            width={[1]}
            p={1}
        >
        <Box
            p={1}
            fontSize={3}
            width={1/6}
            color='black'
            bg={bgColor}>
            {unitType.category}
        </Box>
        </Flex>
    )
}

// function TypeGrid(props) {
//     let data = props.data;
//     console.log(data);
//     return (
//         <div>
//             {/* <div>
//                 {data.units[0].types.map((unit, index) => (
//                     <div key={index}>
//                         {unit.name}
//                         <GridForSquares data={unit} />
//                     </div>
//                 ))}
//             </div> */}
//         </div>
//     )
// }

// function GridForSquares(props) {
//     const data = props.data;
//     console.log(data.skills[0].players.length)

//     return (
//         <Flex>
//             <GridSquare
//                 data={data}
//             />
//         </Flex>
//     )
// }

// function GridSquare(props) {
//     // console.log(props.data.name)
//     return (
//         <Box
//             p={1}
//             fontSize={3}
//             width={[1/6]}
//             color='black'
//             bg='orange'
//         >
//             {/* {props.data.name} */}
//         </Box>
//     )
// }

export default SkillMatrix;