import React, { Component } from 'react'
import { Text, View, Button, Image } from 'react-native'
import { createAppContainer } from 'react-navigation';
import 'react-native-gesture-handler';
import './src/css/style'
import Home from './src/Screens/Home'



export class App extends Component {
    render() {
        return <Home /> 
    }
}

export default App
