import {StyleSheet, Dimensions, Platform} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    width: Dimensions.get('window').width / 1.05,
    height: Platform.OS === 'ios'
        ? Dimensions.get('window').height / 2.3
        : Dimensions.get('window').height / 2.2,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 15,
  },
  likeIcon: {
    margin: 15,
    width: 30,
    height: 30,
  },
  iconsOnImage: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowIconsOnImage: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  rateIconsOnImage: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9cd034',
    width: 46,
    height: 40,
    margin: 10,
    padding: 5,
    borderRadius: 6,
  },
  rateText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  healthCertificatedContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 15,
    backgroundColor: '#2DCA85',
    padding: 5,
    width: 150,
    borderRadius: 5,
  },
  healthCertificatedText: {
    marginLeft: 5,
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  healtedIcon: {
    width: 20,
    height: 20,
  },
  hotelPhoto: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    width: Dimensions.get('window').width / 1.05,
    height: Dimensions.get('window').height / 4.5,
    zIndex: -1,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  hotelInfoContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: 250,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },
  locationIcon: {
    width: 25,
    height: 25,
  },
  hotelNameText: {
    marginHorizontal: 10,
    marginTop: 15,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#355764',
  },
  hotelLocationText: {
    fontSize: 15,
    color: '#aaa9a9',
  },
  conseptContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 10,
  },
  conseptText: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#355764',
    padding: 6,
    color: '#355764',
    fontSize: 11.5,
  },
  campaignIcon: {
    width: 22,
    height: 22,
  },
  campaignContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 15,
  },
  campaignText: {
    marginLeft: 5,
    fontSize: 12,
    color: '#8dc51f',
  },
  priceContainer: {
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    marginTop: 15,
    marginRight: 20,
  },
  priceText: {
    fontSize: 19,
    fontWeight: '500',
    color: '#e56c63',
    textDecorationLine: 'line-through',
    textDecorationColor: '#e56c63',
  },
  discountPriceText: {
    fontSize: 25,
    fontWeight: '800',
    color: '#79bbf7',
    marginTop: 5,
  },
  infoForEveningText: {
    marginTop: 5,
    fontSize: 14,
    color: '#aaa9a9',
  },
});
