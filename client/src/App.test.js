import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent } from '@testing-library/react';
import PlayersData from './Components/PlayersData';


test('renders without crashing', () => {
  render(<App />);
})

test('display dark mode', () => {
  const {getByTestId} = render(<App />);
  const darkModeDiv = getByTestId('dark-mode')
  expect(darkModeDiv.classList[0]).toBe('toggle');
  
})

test('', () => {
  const {getByText} =  render(<PlayersData name="LambdaSchool"/>)
  expect(getByText('LambdaSchool').classList[0]).toBe('active');
});
