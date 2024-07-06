import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SearchBar = () => {
  return (
    <View>
          <SearchBar
        value={value}
        onChangeText={setValue}
        placeholder="Search"
        theme="light"
        platform="android"
        style={styles.searchBar}
    >
        {loading ? (
            <ActivityIndicator style={{ marginRight: 10 }} />
        ) : undefined}
    </SearchBar>;
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({})