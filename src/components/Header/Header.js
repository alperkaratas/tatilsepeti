import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './style';

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButtonContainer}>
        <Image
          style={styles.backButton}
          source={require('../../icons/back.png')}
        />
      </TouchableOpacity>
      <View style={styles.headerTitleContainer}>
        <Text style={styles.titleText}>Antalya</Text>
        <Text style={styles.filterText}>18 Şub - 23 Şub, 2 Yetişkin</Text>
      </View>
    </View>
  );
};

export {Header};
