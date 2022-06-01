import {Navigation} from 'react-native-navigation';
import App from './App';
import {Provider} from 'react-redux';
import {store} from './src/app/store';
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import Details from './src/components/Details';

Navigation.registerComponent('com.myApp.WelcomeScreen', () => props => (
  <Provider store={store}>
    <PaperProvider>
      <App />
    </PaperProvider>
  </Provider>
));

Navigation.registerComponent('DetailsScreen', () => props => (
  <Provider store={store}>
    <PaperProvider>
      <Details />
    </PaperProvider>
  </Provider>
));

Navigation.setDefaultOptions({
  topBar: {
    background: {
      color: '#F44336',
    },
    title: {
      color: '#FFFFFF',
      text: 'Fetch',
      fontFamily: 'helvetica',
      fontWeight: 'bold',
    },
  },
});

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'AppStack',
        children: [
          {
            component: {
              name: 'com.myApp.WelcomeScreen',
            },
          },
        ],
      },
    },
  });
});
