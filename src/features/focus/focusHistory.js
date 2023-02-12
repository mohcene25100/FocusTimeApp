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
			<View style={styles.item}>
				<Text style={styles.historyItems(item.status)}>
					{JSON.stringify(item.subject)}

				</Text>
			</View>

		)
	}

	return (

		<SafeAreaView style={styles.container}>
			{/* focusHistory greater than zero  */}
			{!!focusHistory.length ? (
				<>
					<Text style={styles.title}>Your History of FocusThings
					</Text>
					<FlatList
						data={focusHistory}
						renderItem={HistoryItem}
					/>
					<RoundedButton size={75} title={'Clear'} onPress={clearHistory} />
				</>
			) : (
				<Text style={styles.title}>Your History Is Empty !</Text>
			)}


		</SafeAreaView>

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
		fontWeight: 'bold'
	}),
	title: {
		color: colors.white,
		fontSize: fontSizes.lg,


	},
	item: {
		backgroundColor: colors.darkBlue,
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16,
		alignItems: 'center'
	},
})