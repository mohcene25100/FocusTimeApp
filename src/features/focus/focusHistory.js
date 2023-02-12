import React, { useState } from 'react'
import { View, StyleSheet, FlatList, Text, SafeAreaView } from 'react-native'

import { spacing, fontSizes } from '../../utils/sizes'
import { colors } from '../../utils/colors'
import { RoundedButton } from '../../components/RoundedButton'

export const FocusHistory = ({ focusHistory, onClear }) => {

    const clearHistory = () => {
        onClear()
    }
    const HistoryItem = ({ item, index }) => {
        return (
            <Text style={styles.historyItems(item.status)}>
                the subject {index} is {JSON.stringify(item.subject)}

            </Text>
        )
    }

    return (
        <>
            <SafeAreaView style={styles.container}>
                {/* focusHistory greater than zero  */}
                {!!focusHistory.length ? (
                    <View  style={{ flex: 1 }}>

                        <Text style={styles.title}>Our History of Focus Things
                        </Text>
                        {/* !!!!!  Doesn't SCROLL !!!!! */}

                        <FlatList
                            contentContainerStyle={{  alignItems: 'center' }}
                            data={focusHistory}
                            renderItem={HistoryItem}


                        />

                        
                    </View>

                ) : (
                    <Text style={styles.title}>Your History Is Empty !</Text>
                )}


            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    historyItems: (status) => ({
        color: status > 1 ? 'red' : 'green',
        fontSize: fontSizes.md,
    }),
    title: {
        color: colors.white,
        fontSize: fontSizes.md,


    }
})