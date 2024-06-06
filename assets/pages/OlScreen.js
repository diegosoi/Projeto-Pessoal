import * as React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

export default function OlScreen() {
  const navigation = useNavigation()

  const route = useRoute()
  const name = route.params?.name

  const handleHomeClick = () => {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>O Elemento HTML (ol) (ou Elemento HTML de lista ordenada) representa uma lista de itens ordenados. De forma característica esses itens ordenados em uma lista são mostrados com uma contagem que os precede, que pode ser de qualquer tipo, como numerais, letras, algarismos romanos, ou simples símbolos. Esse modelo numerado não é definido na descrição html da página, mas na folha de estilos CSS associada, pela propriedade list-style-type.</Text>
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