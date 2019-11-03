import React from 'react'
import { Box, Flex } from 'rebass'
import SkillsContainer from './SkillsContainer'

function TypeContainer(props) {
    let data = props.data;
    // console.log(data.types);
    return (
        <Flex flexWrap='wrap' width={4/5}>
            {
                data.types.map((type, index) => (
                    <Flex
                        key={index}
                        width={1}
                    >
                        <Box 
                            width={1/4}
                            p={1}
                        >
                            {type.name}
                        </Box>
                        <SkillsContainer data={type} />
                    </Flex>
                ))
            }
        </Flex>
    )
}

export default TypeContainer;