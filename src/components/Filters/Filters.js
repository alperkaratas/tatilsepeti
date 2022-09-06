import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './style';

const Filters = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.sortByAndFilterContainer}>
        <Image
          style={styles.sortAndFilterIcon}
          source={require('../../icons/sort.png')}
        />
        <Text style={styles.sortByAndFilterText}>Sırala</Text>
      </TouchableOpacity>
      <Text style={styles.dividerText}>|</Text>
      <TouchableOpacity style={styles.sortByAndFilterContainer}>
        <Image
          style={styles.sortAndFilterIcon}
          source={require('../../icons/filter.png')}
        />
        <Text style={styles.sortByAndFilterText}>Filtrele</Text>
      </TouchableOpacity>
    </View>
  );
};

export {Filters};
