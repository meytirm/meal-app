import {Image, Platform, Pressable, StyleSheet, Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../../types";
import MealDetails from "../MealDetails";
type NavigationProp = StackNavigationProp<RootStackParamList, 'MealDetail'>
function MealItem({id, title, imageUrl, duration, complexity, affordability}: Props) {
  const navigation = useNavigation<NavigationProp>();

  function handleOnPress() {
    navigation.navigate('MealDetail', {
      mealId: id
    })
  }
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{color: '#ccc'}}
        style={({pressed}) =>
          [pressed ? styles.buttonPressed : null]}
      onPress={handleOnPress}>
        <View>
          <View>
            <Image style={styles.image} source={{uri: imageUrl}}/>
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  )
}

export default MealItem

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    backgroundColor: '#fff',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
  },
  innerContainer :{
    borderRadius: 8,
    overflow: 'hidden',
  },
  buttonPressed: {
    opacity: 0.5
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: "center",
    fontSize: 18
  },
})

interface Props {
  title: string
  imageUrl: string
  duration: number
  complexity: string
  affordability: string
  id: string
}