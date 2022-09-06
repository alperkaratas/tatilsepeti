import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';
import {styles} from './style';

const HotelCard = ({data, isHealthCertificated}) => {
  const redirectAlert = () => {
    Alert.alert(
      `${data.hotelName}`,
      `Detaylı otel bilgisi için; 

      tatilsepeti.com${data.url}
      `,
      [
        {
          text: 'Vazgeç',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Git',
          onPress: () =>
            Linking.openURL(`https://www.tatilsepeti.com/${data.url}?RT=5`),
        },
      ],
    );
  };

  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() => redirectAlert()}>
        <ImageBackground
          style={styles.hotelPhoto}
          source={{uri: data.photoPath}}>
          <View style={styles.iconsOnImage}>
            <View style={styles.rowIconsOnImage}>
              <TouchableOpacity>
                <Image
                  style={styles.likeIcon}
                  source={require('../../../../icons/like.png')}
                />
              </TouchableOpacity>
              {isHealthCertificated.code === 'sagliksertifikali' && (
                <View style={styles.healthCertificatedContainer}>
                  <Image
                    style={styles.healtedIcon}
                    source={require('../../../../icons/healted.png')}
                  />
                  <Text style={styles.healthCertificatedText}>
                    Sağlık Sertifikalı
                  </Text>
                </View>
              )}
            </View>
            <View style={styles.rateIconsOnImage}>
              <Text style={styles.rateText}>{data.customerScore}</Text>
            </View>
          </View>
        </ImageBackground>

        <View style={styles.infoContainer}>
          <View style={styles.hotelInfoContainer}>
            <Text style={styles.hotelNameText}>{data.hotelName}</Text>
            <View style={styles.locationContainer}>
              <Image
                style={styles.locationIcon}
                source={require('../../../../icons/location.png')}
              />
              <Text style={styles.hotelLocationText}>
                {data.areaName} - {data.subAreaName}
                {data.subAreaDetailName && ','} {data.subAreaDetailName}
              </Text>
            </View>
            <View style={styles.conseptContainer}>
              <Text style={styles.conseptText}>{data.accommodation}</Text>
            </View>
            <View style={styles.campaignContainer}>
              <Image
                style={styles.healtedIcon}
                source={require('../../../../icons/discount.png')}
              />
              <Text style={styles.campaignText}>{data.campaignName}</Text>
            </View>
          </View>
          <View style={styles.priceContainer}>
            {data.discountPrice && (
              <Text style={styles.priceText}>₺{data.price.toFixed(2)}</Text>
            )}
            {data.discountPrice ? (
              <Text style={styles.discountPriceText}>
                ₺{data.discountPrice.toFixed(2)}
              </Text>
            ) : (
              <Text style={styles.discountPriceText}>
                ₺{data.discountPrice.toFixed(2)}
              </Text>
            )}
            <Text style={styles.infoForEveningText}>gecelik kişi başı</Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default HotelCard;
