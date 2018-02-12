import React from 'react'
import styled from 'styled-components'

const StyledQuote = styled.blockquote`
  color: ${props => props.theme.dark};
  font-size: 2.5rem;
  font-family: Open Sans;
  margin: 0.75rem 0 0;
  font-style: italic;
`

const Separator = styled.hr`
  height: 5px;
  width: 40px;
  background: ${props => props.theme.dark};
  margin-left: 0;
  border: none;
`

const Wrapper = styled.div`
  grid-area: h;
  margin: 2rem 0;
`

const Quote = props => {
  return (
    <Wrapper>
      <Separator />
      <StyledQuote>{props.children}</StyledQuote>
    </Wrapper>
  )
}

export default Quote
