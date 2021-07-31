import React from 'react';
import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import Editor from '../components/editor/Editor';

afterEach(cleanup);

beforeEach(() => {
  render(<Editor />);
})

describe('Editor component', () => {

  it('shows uppercase title in widget when typing in text input', () =>{
    const testTitle = 'hello World';
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: testTitle },
    });
    expect(screen.getByTestId('widget-title')).toHaveTextContent(testTitle.toUpperCase());
  });

  it('has celsius and show wind default checked', () => {
    expect(screen.getByLabelText('On')).toBeChecked();
    expect(screen.getByLabelText(/C$/)).toBeChecked();
  })

  it('convert kelvin to whole number celsius when check celsius', () => {
    const celsiusRadio = screen.getByLabelText(/C$/)
    fireEvent.click(celsiusRadio);
    expect(celsiusRadio).toBeChecked();
  })

  it('convert kelvin to whole number fahrenheit when check fahrenheit', () => {
    const fahrenheitRadio = screen.getByLabelText(/F$/)
    fireEvent.click(fahrenheitRadio);
    expect(fahrenheitRadio).toBeChecked();
  })
})
