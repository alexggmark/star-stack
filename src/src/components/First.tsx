import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  color: red;
  font-size: 20px;
  text-align: center;
`

const FirstComponent = (): React.ReactElement => {

  return (
    <div>
      <Button>Words</Button>
    </div>
  )
}

export default FirstComponent