import {FlatList, StyleSheet, View} from "react-native";
import {RouteProp} from "@react-navigation/native";
import {MEALS} from "../data/dummy-data";
import MealItem from "../components/MealItem";
import {NativeStackScreenProps} from "@react-navigation/native-stack";

function MealsOverviewScreen({route}:MealsOverviewProps) {
  const catId = route.params.categoryId
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) !== -1;
  })

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) =>
          <MealItem
            title={itemData.item.title}
            imageUrl={itemData.item.imageUrl}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability}
          />}
      />
    </View>
  )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
})

type MealsOverviewProps = NativeStackScreenProps<{ MealsOverview: {categoryId: string} }, 'MealsOverview'>;
