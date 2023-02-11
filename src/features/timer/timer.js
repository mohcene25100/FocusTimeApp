import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { useKeepAwake} from 'expo-keep-awake'

import { colors } from '../../utils/colors';
import { fontSizes, spacing } from '../../utils/sizes';
import { CountDown } from '../../components/CountDown';
import { RoundedButton } from '../../components/RoundedButton';
import { Timing } from './timing';

export const Timer = ({ focusSubject }) => {
  useKeepAwake()
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(3);
  const onPress = () => setIsPaused((value) => !value);
  const onProgress = (progress) => setProgress(progress);
  const changeTime = (time) => {
    setMinutes(time);
    setProgress(1);
    setIsPaused(true)
  };

  return (
    <View style={styles.container}>
      <CountDown
        minutes={minutes}
        isPaused={isPaused}
        onProgress={onProgress}
      />
      <View style={styles.title}>
        <Text style={styles.title}>Focusing on: </Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
      <View>
        <ProgressBar
          progress={progress}
          color={colors.lightBlue}
          style={{ height: 10 }}
        />
      </View>
      <View style={styles.switchButton}>
        <Timing changeTime={changeTime} />
      </View>
      <View style={styles.switchButton}>
        {isPaused ? (
          <RoundedButton title="start" onPress={onPress} />
        ) : (
          <RoundedButton title="pause" onPress={onPress} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    flex: 0.2,
    color: colors.white,
    textAlign: 'center',
    fontSize: fontSizes.md,
  },
  task: {
    color: colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize:fontSizes.lg,
  },
  switchButton: {
    flex: 0.2,
    flexDirection: 'row',
    padding: spacing.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
