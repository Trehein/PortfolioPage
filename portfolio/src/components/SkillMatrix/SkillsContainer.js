import React from 'react'
import { Box, Flex } from 'rebass'
// import SkillRow from './SkillRow'
import PlayerSelectGrid from './PlayerSelectGrid'

function SkillsContainer(props) {
    let data = props.data;
    // console.log(data)
    return (
        <Flex
            flexWrap='wrap'
            width={1}
            p={1}
        >
            {
                data.skills.map((skill, index) => (
                    <Flex
                        key={index}
                        width={1} 
                    >
                        <PlayerSelectGrid data={skill} />
                        <Box 
                            width={2/3} 
                            p={1}
                        >
                            {skill.desc}
                        </Box>
                    </Flex>
                )) 
            }
        </Flex>
    )
}

export default SkillsContainer;