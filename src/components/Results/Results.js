import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, View, ActivityIndicator} from 'react-native';
import HotelCard from './components/HotelCard/HotelCard';
import {styles} from './style';

import axios from 'axios';

const Results = () => {
  const [loading, setLoading] = useState(true);
  const [responseData, setResponseData] = useState();

  useEffect(() => {
    getHotelsData();
  }, []);

  const getHotelsData = async () => {
    axios
      .get(
        'https://gist.githubusercontent.com/yasaricli/de2282f01c739a5c8fcbffbb9116e277/raw/69d329b80be71c502d4a7c00142a4e324f86d602/hotels.json',
      )
      .then(resp => {
        setResponseData(resp.data);
        setLoading(false);
      })
      .catch(err => {
        console.log('Failed', err);
        setLoading(false);
      });
  };

  const renderItem = ({item}) => (
    <HotelCard
      data={item}
      isHealthCertificated={item.hotelThemeList.find(
        x => x.code === 'sagliksertifikali',
      )}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#32475b" />
        </View>
      ) : (
        <FlatList
          data={responseData}
          keyExtractor={item => item.hotelId}
          renderItem={renderItem}
          nestedScrollEnabled={true}
        />
      )}
    </SafeAreaView>
  );
};

export {Results};
