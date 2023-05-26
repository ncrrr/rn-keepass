import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import constants from './constants.json';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constants.styles.background.default,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Drawer = createDrawerNavigator();

function Feed() {
  return (
    <View style={{ flex: 1, backgroundColor: constants.styles.background.default }}>
      <Text style={{ color: constants.styles.font.default }}>
        Open up Feed
      </Text>
    </View>
  );
}

function Article() {
  return (
    <View style={{ flex: 1, backgroundColor: constants.styles.background.default }}>
      <Text style={{ color: constants.styles.font.default }}>
        Open up Article
      </Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Drawer.Navigator
        initialRouteName="Feed"
        drawerContentOptions={{
          activeTintColor: 'green',
          itemStyle: { marginVertical: 10 },
        }}
        screenOptions={{
          headerStyle: { backgroundColor: '#333', color: constants.styles.font.default },
          drawerStyle: { backgroundColor: constants.styles.background.default },
          headerTintColor: constants.styles.font.title,
          drawerItemStyle: { color: constants.styles.font.selected, backgroundColor: constants.styles.background.selected },
        }}
      >
        <Drawer.Screen
          name="Feed"
          component={Feed}
        />
        <Drawer.Screen
          name="Article"
          component={Article}
        />
      </Drawer.Navigator>
      <StatusBar style="light" translucent />
    </NavigationContainer>
    // <View style={styles.container}>
    //   <MainDrawer />
    //   <Text style={{ color: constants.styles.font.default }}>
    //     Open up App.js to start working on your app!
    //   </Text>
    //   <StatusBar style="light" translucent />
    // </View>
  );
}
