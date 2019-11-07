import React from 'react'
import { Box } from 'rebass'

function skillSelectColor (index) {
    console.log(index)
    switch (index) {
        case 0:
            console.log('match found')
            return ('#A5D6A7')
        case 1:
            return ('#263238')
        case 2:
            return ('#FFCC80')
        case 3:
            return ('#90CAF9')
        case 4:
            return ('#A5D6A7')
        case 5:
            return ('#FFF59D')
        default:
            // console.log('No match found')
            console.log(index)
            return ('#FFCC80')
    }
}

function PlayerSelectBox(props) {
    let index = props.index;
    // console.log(bgColor);
    return (
        <Box 
            bg={skillSelectColor(index)} 
            width={1/6}
            p={1}
            m={.5}
            css={{
                borderRadius:3,
            }}
        />
    )
}

export default PlayerSelectBox;