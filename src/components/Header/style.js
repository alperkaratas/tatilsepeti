import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 3},
    shadowOpacity: 0.2,
    marginBottom: 20,
  },
  backButtonContainer: {
    marginLeft: 10,
    marginRight: -10,
  },
  backButton: {
    width: 25,
    height: 20,
  },
  headerTitleContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#355764',
  },
  filterText: {
    fontSize: 14,
    fontWeight: '200',
  },
});
