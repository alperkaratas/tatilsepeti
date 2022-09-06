import React from 'react';
import {SafeAreaView} from 'react-native';

import {Header, Filters, Results} from '../components';

const Main = () => {
  return (
    <SafeAreaView>
      <Header />
      <Filters />
      <Results />
    </SafeAreaView>
  );
};

export default Main;
