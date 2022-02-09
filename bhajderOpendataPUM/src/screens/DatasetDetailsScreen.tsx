import React from 'react';
import {
  ScrollView,
  View,
  Text,
  useColorScheme,
  Linking,
  Platform,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Table, TableWrapper, Cell} from 'react-native-table-component';
import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import {useQuery} from 'react-query';

const DatasetDetailsScreen = ({
  query,
  queryKey,
}: {
  query: () => void;
  queryKey: string;
}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const {data, isLoading, isError} = useQuery(queryKey, query);

  const openGps = (lat: number, lng: number) => {
    var scheme = Platform.OS === 'ios' ? 'maps:' : 'google.navigation:q=';
    var url = scheme + `${lat}+${lng}`;
    Linking.openURL(url);
  };

  const element = (rowData: any) => (
    <TouchableOpacity onPress={() => openGps(rowData[2], rowData[3])}>
      <View>
        <Text>{rowData[0]}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.viewWrapper}>
      {isLoading && <Text>Wczytywanie zawartości...</Text>}
      {isError && <Text>Błąd serwera...</Text>}
      <ScrollView horizontal>
        {data?.data && (
          <View>
            <ScrollView>
              <Table>
                {data.data
                  .filter((v: any, i: number) => i > 0)
                  .map((rowData: any[], index: number) => (
                    <TableWrapper key={index} style={styles.row}>
                      <Cell data={element(rowData)} textStyle={styles.text} />
                    </TableWrapper>
                  ))}
              </Table>
            </ScrollView>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  viewWrapper: {
    padding: 20,
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#ffffff',
  },
  head: {
    height: 50,
    backgroundColor: '#ccc',
    padding: 10,
    width: '100%',
  },
  text: {
    fontWeight: '800',
  },
  dataWrapper: {
    marginTop: -1,
  },
  row: {
    flexDirection: 'row',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#aaa',
    width: '100%',
  },
});

export default DatasetDetailsScreen;
