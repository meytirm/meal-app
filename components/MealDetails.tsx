import {StyleSheet, Text, View} from "react-native";

function MealDetails(
  {
    duration,
    complexity,
    affordability,
    textStyle
  }: Props) {
  return (
    <View style={[styles.details]}>
      <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailItem, textStyle]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.detailItem, textStyle]}>{affordability.toUpperCase()}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12
  }
})

export default MealDetails

interface Props {
  duration: number
  complexity: string
  affordability: string
  textStyle?: object
}