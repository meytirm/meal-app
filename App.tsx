import CategoriesScreen from "./screens/CategoriesScreen";
import {StatusBar} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import {RootStackParamList} from "./types";
import MealDetailScreen from "./screens/MealDetailScreen";
import {createDrawerNavigator} from "@react-navigation/drawer";
import FavoritesScreen from "./screens/FavoritesScreen";
import {Ionicons} from "@expo/vector-icons";
import FavoritesContextProvider from "./store/context/favorites-context";

const Stack = createNativeStackNavigator<RootStackParamList>()
const Drawer = createDrawerNavigator()

function DrawerNavigator() {
  return <Drawer.Navigator screenOptions={{
    drawerActiveBackgroundColor: '#ffd0af',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#330000',
    },
    sceneStyle: {
      backgroundColor: '#452619',
    },
    drawerContentStyle: {
      backgroundColor: '#452619',
    },
    drawerActiveTintColor: 'black',
    drawerInactiveTintColor: 'white',
  }}>
    <Drawer.Screen
      name="Categories"
      component={CategoriesScreen}
      options={{
        drawerIcon: ({size, color}) => (
          <Ionicons name='home' size={size} color={color} />
        )
      }}
    />
    <Drawer.Screen
      name="Favorites"
      component={FavoritesScreen}
      options={{
        drawerIcon: ({size, color}) => (
          <Ionicons name='star' size={size} color={color} />
        )
      }}
    />
  </Drawer.Navigator>
}

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content"/>
      <FavoritesContextProvider>
        <NavigationContainer>
          return <Stack.Navigator screenOptions={
          {
            headerStyle: {
              backgroundColor: '#330000'
            },
            headerTintColor: 'white',
            contentStyle: {
              backgroundColor: '#452619'
            },
          }
        }>
          <Stack.Screen
            name="MealsCategories"
            component={DrawerNavigator}
            options={{
              title: 'All Categories',
              headerShown: false,
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
      </FavoritesContextProvider>
    </>

  );
}