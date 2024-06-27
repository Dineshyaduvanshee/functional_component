import React from 'react';
import Para from './Para';
import List from './List';
import Heading from './Heading';
import Contact from './Contact';
import Matplot from './Matplot';
import ThreeDObjectComponent from './ThreeD';

function App() {
  return (
    <>
      <Heading />
      <List />
      <Para />
      <Contact/>
      <Matplot/>
      <ThreeDObjectComponent/>
      <Dimensions />
    </>
  );
}

export default App;
