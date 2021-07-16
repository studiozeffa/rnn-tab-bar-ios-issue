import { Navigation } from 'react-native-navigation';

import App from './App';

Navigation.registerComponent('com.myApp.WelcomeScreen', () => App);

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: '#4d089a',
  },
  topBar: {
    title: {
      color: 'black',
    },
    backButton: {
      color: 'black',
    },
    background: {
      color: 'rgb(194,238,245)',
    },
  },
  bottomTab: {
    fontSize: 14,
    selectedFontSize: 14,
  },
});

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'com.myApp.WelcomeScreen',
                    options: {
                      topBar: {
                        title: {
                          text: 'Welcome 1',
                        },
                      },
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Welcome 1',
                  icon: require('./tab.png'),
                  iconColor: '#000',
                  selectedIconColor: 'rgb(0,216,255)',
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'com.myApp.WelcomeScreen',
                    options: {
                      topBar: {
                        title: {
                          text: 'Welcome 2',
                        },
                      },
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Welcome 2',
                  icon: require('./tab.png'),
                  iconColor: '#000',
                  selectedIconColor: 'rgb(0,216,255)',
                },
              },
            },
          },
        ],
      },
    },
  });
});
