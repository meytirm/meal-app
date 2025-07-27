import {StyleSheet, Text, View} from "react-native";

function ListItem({data}:Props) {
  return data.map(item =>
    <View key={item} style={styles.listItem}>
      <Text style={styles.itemText}>{item}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: '#ffd0af'
  },
  itemText: {
    color: '#452619',
    textAlign: 'center'
  }
})

export default ListItem

interface Props {
  data: string[]
}