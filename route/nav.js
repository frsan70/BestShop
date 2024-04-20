import { NavigationContainer } from "@react-navigation/native";
import ScreenNames from "./ScreenNames";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../src/Screens/Splash";
import Home from "../src/Screens/Home";

const MainNavigation = () => {
    const Stack = createNativeStackNavigator   ();
    return (
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name={ScreenNames.splash} component={Splash}/>
            <Stack.Screen name={ScreenNames.home} component={Home}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;