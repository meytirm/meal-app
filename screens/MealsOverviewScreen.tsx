import {CATEGORIES, MEALS} from "../data/dummy-data";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {useLayoutEffect} from "react";
import MealsList from "../components/MealsList/MealsList";

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

  return <MealsList items={displayedMeals} />

}

export default MealsOverviewScreen

type MealsOverviewProps = NativeStackScreenProps<{ MealsOverview: { categoryId: string } }, 'MealsOverview'>;
