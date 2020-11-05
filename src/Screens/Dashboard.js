import React from 'react'
import { View, Text,StyleSheet, SafeAreaView, ScrollView, Image,FlatList} from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title, } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Category from '../Components/Category';
import Class1_12 from '../Data/Courses';
import College from '../Data/College';
import Foregin from '../Data/Foregin';
import Competative from '../Data/Competative';


const Dashboard = () => {
    
    return (
        <View style={{flex:1}}>
            <View style={{flex:1,}} >
           <Container style={{backgroundColor:'#50D88C'}}>
            <Header transparent>
            <Left>
            <Button transparent>
                <Icon name='menu' />
                </Button>
            </Left>
            <Body>
                <Title>Header</Title>
            </Body>
            <Right>
            <Button transparent>
                <Icon name='search' />
                </Button>
            </Right>
            </Header>
    
      </Container>
        </View>   
        <View style={{flex:8}}>
        <View style={styles.back} >
                <Text style={styles.header_text}>Hi, What would </Text>
                <Text  style={styles.header_text}>You learn</Text>
                <Text  style={styles.header_text}>Today?</Text>
                <Text style={styles.course_text} >Course Subjects</Text>
          </View>
          <View style={styles.couse_section}>
         <SafeAreaView>
            <ScrollView>
            <Category Title="Class 1-12" Cat={Class1_12} />
            <Category Title="Collage Entrance" Cat={College}/>
            <Category Title="Foriegn Exams" Cat={Foregin} />
            <Category Title="Compititive Exams" Cat={Competative}/>
            </ScrollView>
         </SafeAreaView>
          
         
              
           </View>
         </View>  
       
         </View>
    )
}

export default Dashboard

const styles = StyleSheet.create({
  back:{
    flex:1.2,
    backgroundColor: '#50D88C',
    alignItems:'center', 
    borderBottomLeftRadius:32,
    borderBottomRightRadius:32
  },
  courseMainTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingTop: 10,
    marginTop:25,
    borderBottomWidth:4,
    borderBottomColor:'lightgrey'
  },


  couse_section:{
      flex:3.2,
      backgroundColor:'white',
      justifyContent:'center',
      alignContent:'center'

  },
  header_text:{
      color:'white',
      fontSize:22,
      fontWeight:'600',
  },
  course_text:{
    color:'white',
    fontSize:22,
    fontWeight:'600',
    marginTop:10
  },
  card: {
    flex:0.7,
    marginLeft:20,
    backgroundColor: '#f4f4f4',
    borderRadius:30,
    marginRight:15,
    width: wp('16%'),
    height:hp('26%'),
    shadowColor: "#50D88C",
    shadowOffset: {
        width: 1,
        height: 2,
    },
    shadowOpacity: 0.50,
    shadowRadius: 3.84,
    elevation: 5,
},

})