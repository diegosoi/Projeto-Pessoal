import * as React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

export default function AboutScreen() {
  const navigation = useNavigation()

  const route = useRoute()
  const name = route.params?.name

  const handleHomeClick = () => {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>O elemento HTML (p) representa um parágrafo. Em mídias visuais, parágrafos são representados como blocos indentados de texto com a primeira letra avançada e separados por linhas em branco. Já em HTML, parágrafos são usados para agrupar conteúdos relacionados de qualquer tipo, como imagens e campos de um formulário.</Text>
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