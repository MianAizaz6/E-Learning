// import React from 'react';
// import { View, StyleSheet, Text, Image, Platform } from 'react-native';

// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';
// import { TouchableOpacity } from 'react-native-gesture-handler';

// const SubjectBox = ({ Name }) => {
//   return (
//     <View>
//       < TouchableOpacity activeOpacity={0.8} >
        
//           <View>
//             <Image
//               source={require('../img/chem.png')}
//               style={styles.logoView}
//             />
//           </View>
       
//         <Text style={styles.subjectName}> {Name} </Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   boxView: {
//     flex: 1,
//     width: wp('20'),
//     height: hp('12'),
//     borderRadius: 10,
//     flexDirection: 'row',
//     margin: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0.5, height: 0.5 },
//     shadowOpacity: 0.5,
//     shadowRadius: 3,
//     elevation: 5,
//     opacity: 0.8,
//   },
//   boxCircleView: {
//     backgroundColor: 'white',
//     height: Platform.OS === 'ios' ? 70 : 50,
//     width: Platform.OS === 'ios' ? 70 : 50,
//     borderRadius: Platform.OS === 'ios' ? 70 / 2 : 50 / 2,
//     marginTop: hp('1'),
//     marginLeft: wp('3'),
//   },
//   logoView: {
//     width: Platform.OS === 'ios' ? 32 : 34,
//     height: Platform.OS === 'ios' ? 32 : 34,
//     marginTop: hp('2'),
//     alignSelf: 'center',
//   },
//   subjectName: {
//     color: 'black',
//     fontSize: 15,
//     fontWeight:'700',
//     marginTop: hp('1'),
//     alignItems: 'center',
//     justifyContent: 'center',
//     alignSelf: 'center',
//     marginLeft: wp('2'),
//   },
// });

// export default SubjectBox;
