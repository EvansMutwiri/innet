import {Navigation} from 'react-native-navigation';
import App from './App';
import {Provider} from 'react-redux';
import {store} from './src/app/store';
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import Details from './src/components/Details';
import AddPost from './src/components/AddPost';

// WelcomeScreen.navigationOptions = {
//   title: 'Welcome',
// };

Navigation.registerComponent('WelcomeScreen', () => HomeScreen => (
  <Provider store={store}>
    <PaperProvider>
      <App {...HomeScreen} />
    </PaperProvider>
  </Provider>
));

Navigation.registerComponent('DetailsScreen', () => props => (
  <Provider store={store}>
    <PaperProvider>
      <Details {...props} />
    </PaperProvider>
  </Provider>
));

Navigation.registerComponent('AddPost', () => props => (
  <Provider store={store}>
    <PaperProvider>
      <AddPost {...props} />
    </PaperProvider>
  </Provider>
));

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'AppStack',
        children: [
          {
            component: {
              name: 'WelcomeScreen',
              options: {
                topBar: {
                  title: {
                    text: 'Home',
                  },
                  rightButtons: [
                    {
                      id: 'addPostButton',
                      text: 'Add',
                      color: '#fff',
                      passProps: {
                        text: 'Add',
                      },
                    },
                  ],
                },
              },
            },
          },
          // {
          //   component: {
          //     name: 'AddPost',
          //     options: {
          //       topBar: {
          //         title: {
          //           text: 'Details',
          //         },
          //       },
          //     },
          //   },
          // },
        ],
      },
    },
  });
});

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: '#4d089a',
  },

  topBar: {
    backButton: {
      color: 'white',
    },
    title: {
      color: 'white',
    },
    background: {
      color: '#2364AA',
    },
  },
});

// create buttons

// Navigation.mergeOptions('AppStack', {
//   topBar: {
//     rightButtons: [
//       {
//         id: 'myDynamicButton',
//         text: 'Button',
//         color: '#fff',
//       },
//     ],
//   },
// });

Navigation.updateProps('addPostButton', {
  onPress: () => {
    console.log('addPostButton');
    Navigation.push('AppStack', {
      component: {
        name: 'AddPost',
      },
    });
  },
});
