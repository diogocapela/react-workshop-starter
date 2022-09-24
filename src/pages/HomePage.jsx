import React from 'react';

// Layout
import MainLayout from '../layouts/MainLayout';

// Components
import ExampleCounter from '../components/ExampleCounter';
import ExampleWeather from '../components/ExampleWeather';

function HomePage() {
  return (
    <MainLayout>
      <h1>Home Page</h1>
      <ExampleCounter />
      <br />
      <ExampleWeather />
    </MainLayout>
  );
}

export default HomePage;
