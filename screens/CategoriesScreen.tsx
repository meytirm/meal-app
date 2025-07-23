import {FlatList} from "react-native";
import {CATEGORIES} from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
import Category from "../models/category";

function renderCategoryItem(itemData:Category) {
  return <CategoryGridTile title={itemData.title} color={itemData.color} />
}

function CategoriesScreen() {
  return <FlatList
    data={CATEGORIES}
    keyExtractor={(item) => String(item.id)}
    renderItem={(itemData) => renderCategoryItem(itemData.item)}
    numColumns={2}
  />
}

export default CategoriesScreen