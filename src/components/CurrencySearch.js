import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const SearchInput = styled.input.attrs({
  type: props => props.type || 'text',
  placeholder: props => props.placeholder
})`
  margin: 2rem 0.5rem;
  padding: 0rem 0.5rem;

  grid-area: search;
  width: 50%;
  text-align: center;

  font-family: Roboto;
  font-size: 1rem;

  border: 1px dashed ${props => props.theme.white};
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
  background: ${props => props.theme.white};
  border-radius: 2px;
`

class CurrencySearch extends React.Component {
  render() {
    return (
      <SearchInput
        type={'text'}
        placeholder={'Search Currency'}
        onChange={e => this.props.handleSearch(e)}
      />
    )
  }
}

export default CurrencySearch

CurrencySearch.propTypes = {
  handleSearch: PropTypes.func
}
