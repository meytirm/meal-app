import {StyleSheet, Text, View} from "react-native";
import {RouteProp} from "@react-navigation/native";

function MealsOverviewScreen({route}:Props) {
  const catId = route.params.categoryId
  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen - {catId}</Text>
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

interface Props {
  route: RouteProp<{ Home: {categoryId: string} }>
}