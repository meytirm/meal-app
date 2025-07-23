import CategoriesScreen from "./screens/CategoriesScreen";
import {StatusBar} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="MealsCategories" component={CategoriesScreen}>
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>

  );
}
