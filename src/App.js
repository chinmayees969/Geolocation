import { Navigation } from 'react-native-navigation';
import {Provider} from 'react-redux';
import PlacesScreen from './src/screens/Places/Places';
import configureStore from './src/store/configureStore';
const store = configureStore();
//Register screens
Navigation.registerComponent("pick-places.PlacesScreen",
() => PlacesScreen,
store,
Provider
);
//Start an App
Navigation.startSingleScreenApp({
  screen: {
    screen: "pick-places.PlacesScreen",
    title: "Place List"
  }
  });
  export default App;