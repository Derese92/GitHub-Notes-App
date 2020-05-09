import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Search from './components/Search';
import Dashboard from './components/Dashboard';
import ProfileDetails from './components/ProfileDetails';
import Repositories from './components/Repositories';
import WebView from './components/WebView';
import Notes from './components/Notes';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search" screenOptions={{ headerTitleAlign: 'center' }}>
        <Stack.Screen name="SEARCH" component={Search} options={{ title: 'Search' }} />
        <Stack.Screen name="DASHBOARD" component={Dashboard} options={{ title: 'Dashboard' }} />
        <Stack.Screen name="PROFILE" component={ProfileDetails} options={{ title: 'Profile Details' }} />
        <Stack.Screen name="REPOS" component={Repositories} options={{ title: 'Repositories' }} />
        <Stack.Screen name="WEB" component={WebView} options={{ title: 'Repository Source' }} />
        <Stack.Screen name="NOTES" component={Notes} options={{ title: 'Notes' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
