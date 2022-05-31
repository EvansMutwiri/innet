import {Navigation} from 'react-native-navigation';
import App from './App';
import {Provider} from 'react-redux';
import {store} from './src/app/store';
import React from 'react';

Navigation.registerComponent('com.myApp.WelcomeScreen', () => props => (
  <Provider store={store}>
    <App />
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
