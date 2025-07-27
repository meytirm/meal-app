import CategoriesScreen from "./screens/CategoriesScreen";
import {StatusBar} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import {RootStackParamList} from "./types";
import MealDetailScreen from "./screens/MealDetailScreen";

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={
          {
            headerStyle: {
              backgroundColor: '#330000'
            },
            headerTintColor: 'white',
            contentStyle: {
              backgroundColor: '#452619'
            }
          }
        }>
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: 'All Category',
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
          />
          <Stack.Screen
            name="MealDetail"
            component={MealDetailScreen}

          />
        </Stack.Navigator>
      </NavigationContainer>
    </>

  );
}
