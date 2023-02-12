import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { spacing, fontSizes } from '../utils/sizes';
import { colors } from '../utils/colors';

const minutesToMillis = (min) => min * 60 * 1000;
const formatTime = (time) => (time < 10 ? `0${time}` : time);
export const CountDown = ({
  minutes,
  isPaused,
  onProgress,
  onEnd,
}) => {
  const [millis, setMillis] = useState(null);
  const minute = Math.floor(millis / 60 / 1000) % 60;
  const seconds = Math.floor(millis / 1000) % 60
  const interval = useRef(null)
  
  const countDown = () => {
    setMillis((time) => {
      if (time === 0) {
        clearInterval(interval.current)
        onEnd()
        return time;
      }
      let timeLeft = time - 1000;
      let min = minutesToMillis(minutes)
      onProgress(timeLeft / min)
      return timeLeft
    });
  };

  useEffect(() => {
    if (minutes)
      setMillis(minutesToMillis(minutes))
  }, [minutes])

  useEffect(() => {
    if (isPaused) {

      return
    }

    interval.current = setInterval(countDown, 1000)

    return () => clearInterval(interval.current)
  }, [isPaused])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`${formatTime(minute)}:${formatTime(
        seconds
      )}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.4,
    alignItems: 'center',
    padding: spacing.sm,
  },
  text: {
    fontSize: fontSizes.xxxl,
    fontWeight: 'bold',
    color: colors.white,
    padding: spacing.lg,
    backgroundColor: 'rgba(94,132,226,0.3)',
    textAlign: 'center',
  },
});
