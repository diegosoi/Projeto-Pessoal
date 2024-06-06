import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function HomeScreen() {
  const navigation = useNavigation()

  const [name, setName] = useState('')

  const handleAboutClick = () => {
    navigation.navigate('About')
    //navigation.navigate('About', {cor: name})
  }

  const handlePClick = () => {
    navigation.navigate('P')
    //navigation.navigate('About', {cor: name})
  }

  const handleBrClick = () => {
    navigation.navigate('Br')
    //navigation.navigate('About', {cor: name})
  }

  const handleHrClick = () => {
    navigation.navigate('Hr')
    //navigation.navigate('About', {cor: name})
  }

  const handleImgClick = () => {
    navigation.navigate('Img')
    //navigation.navigate('About', {cor: name})
  }

  const handleDivClick = () => {
    navigation.navigate('Div')
    //navigation.navigate('About', {cor: name})
  }

  const handleUlClick = () => {
    navigation.navigate('Ul')
    //navigation.navigate('About', {cor: name})
  }

  const handleOlClick = () => {
    navigation.navigate('Ol')
    //navigation.navigate('About', {cor: name})
  }

  const handleLiClick = () => {
    navigation.navigate('Li')
    //navigation.navigate('About', {cor: name})
  }

  const handleTableClick = () => {
    navigation.navigate('Table')
    //navigation.navigate('About', {cor: name})
  }

  const handleDesenClick = () => {
    navigation.navigate('Desen')
    //navigation.navigate('About', {cor: name})
  }

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={handleAboutClick }>
        <Text style={styles.hh}>h1</Text>
        <Text style={styles.txt}>(Usado para criar titúlos)</Text>
      </TouchableOpacity>
      <Text style={styles.line1}></Text>

      <TouchableOpacity onPress={handlePClick }>
        <Text style={styles.hh}>p</Text>
        <Text style={styles.txt}>(Usado para criar parágrafo)</Text>
      </TouchableOpacity>
      <Text style={styles.line1}></Text>

      <TouchableOpacity onPress={handleBrClick }>
        <Text style={styles.hh}>br</Text>
        <Text style={styles.txt}>Usado para quebrar uma linha(Deixar uma linha)</Text>
      </TouchableOpacity>
      <Text style={styles.line1}></Text>

      <TouchableOpacity onPress={handleHrClick }>
         <Text style={styles.hh}>hr</Text>
        <Text style={styles.txt}>(Usado para criar uma linha)</Text>
      </TouchableOpacity>
      <Text style={styles.line1}></Text>

      <TouchableOpacity onPress={handleImgClick }>
        <Text style={styles.hh}>img</Text>
        <Text style={styles.txt}>Exibir uma image</Text>
      </TouchableOpacity>
      <Text style={styles.line1}></Text>

      <TouchableOpacity onPress={handleDivClick }>
        <Text style={styles.hh}>div</Text>
        <Text style={styles.txt}>Define uma divisão</Text>
      </TouchableOpacity>
      <Text style={styles.line1}></Text>

      <TouchableOpacity onPress={handleUlClick }>
        <Text style={styles.hh}>ul</Text>
        <Text style={styles.txt}>Cria uma lista não ordenada</Text>
      </TouchableOpacity>
      <Text style={styles.line1}></Text>

      <TouchableOpacity onPress={handleOlClick }>
        <Text style={styles.hh}>ol</Text>
        <Text style={styles.txt}>Cria uma lista ordenada</Text>
      </TouchableOpacity>
      <Text style={styles.line1}></Text>

      <TouchableOpacity onPress={handleLiClick }>
        <Text style={styles.hh}>li</Text>
        <Text style={styles.txt}>Define um item na lista</Text>
      </TouchableOpacity>
      <Text style={styles.line1}></Text>

      <TouchableOpacity onPress={handleTableClick }>
        <Text style={styles.hh}>table</Text>
        <Text style={styles.txt}>Cria uma tabela</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleDesenClick }>
        <Text style={styles.line1}></Text>
        <Text style={styles.mais}>Mais...</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#000'
  },
  hh: {
    color: '#d25217',
    textAlign: 'center',
    fontSize: 35,
  },

  txt: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20
  },

  line1: {
    width: 51000,
    backgroundColor: '#fafafa',
    height:2,
    marginTop: 5
  },

  mais: {
   color: 'gray',
   textAlign: 'center',
   fontSize: 25,
   marginBottom:20,
   marginTop:20

  },
})