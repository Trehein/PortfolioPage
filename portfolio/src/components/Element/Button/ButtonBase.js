import React from 'react'
import PropTypes from 'prop-types'
// import { Button } from 'rebass'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';



// const Reset = styled(Button)`
//     background: none;
//     box-shadow: none;
//     font-weight: normal;
//     border-radius: 0;
//     cursor: pointer;
// ` 

export const ButtonBase = ({ children, ...props }) => (
    <Button {...props}>{children}</Button>
)

// Button.propTypes = {
//     children: PropTypes.node.isRequired
// }