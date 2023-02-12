import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import { Focus } from './src/features/focus/focus';
import { FocusHistory } from './src/features/focus/focusHistory'
import { colors } from './src/utils/colors';
import { spacing } from './src/utils/sizes';
import { Timer } from './src/features/timer/timer';

const STATUS = {
  COMPLETED: 1,
  CANCELLED: 2
}

const App = () => {

  const [focusSubject, setFocusSubject] = useState(null);
  const [focusHistory, setFocusHistory] = useState([])

  const addFocusSubjectHistoryWithStatus = (subject, status) => {
    setFocusHistory([...focusHistory, { subject, status }])
  }

  const onTimerEnd = () => {
    addFocusSubjectHistoryWithStatus(focusSubject, STATUS.COMPLETED)
    setFocusSubject(null)
  }
  const clearSubject = () => {
    addFocusSubjectHistoryWithStatus(focusSubject, STATUS.CANCELLED)
    setFocusSubject(null)
  }

  const onClear=()=>{
    // TODO
  }



  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer focusSubject={focusSubject} onTimerEnd={onTimerEnd}
          clearSubject={clearSubject}
        />
      ) : (
        <>
          <Focus addSubject={setFocusSubject} />
          <FocusHistory focusHistory={focusHistory} onClear={onClear} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? spacing.md : spacing.lg,
    backgroundColor: colors.darkBlue,
  },

});

export default App;
