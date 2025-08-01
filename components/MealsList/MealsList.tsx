import type Meal from "../../models/meal";
import MealItem from "./MealItem";
import {FlatList, StyleSheet, View} from "react-native";

function MealsList({items}: { items: Meal[] }) {

  function renderMealItem(itemData: Meal) {
    return <MealItem
      id={itemData.id}
      title={itemData.title}
      imageUrl={itemData.imageUrl}
      duration={itemData.duration}
      complexity={itemData.complexity}
      affordability={itemData.affordability}
    />
  }


  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => renderMealItem(itemData.item)}
      />
    </View>
  )
}

export default MealsList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
})