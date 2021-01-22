import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchYelp, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    //price === '$' || "$$" || '$$$'
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchYelp(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <ResultsList results={filterResultsByPrice('$')} title='Cost Effective' />
      <ResultsList
        results={filterResultsByPrice('$$')}
        title='Little Pricier'
      />
      <ResultsList results={filterResultsByPrice('$$$')} title='Big Spender' />
      <ResultsList results={filterResultsByPrice('$$$$')} title='High Roller' />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
