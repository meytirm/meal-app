import {Pressable, StyleSheet} from "react-native";
import {Ionicons} from '@expo/vector-icons'

function IconButton({onPress, icon, color}: Props) {
  return <Pressable
    onPress={onPress}
    style={
      ({pressed}) =>
        pressed && styles.pressed
    }
  >
    <Ionicons name={icon} size={24} color={color}/>
  </Pressable>
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7
  }
})

export default IconButton

interface Props {
  onPress: () => void
  color: string
  icon: keyof typeof Ionicons.glyphMap
}