This is a reproduction of an issue experienced with the react-native-navigation library when toggling the bottom tabs on iOS.

To reproduce:

- Clone this repo
- Run `npx pod-install`
- Run `npm run ios`
- In the simulator, when the app first loads, scroll to the bottom - notice that the bottom red border is visible
- Wait for the tabs to appear
- Notice that the tabs now clip the content view

As an aside, if the user taps on another tab, then returns, the content is no longer clipped.