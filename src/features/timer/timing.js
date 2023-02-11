import React from 'react';
import { View, StyleSheet } from 'react-native';

import { RoundedButton } from '../../components/RoundedButton';

export const Timing = ({changeTime}) => {


  return (
    <>
      <View style={styles.button}>
        <RoundedButton size={75} title={10} onPress={()=>
        changeTime(10)}/>
      </View>
      <View style={styles.button}>
        <RoundedButton size={75} title={20} onPress={()=>
        changeTime(20)}/>
      </View>
      <View style={styles.button}>
        <RoundedButton size={75} title={30} onPress={()=>
        changeTime(30)}/>
      </View>
    
    </>
  );
};
const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
  },
});
