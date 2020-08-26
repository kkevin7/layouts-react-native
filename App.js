import React from 'react';
import {StyleSheet, ScrollView, View, Text, Image} from 'react-native';

const App = () => {
  return (
    <>
      <View>
        <View style={styles.bannerContainer}>
          <Image
            style={styles.banner}
            source={require('./assets/img/bg.jpg')}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1
  },
  bannerContainer: {
    flexDirection: 'row'
  }
});

export default App;
