import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import axios from 'axios';
import { act } from 'react-dom/test-utils';
import Widget from '../components/widget/Widget';

afterEach(cleanup);

jest.mock('axios');

const sydneyWeatherData = {
  coord: { lon: 151.2122, lat: -33.8668 },
  weather: [{
    id: 800, main: 'Clear', description: 'clear sky', icon: '01n',
  }],
  base: 'stations',
  main: {
    temp: 284.96,
    feels_like: 283.84,
    temp_min: 279.47,
    temp_max: 288.07,
    pressure: 1015,
    humidity: 63,
  },
  visibility: 10000,
  wind: { speed: 1.34, deg: 313, gust: 2.68 },
  clouds: { all: 0 },
  dt: 1627638496,
  sys: {
    type: 2, id: 2018875, country: 'AU', sunrise: 1627591756, sunset: 1627629223,
  },
  timezone: 36000,
  id: 6619279,
  name: 'Sydney',
  cod: 200,
};

describe('Widget component', () => {
  it('renders with three props: widgetTitle, isCelsius, showWind', async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: sydneyWeatherData }));

    await act(async () => {
      render(<Widget widgetTitle="test title" isCelsius showWind />);
    });

    expect(screen.getByText('test title'.toUpperCase())).toBeInTheDocument();

    // TODO: check temperature and city is rendered correctly
    // expect(screen.getByTestId('widget-info')).toBeInTheDocument()
  });

  it('show loading when component start loading', () => {
    render(<Widget widgetTitle="test title" isCelsius showWind />);
    expect(screen.queryByTestId('loading')).toBeInTheDocument();
  });

  // TODO: handle error cases
  // it('renders error message if cannot get position', () => {
  //   expect(screen.getByText('Please try later')).toBeInTheDocument();
  // })

  // it('renders error message if cannot get data from api', () => {
  //   expect(screen.getByText('Please try later')).toBeInTheDocument();
  // })
});
