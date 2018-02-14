import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Select = styled.select`
  margin: 2rem 0.5rem;
  padding: 0rem 0.5rem;

  grid-area: c;
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
      <Select onChange={e => this.props.handleSelectChange(e)}>
        <SelectOpt value="GBP">GBP</SelectOpt>
        <SelectOpt value="USD">USD</SelectOpt>
        <SelectOpt value="EUR">EUR</SelectOpt>
      </Select>
    )
  }
}

export default CurrencySelect

CurrencySelect.propTypes = {
  handleSelectChange: PropTypes.func
}
