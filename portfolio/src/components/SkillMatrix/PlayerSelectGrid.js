import React from 'react'
import { Flex } from 'rebass'
import PlayerSelectBox from './PlayerSelectBox'

function PlayerSelectGrid(props) {
    let data = props.data;
    // console.log(data);
    return (
        <Flex
            width={1/3}
        >
            {
                data.players.map((player, index) => (
                    <PlayerSelectBox key={index} index={index} />
                ))
            }
        </Flex>
    )
}

export default PlayerSelectGrid;