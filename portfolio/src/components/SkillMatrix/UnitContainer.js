import React from 'react'
import CategoryBox from './CategoryBox'
import { Flex } from 'rebass'
import TypeContainer from './TypeContainer'

function unitTypeColor (unitType) {
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
            return ('#bbdefb')
    }
}

function UnitContainer(props) {
    let unitType = props.data;
    return (
        <Flex
            flexWrap='wrap' 
            width={1}
            p={1}
        >
            <CategoryBox unitType={unitType.category} bgColor={ unitTypeColor(unitType.category) }/>
            {
                unitType.types.map((data, index) => (
                    <TypeContainer data={data} key={index} />
                ))
            }
        </Flex>
    )
}

export default UnitContainer;