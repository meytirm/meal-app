import {FlatList, StyleSheet, View} from "react-native";
import {CATEGORIES, MEALS} from "../data/dummy-data";
import MealItem from "../components/MealItem";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {useLayoutEffect} from "react";

function MealsOverviewScreen({route, navigation}: MealsOverviewProps) {
  const catId = route.params.categoryId
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) !== -1;
  })


  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES
      .find((category) => category.id === catId)?.title
    navigation.setOptions({
      title: categoryTitle
    })
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) =>
          <MealItem
            id={itemData.item.id}
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

type MealsOverviewProps = NativeStackScreenProps<{ MealsOverview: { categoryId: string } }, 'MealsOverview'>;
