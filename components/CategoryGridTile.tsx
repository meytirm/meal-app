import {Pressable, Text, View} from "react-native";

function CategoryGridTile({title, color}: Props) {
  return <View>
    <Pressable>
      <View>
        <Text>{title}</Text>
      </View>
    </Pressable>
  </View>
}

export default CategoryGridTile

interface Props {
  title: string;
  color: string;
}