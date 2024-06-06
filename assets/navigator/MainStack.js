import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// telas do aplicativo
import HomeScreen from '../pages/HomeScreen'
import AboutScreen from '../pages/AboutScreen'
import PScreen from '../pages/PScreen'
import BrScreen from '../pages/BrScreen'
import HrScreen from '../pages/HrScreen'
import ImgScreen from '../pages/ImgScreen'
import DivScreen from '../pages/DivScreen'
import UlScreen from '../pages/UlScreen'
import OlScreen from '../pages/OlScreen'
import LiScreen from '../pages/LiScreen'
import TableScreen from '../pages/TableScreen'
import DesenScreen from '../pages/Desenvolvendo'

const MainStack = createNativeStackNavigator()
export default () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name='Home' component={HomeScreen} options={{
        title: 'PRINCIPAIS TAGS HTML',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#000',
          height: 100,
          
        },
        headerTitleStyle: {
          color: '#fff',
          fontSize: 29,
          fontWeight: 'bold'
        }
      }}/>
      <MainStack.Screen name='About' component={AboutScreen} options={
        ({route})=>({
          title: 'TAGS HTML <H1>',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#000',
          height: 100,
          
        },
        headerTitleStyle: {
          color: '#fff',
          fontSize: 24,
          fontWeight: 'bold'
        }
          
        })
      }/>

       <MainStack.Screen name='P' component={PScreen} options={
        ({route})=>({
          title: 'TAGS HTML <P></P>',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#000',
          height: 100,
          
        },
        headerTitleStyle: {
          color: '#fff',
          fontSize: 24,
          fontWeight: 'bold'
        }
          
        })
      }/>

      <MainStack.Screen name='Br' component={BrScreen} options={
        ({route})=>({
          title: 'TAGS HTML <br>',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#000',
          height: 100,
          
        },
        headerTitleStyle: {
          color: '#fff',
          fontSize: 24,
          fontWeight: 'bold'
        }
          
        })
      }/>

      <MainStack.Screen name='Hr' component={HrScreen} options={
        ({route})=>({
          title: 'TAGS HTML <hr>',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#000',
          height: 100,
          
        },
        headerTitleStyle: {
          color: '#fff',
          fontSize: 24,
          fontWeight: 'bold'
        }
          
        })
      }/>

      <MainStack.Screen name='Img' component={ImgScreen} options={
        ({route})=>({
          title: 'TAGS HTML <img>',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#000',
          height: 100,
          
        },
        headerTitleStyle: {
          color: '#fff',
          fontSize: 24,
          fontWeight: 'bold'
        }
          
        })
      }/>

      <MainStack.Screen name='Div' component={DivScreen} options={
        ({route})=>({
          title: 'TAGS HTML <div></div>',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#000',
          height: 100,
          
        },
        headerTitleStyle: {
          color: '#fff',
          fontSize: 24,
          fontWeight: 'bold'
        }
          
        })
      }/>

      <MainStack.Screen name='Ul' component={UlScreen} options={
        ({route})=>({
          title: 'TAGS HTML <ul></ul>',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#000',
          height: 100,
          
        },
        headerTitleStyle: {
          color: '#fff',
          fontSize: 24,
          fontWeight: 'bold'
        }
          
        })
      }/>

      <MainStack.Screen name='Ol' component={OlScreen} options={
        ({route})=>({
          title: 'TAGS HTML <ol></ol>',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#000',
          height: 100,
          
        },
        headerTitleStyle: {
          color: '#fff',
          fontSize: 24,
          fontWeight: 'bold'
        }
          
        })
      }/>

      <MainStack.Screen name='Li' component={LiScreen} options={
        ({route})=>({
          title: 'TAGS HTML <li></li>',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#000',
          height: 100,
          
        },
        headerTitleStyle: {
          color: '#fff',
          fontSize: 24,
          fontWeight: 'bold'
        }
          
        })
      }/>

      <MainStack.Screen name='Table' component={TableScreen} options={
        ({route})=>({
          title: 'TAGS HTML <table></table>',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#000',
          height: 100,
          
        },
        headerTitleStyle: {
          color: '#fff',
          fontSize: 24,
          fontWeight: 'bold'
        }
          
        })
      }/>

      <MainStack.Screen name='Desen' component={DesenScreen} options={
        ({route})=>({
          title: 'Em Desenvolvimento',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#000',
          height: 100,
          
        },
        headerTitleStyle: {
          color: '#fff',
          fontSize: 24,
          fontWeight: 'bold'
        }
          
        })
      }/>
    </MainStack.Navigator>
  )
}