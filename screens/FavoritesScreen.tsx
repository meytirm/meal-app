import {StyleSheet, Text, View} from "react-native";
import MealsList from "../components/MealsList/MealsList";
// import {useContext} from "react";
// import {FavoritesContext} from "../store/context/favorites-context";
import {MEALS} from "../data/dummy-data";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../store/redux/store";

function FavoritesScreen() {
  // const {ids} = useContext(FavoritesContext)
  const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
  const favoriteMealIds = useTypedSelector((state) => state.favoriteMeals.ids)
  const favoriteMeals = MEALS.filter((meal) => favoriteMealIds.includes(meal.id))

  if (!favoriteMeals || favoriteMeals.length === 0) {
    return <View style={styles.rootContainer}>
      <Text style={styles.text}>No favorite meals found. Start adding some!</Text>
    </View>
  }

  return <MealsList items={favoriteMeals}/>
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16
  }
})