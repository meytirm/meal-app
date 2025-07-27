import {Button, Image, ScrollView, StyleSheet, Text, View} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {MEALS} from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import TextSubtitle from "../components/MealDetail/TextSubtitle";
import ListItem from "../components/MealDetail/ListItem";
import {useLayoutEffect} from "react";

type MealsOverviewProps = NativeStackScreenProps<{ MealDetail: { mealId: string } }, 'MealDetail'>;

function MealDetailScreen({route, navigation}: MealsOverviewProps) {
  const mealId = route.params.mealId

  const selectedMeal = MEALS
    .find((meal) => meal.id === mealId)

  function handleButtonPress() {
    console.log('Button Pressed!')
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Button title="Tap me" onPress={handleButtonPress} />
      }
    })
  }, [navigation])

  if (!selectedMeal) {
    return <View>
      <Text>
        couldn't find the meal
      </Text>
    </View>
  }

  const {duration, complexity, affordability} = selectedMeal
  return (
    <ScrollView>
      <Image style={styles.image} source={{uri: selectedMeal.imageUrl}}/>
      <Text style={styles.title}>{selectedMeal?.title}</Text>
      <View>
        <MealDetails
          duration={duration}
          complexity={complexity}
          affordability={affordability}
          textStyle={styles.detailText}
        />
      </View>
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <TextSubtitle>Ingredient</TextSubtitle>
          <ListItem data={selectedMeal.ingredients}/>
          <TextSubtitle>Steps</TextSubtitle>
          <ListItem data={selectedMeal.steps}/>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white'
  },
  detailText: {
    color: 'white'
  },
  listOuterContainer: {
    alignItems: 'center'
  },
  listContainer: {
    maxWidth: '80%'
  }
})

export default MealDetailScreen;