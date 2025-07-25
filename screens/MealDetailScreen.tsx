import {Text, View} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
type MealsOverviewProps = NativeStackScreenProps<{ MealDetail: { mealDetail: string } }, 'MealDetail'>;

function MealDetailScreen({route}: MealsOverviewProps) {
  const mealId = route.params.mealDetail

  return (
    <View>
      <Text>This is the Meal Detail screen ({mealId})</Text>
    </View>
  )
 }

 export default MealDetailScreen;