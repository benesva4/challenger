import Paper from '@material-ui/core/Paper'
import styled from 'styled-components'
import React, { Component } from 'react'

const StyledPaper = styled<any>(Paper)`
  width: 400px;
  height: 380px;
`

class Login extends Component {
  render() {
    return (
      <StyledPaper />
    )
  }
}

export default Login