import React from 'react'
import styled from 'styled-components'

const StyledNotice = styled.div`
  grid-area: f;
  border: solid 3px ${props => props.theme.dark};
  background: #f7f7f7;
  padding: 1rem;
  margin: 2.5rem 0;
  border-radius: 6px;
`

const Text = styled.p`
  margin: 0;
`

const Notice = props => {
  return (
    <StyledNotice>
      <Text>{props.children}</Text>
    </StyledNotice>
  )
}

export default Notice
