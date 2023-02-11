import React, { useState } from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';
import { fontSizes, spacing } from '../../utils/sizes';
import { colors } from '../../utils/colors';

export const Focus = ({ addSubject }) => {
  const [temp, setTemp] = useState(null);
  const onPress = () => addSubject(temp);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What would you like to focus on ?</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            onSubmitEditing={({ nativeEvent }) => {
              addSubject(nativeEvent.text);
            }}
            onChange={({ nativeEvent }) => {
              setTemp(nativeEvent.text);
            }}
          />
          <RoundedButton size={50} title="+" onPress={onPress} />
        </View>
      </View>
    </View>
  );
};

//
// Styling & MakeUp
//

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 0.5,
    padding: spacing.md,
    justifyContent: 'center',
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: fontSizes.lg,
  },
  inputContainer: {
    paddingTop: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    marginRight: spacing.sm,
    flex: 1,
  },
});