import React from 'react'
import { Flex, Box } from 'rebass'

function TypeContainer(props) {
    let data = props.data;
    console.log(data);
    return (
        <div>
            <Flex width={4/5}>
                <Box
                    width={1/5}
                >
                    {data.name}
                </Box>
            </Flex>
        </div>
    )
}

export default TypeContainer;