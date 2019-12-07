import React from 'react';
import { Dimensions, StyleSheet, SafeAreaView, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

/*
<iframe width="560" height="315" src="https://www.youtube.com/embed/V4-Rm301SkQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
*/

const youtubeVideo = 'https://www.youtube.com/embed/V4-Rm301SkQ';

export default function App() {
  return (
    <SafeAreaView style={ styles.container }>
      <View>
        <WebView
          source={{ uri: 'https://youtube.com' }}
          style={{ width: Dimensions.get( 'window' ).width }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
