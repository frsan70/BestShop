import { NavigationContainer } from "@react-navigation/native";
import ScreenNames from "./ScreenNames";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../src/Screens/Splash";
import Home from "../src/Screens/Home";
import ProuductPage from "../src/Screens/prouductPage";
import AllProuducts from "../src/Screens/AllProuducts";
import MenuDrawer from "./MenuDrawer";

const MainNavigation = () => {
    const Stack = createNativeStackNavigator   ();
    return (
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name={ScreenNames.splash} component={Splash}/>
            <Stack.Screen name={ScreenNames.home} component={Home}/>
            <Stack.Screen name={ScreenNames.ProuductPage} component={ProuductPage}/>
            <Stack.Screen name={ScreenNames.AllProuducts} component={AllProuducts}/>
            <Stack.Screen name={ScreenNames.MenuDrawer} component={MenuDrawer}/>
    
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;