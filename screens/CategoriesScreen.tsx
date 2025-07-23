import {FlatList} from "react-native";
import {CATEGORIES} from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
import Category from "../models/category";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {ParamListBase} from "@react-navigation/native";

function CategoriesScreen({navigation}:Props) {
  function renderCategoryItem(itemData: Category) {
    function pressHandler() {
      navigation.navigate("MealsOverview")
    }

    return <CategoryGridTile
      title={itemData.title}
      color={itemData.color}
      onPress={pressHandler}
    />
  }
  return <FlatList
    data={CATEGORIES}
    keyExtractor={(item) => String(item.id)}
    renderItem={(itemData) => renderCategoryItem(itemData.item)}
    numColumns={2}
  />
}

export default CategoriesScreen

interface Props {
  navigation: NativeStackNavigationProp<ParamListBase, 'MealsOverview'>;
}