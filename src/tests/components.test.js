import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, waitForElementToBeRemoved } from '@testing-library/react';

import Home from '../components/home'; // eslint-disable-line no-use-before-define
import Calculator from '../components/calculator';
import Quote from '../components/quote';

describe('Home', () => {
  it('should display "Welcome to our page!" and a paragraph when Home section is rendered', () => {
    const { getByText } = render(<Home />);
    const paragraph = document.getElementsByTagName('p');
    expect(getByText('Welcome to our page!')).toBeInTheDocument();
    expect(paragraph.textContent).not.toBe('');
  });
});

describe('Calculator', () => {
  it('should render correctly', () => {
    const { getByText } = render(<Calculator />);
    expect(getByText('AC')).toBeInTheDocument();
    expect(getByText('+/-')).toBeInTheDocument();
    expect(getByText('%')).toBeInTheDocument();
    expect(getByText('÷')).toBeInTheDocument();
    expect(getByText('x')).toBeInTheDocument();
    expect(getByText('-')).toBeInTheDocument();
    expect(getByText('+')).toBeInTheDocument();
    expect(getByText('0')).toBeInTheDocument();
    expect(getByText('.')).toBeInTheDocument();
    expect(getByText('=')).toBeInTheDocument();
  });

  test('should display the correct numbers when buttons are clicked', () => {
    const { getByText } = render(<Calculator />);
    fireEvent.click(getByText('1'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('3'));
    expect(getByText('123')).toBeInTheDocument();
  });

  test('should perform addition when the "+" button is clicked', () => {
    const { getByText } = render(<Calculator />);
    fireEvent.click(getByText('9'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('4'));
    fireEvent.click(getByText('='));
    expect(getByText('13')).toBeInTheDocument();
  });
});

describe('Quotes', () => {
  it('should display "Loading..." when quotes section is first accessed', () => {
    const { getByText } = render(<Quote />);
    expect(getByText('Loading...')).toBeInTheDocument();
  });

  test('should render a quote after loading', async () => {
    const { getByText, queryByText } = render(<Quote />);
    expect(getByText('Loading...')).toBeInTheDocument();
    await waitForElementToBeRemoved(() => queryByText('Loading...'), { timeout: 10000 });
    const quoteElement = document.getElementById('quote');
    expect(quoteElement.textContent).not.toBe('');
  });
});
