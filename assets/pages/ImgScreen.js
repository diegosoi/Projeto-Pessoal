import * as React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

export default function ImgScreen() {
  const navigation = useNavigation()

  const route = useRoute()
  const name = route.params?.name

  const handleHomeClick = () => {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>O elemento **HTML (img) **(or HTML Image Element) representa a inserção de imagem no documento, sendo implementado também pelo HTML5 para uma melhor experiência com o elemento (figure) e (figcaption).</Text>
      <Button title='Voltar' onPress={handleHomeClick} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  txt:{
    color: '#fff',
    fontSize: 25,
    marginBottom: 100,
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15
  },
})