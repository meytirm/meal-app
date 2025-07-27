import CategoriesScreen from "./screens/CategoriesScreen";
import {Pressable, StatusBar} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import {RootStackParamList} from "./types";
import MealDetailScreen from "./screens/MealDetailScreen";
import {createDrawerNavigator, DrawerNavigationProp} from "@react-navigation/drawer";
import {Ionicons} from "@expo/vector-icons";

const Stack = createNativeStackNavigator<RootStackParamList>()
const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content"/>
      <NavigationContainer>
        <Drawer.Navigator screenOptions={{
          headerShown: false,
          drawerActiveBackgroundColor: '#ffd0af',
          drawerContentStyle: {
            backgroundColor: '#452619'
          }
        }}>
          <Drawer.Screen
            name="MealsCategories"
            component={StackNavigator}
          />
        </Drawer.Navigator>

      </NavigationContainer>
    </>

  );
}

function StackNavigator({navigation}: Props) {
  return <Stack.Navigator screenOptions={
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
        headerLeft: () => {
          return <Pressable
            onPress={() => navigation.openDrawer()}
          >
            <Ionicons name="menu" size={24} color="white"/>
          </Pressable>
        }
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
}

type Props = {
  navigation: DrawerNavigationProp<RootStackParamList, 'MealsCategories'>;
};