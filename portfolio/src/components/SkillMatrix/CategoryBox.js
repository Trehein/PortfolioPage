import React from 'react'
import { Box } from 'rebass'

function CategoryBox(props) {
    let unitCategory = props.unitType;
    let bgColor = props.bgColor;
    return (
        <Box
            p={1}
            fontSize={3}
            width={1/5}
            color='black'
            bg={bgColor}>
            {unitCategory}
        </Box>
    )
}

export default CategoryBox;