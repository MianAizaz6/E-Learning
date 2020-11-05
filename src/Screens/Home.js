
import React from 'react';
import { View, Text, Button, StyleSheet, Image, ImageBackground } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SignIn from './Sign-in';
import SignUp from './Sign-up';
import Dashboard from './Dashboard';
import '../css/style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import style from '../css/style';



class Home extends React.Component {
    render() {
        return (

            <View style={styles.body}>
              
                   <View style={styles.PicView}>
                   <ImageBackground style={styles.background} resizeMode="stretch"  source={require('../img/background.png')}>
                        <Image  source={require('../img/logo1.png')} />
                    </ImageBackground>
                   </View>

                
                <View style={styles.BtnView}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 2 }}></View>
                        <View style={{ flex: 4 }}>
                            <TouchableOpacity
                                style={styles.Btn1}
                                onPress={() => {
                                    this.props.navigation.navigate('SignUp')
                                }} >
                                <Text style={styles.text}>Get Started</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.Btn1}
                                onPress={() => {
                                    this.props.navigation.navigate('SignIn')
                                }}  >
                                <Text style={styles.text}>SignIn</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 2 }}></View>
                    </View>
                </View>
            </View>
        );
    }
}

const AppNavigator = createStackNavigator({
    Home: {
        screen:Home   ,
    },
    SignIn: {
        screen: SignIn,
    },
    SignUp: {
        screen: SignUp
    },
    Dashboard:{
        screen:Dashboard
    }
}, { headerMode: 'none' });

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignContent: 'center',

    },
    PicView: {
        width:'100%',
        flex: 3,
      
    },
    logo:{
        alignItems:'center',
        justifyContent:'center'
    },
    BtnView: {
        flex: 1,
        flexDirection: 'column'
    },
    Btn1: {


        fontWeight: '500',
        borderRadius: 48,
        marginTop: 20,
        backgroundColor: '#50D88C',
        width: 170,
        height: 40

    },
    background:{
        flex:1,
        width:null,
        height:null,
        alignItems:'center',
        justifyContent:'center'
    },
    text: {
        color: 'white',
        fontSize: 22,
        fontWeight: '500',
        textAlign: 'center',
        marginTop: 5
    },
    back: {
        backgroundColor: "#50D88C",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    }
})