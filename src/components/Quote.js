import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import CurrencySelect from './CurrencySelect'
import LimitSelect from './LimitSelect'
import CurrencySearch from './CurrencySearch'

import { media } from '../theme/globalStyle'

const StyledQuote = styled.blockquote`
  grid-area: q;
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

const QuoteWrapper = styled.div`
  grid-area: h;
  margin: 2rem 0;
`

const QuoteCurrencyWrapper = styled.div`
  display: grid;

  grid-template-columns: 3fr 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: 'q c l';

  margin: 2rem 0;

  ${media.giant`
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: 
      'q .'
      'c l';
  `};
  ${media.desktop`
    grid-template-columns: 1f 1fr;
    grid-template-areas: 
      'q .'
      'c l';

  `};
  ${media.tablet`
    grid-template-columns: 1fr;
    grid-template-areas: 
      'q'
      'c'
      'l';
  `};
  ${media.phone`
    grid-template-areas: 
      'q'
      'c'
      'l';
  `};
`

class Quote extends React.Component {
  render() {
    return (
      <QuoteWrapper>
        <Separator />
        <QuoteCurrencyWrapper>
          <StyledQuote>{this.props.children}</StyledQuote>
          <CurrencySelect
            currency={this.props.currency}
            handleCurrencyChange={this.props.handleCurrencyChange}
          />
          <LimitSelect
            handleLimitChange={this.props.handleLimitChange}
          />
          <CurrencySearch handleSearch={this.props.handleSearch} />
        </QuoteCurrencyWrapper>
      </QuoteWrapper>
    )
  }
}

export default Quote

Quote.propTypes = {
  children: PropTypes.string,
  handleCurrencyChange: PropTypes.func,
  currency: PropTypes.string,
  handleLimitChange: PropTypes.func,
  handleSearch: PropTypes.func
}
