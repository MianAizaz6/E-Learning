import React from 'react'
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const SignIn = (props) => {
    return (
        <View style={styles.body}>
            <View style={styles.PicView}>
                <Image source={require('../img/logo.png')} />
            </View>
            <View style={styles.card}>
                <Text style={styles.heading} >Login to your account</Text>
                <Text style={styles.text} >Please login to your account</Text>
                <View style={{ marginTop: 20, marginLeft: 20 }}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email Address"
                    />
                </View>
                <View style={{ marginTop: 20, marginLeft: 20 }}>
                    <TextInput type="password"
                        style={styles.input}
                        placeholder="Password"
                    />
                </View>
                <View style={{ marginTop: 20, marginLeft: 20 }}>
                    <TouchableOpacity
                     onPress={()=>{props.navigation.navigate('Dashboard')}}
                        style={styles.Btn1}
                    >
                        <Text style={styles.textBtn}>Sign in</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 20, marginLeft: 20 }}>
                    <Text style={{ color: '#50D88C', textAlign: 'right', marginRight: 15 }}>Forgot Password?</Text>
                </View>
                <View style={{ marginTop: 20, marginLeft: 20 }}>
                    <Text style={{ color: 'grey', textAlign: 'center' }}>or Login in</Text>
                </View>
                <View style={{ marginTop: 20, marginLeft: 20, flexDirection: 'row' }}>
                    <Icon
                        style={styles.icon}
                        name='facebook'
                        color={'blue'}
                        size={20}
                    />
                    <Icon
                        name='google'
                        size={20}
                        color={'red'}
                        style={{ marginLeft: 30 }}
                    />
                    <Icon
                        name='twitter'
                        size={20}
                        color={'skyblue'}
                        style={{ marginLeft: 30 }}
                    />
                </View>
                <View style={{ marginTop: 20, marginLeft: 20 }}>
                    <Text style={{ textAlign: 'center', }}>
                        <Text style={{ color: '#181818' }}>Dont have an account? </Text>
                      <TouchableOpacity 
                      onPress={()=>{props.navigation.navigate('SignUp')}}
                      >
                      <Text style={{ color: '#50D88C',margin:-3.5 }}>Create new now !</Text>
                      </TouchableOpacity>
                    </Text>
                </View>
                <View style={{ marginTop: 20, marginLeft: 10 }}>
                    <Text>
                        <Text style={{ color: '#181818' }}>By Signing you are agree with</Text>
                        <Text style={{ color: '#50D88C' }}>Term and Conditions</Text>
                    </Text>
                </View>
            </View>

        </View>
    )
}

export default SignIn

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignContent: 'center',


    },
    PicView: {
        flex: 3,
        alignItems: 'center',
        backgroundColor: "#50D88C",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    },
    card: {
        flex: 5,
        backgroundColor: 'white',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        marginTop: -120,
        width: wp('92%'),
        marginLeft: 15,

        shadowColor: "#50D88C",
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 0.50,
        shadowRadius: 3.84,
        elevation: 5,
    },
    heading: {
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 15
    },
    text: {
        color: 'grey',
        marginTop: 15,
        textAlign: 'center'
    },
    input: {
        height: 40,
        borderColor: '#50D88C',
        borderRadius: 26,
        borderWidth: 1,
        width: 300,
        textAlign: 'center'
    },
    Btn1: {
        fontWeight: '500',
        borderRadius: 28,
        backgroundColor: '#50D88C',
        width: 300,
        height: 40

    },
    textBtn: {
        color: 'white',
        fontSize: 22,
        fontWeight: '500',
        textAlign: 'center',
        marginTop: 5
    },
    icon: {
        marginLeft: 95

    }

})
