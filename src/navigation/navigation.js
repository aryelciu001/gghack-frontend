import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";

import SplashScreen from '../navigation/splashScreen'
import LoginScreen from '../screen/loginScreen'
import RegisterScreen from '../screen/registerScreen'
import SignUpScreen from '../screen/signupScreen'
import EnableLocationScreen from '../screen/enableLocationScreen'
import HomeScreen from '../screen/homeScreen'
import DonorScreen from '../screen/donorScreen'
import AllSet from '../screen/allSetScreen'

const AuthStackNavigator = createStackNavigator(
    {
        LoginScreen: { screen: LoginScreen },
        RegisterScreen: {screen: RegisterScreen},
        SignUpScreen: {screen: SignUpScreen},
        EnableLocationScreen: {screen: EnableLocationScreen},
        AllSet: {screen: AllSet}
      },
      {
        initialRouteName: "RegisterScreen",
        headerMode: "none",
      }
);

const MainStackNavigator = createStackNavigator(
    {
        HomeScreen: {screen: HomeScreen},
        DonorScreen: {screen: DonorScreen},
      },
      {
        initialRouteName: "HomeScreen",
        headerMode: "none",
      }
);

const AppStartNavigator = createSwitchNavigator(
    {
      SplashScreen: { screen: SplashScreen },
      AuthStackNavigator: { screen: AuthStackNavigator },
      MainStackNavigator: {screen: MainStackNavigator},
      EnableLocationScreen: {screen: EnableLocationScreen},
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
