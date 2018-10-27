import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import CurrencySelect from './CurrencySelect'
import LimitSelect from './LimitSelect'
import CurrencySearch from './CurrencySearch'

import { media } from '../theme/globalStyle'

const StyledQuote = styled.blockquote`
  grid-area: title;
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

const QuoteWrapper = styled.header`
  grid-area: header;
  margin: 2rem 0;
`

const QuoteCurrencyWrapper = styled.div`
  margin: 2rem 0;
  display: grid;

  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    'title    .     .      .'
    'currency limit search .';
  ${media.giant`
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    grid-template-areas: 
      'title    .     .      .'
      'currency limit search .';
  `};
  ${media.desktop`
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas: 
      'title    .     .      .'
      'currency limit search .';
  `};
  ${media.tablet`
    grid-template-columns: repeat(1, 1fr);
    grid-template-areas: 
      'title'
      'currency'
      'limit'
      'search';
  `};
  ${media.phone`
    grid-template-columns: repeat(1, 1fr);
    grid-template-areas: 
      'title' 
      'currency'
      'limit'
      'search';
  `};
`

class Header extends React.Component {
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

export default Header

Header.propTypes = {
  children: PropTypes.string,
  handleCurrencyChange: PropTypes.func,
  currency: PropTypes.string,
  handleLimitChange: PropTypes.func,
  handleSearch: PropTypes.func
}
