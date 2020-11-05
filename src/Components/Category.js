
import React,{useState,useEffect} from 'react';
import { View, Text,StyleSheet,Image,FlatList,TouchableOpacity,SafeAreaView,  } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

 const Category = (props) => {
//     const [courses,update]=useState([]);
     
    
    return (

        <View style={styles.container}>
            <Text style={styles.Title}>{props.Title}</Text>
            <View style={styles.Line} />

        {/* Horizontal View */}

        <View style={styles.Horizontal} >
        
       {
        props.Cat.map((val)=>(
            <SafeAreaView>
                <ScrollView horizontal={true}>
                <View style={styles.Item}>
                < TouchableOpacity activeOpacity={0.8} >
                    <Image style={styles.logoViews} source={val.icon} /> 
                    </TouchableOpacity>
                    <Text style={styles.caption}>{val.name}</Text>
                
                    </View>
                </ScrollView>
            </SafeAreaView>
          
           
        ))   
       }

        </View>
        {/* Horizontal View */}
       
        </View>

    );
}
const styles=StyleSheet.create({

container:{
    height:88,
    width:325,
    // backgroundColor:"green",
    alignSelf:"center",
   
    marginBottom:36
},
Line:{
    
        borderBottomColor: '#D8D6D6',
        borderBottomWidth: 5,
      
    },
    Horizontal:{
            flexDirection: 'row',
            marginTop:10,
            justifyContent:"space-between",

    },
    Item:{

        alignItems:'center',
        justifyContent:"center"
    },
    Title:{
        fontSize:17
    },
    logoView: {
        width: Platform.OS === 'ios' ? 32 : 34,
        height: Platform.OS === 'ios' ? 32 : 34,
        marginTop: hp('2'),
        alignSelf: 'center',
      },
    caption:{
           
    }


})

export default Category;