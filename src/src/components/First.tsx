import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background-color: ${(props) => props.primary ? 'red' : 'blue'};
  color: red;
  font-size: 20px;
  text-align: center;
`

const FirstComponent = (): React.ReactElement => {

  return (
    <div>
      <Button>Hello</Button>
    </div>
  )
}

export default FirstComponent