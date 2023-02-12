import React,{useState} from 'react';
import { TouchableOpacity,View, Text, StyleSheet } from 'react-native';
import { spacing } from '../utils/sizes';

export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 125,
  ...props
}) => {
 
  return (
    <TouchableOpacity style={[styles(size).radius, style]} onPress={props.onPress} >
      <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = (size) =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      borderColor: '#fff',
      borderWidth: 2,
      width: size,
      height: size,
      alignItems: 'center',
      justifyContent: 'center',
    },

    text: {
      color: '#fff',
      fontSize: size / 4,
    },
  });
