import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Select = styled.select`
  margin: 2rem 0.5rem;
  padding: 0rem 0.5rem;

  grid-area: limit;
  width: 50%;
  text-align: center;

  font-family: Roboto;
  font-size: 1rem;

  border: 1px dashed ${props => props.theme.white};
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
  background: ${props => props.theme.white};
  border-radius: 2px;
`

export const SelectOpt = styled.option`
  font-family: Roboto;
  font-size: 1rem;
`

class CurrencySelect extends React.Component {
  render() {
    return (
      <Select onChange={e => this.props.handleLimitChange(e)}>
        <SelectOpt value="3">3</SelectOpt>
        <SelectOpt value="5">5</SelectOpt>
        <SelectOpt value="10">10</SelectOpt>
        <SelectOpt value="50">50</SelectOpt>
        <SelectOpt value="100">100</SelectOpt>
        <SelectOpt value="500">500</SelectOpt>
      </Select>
    )
  }
}

export default CurrencySelect

CurrencySelect.propTypes = {
  handleLimitChange: PropTypes.func
}
