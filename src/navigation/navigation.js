/*import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";

import SplashScreen from '../navigation/splashScreen'
import LoginScreen from '../auth/loginScreen'

const AppStartNavigator = createSwitchNavigator(
    {
      SplashScreen: { screen: SplashScreen },
      LoginScreen: { screen: LoginScreen },
    },
    {
      initialRouteName: "SplashScreen",
      headerMode: "none",
    }
  );

const AppNavigator = createStackNavigator(
{
    AppStartNavigator: { screen: AppStartNavigator },
},
{
    initialRouteName: "AppStartNavigator",
    headerMode: "none",
}
);

  
  const AppContainer = createAppContainer(AppNavigator);
  export default AppContainer;
*/