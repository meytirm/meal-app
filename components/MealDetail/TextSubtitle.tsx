import {StyleSheet, Text, View} from "react-native";
import {ReactNode} from "react";

function TextSubtitle({children}: Props) {
  return <View style={styles.subtitleContainer}>
    <Text style={styles.subtitle}>{children}</Text>
  </View>
}

const styles = StyleSheet.create({
  subtitle: {
    color: '#ffd0af',
    fontSize: 18,
    fontWeight: 'bold',
    margin: 6,
    padding: 6,
    textAlign: 'center',
  },
  subtitleContainer: {
    padding: 6,
    marginHorizontal: 24,
    marginVertical: 4,
    borderBottomColor: '#ffd0af',
    borderBottomWidth: 2,
  }
})

export default TextSubtitle

interface Props {
  children: ReactNode
}