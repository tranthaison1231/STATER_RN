import React, { useState, FC } from 'react';
import { View, Text } from 'react-native';
import SearchBar from 'components/SearchBar';

const SearchScreen: FC = () => {
  const [term, setTerm] = useState('');
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm): void => setTerm(newTerm)}
        onTermSubmit={(): void => console.log('submit')}
      />
      <Text> Hello SearchScreen </Text>
      <Text>{term}</Text>
    </View>
  );
};

export default SearchScreen;
