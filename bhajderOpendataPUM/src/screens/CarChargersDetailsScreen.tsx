import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Linking,
  Platform,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Table, TableWrapper, Cell, Row} from 'react-native-table-component';
import {useQuery} from 'react-query';
import {getCarChargers} from '../services/communalUtils';

const CarChargersDetailsScreen = () => {
  const {data, isLoading, isError} = useQuery('carChargers', getCarChargers);

  const openGps = (lat: number, lng: number) => {
    var scheme = Platform.OS === 'ios' ? 'maps:' : 'google.navigation:q=';
    var url = scheme + `${lat}+${lng}`;
    Linking.openURL(url);
  };

  const element = (rowData: any) => (
    <TouchableOpacity onPress={() => openGps(rowData[4], rowData[5])}>
      <TableWrapper style={styles.row}>
        <Text style={{...styles.text, ...styles.lp}}>{rowData[0]}</Text>
        <Text style={{...styles.text, ...styles.name}}>{rowData[1]}</Text>
        <Text style={{...styles.text}}>{rowData[2]}</Text>
        <Text style={{...styles.text}}>{rowData[3]}</Text>
      </TableWrapper>
    </TouchableOpacity>
  );

  return (
    <View style={styles.viewWrapper}>
      {isLoading && <Text>Wczytywanie zawartości...</Text>}
      {isError && <Text>Błąd serwera...</Text>}
      <ScrollView horizontal>
        {data?.data && (
          <View>
            <Row
              style={styles.head}
              data={data.data[0].filter((v: any, i: number) => i < 4)}
              widthArr={[50, 200, 100, 100]}
            />
            <ScrollView>
              <Table>
                {data.data
                  .filter((v: any, i: number) => i > 3)
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
  head: {
    height: 60,
    backgroundColor: '#ccc',
    padding: 10,
    width: '100%',
    fontWeight: '600',
  },
  text: {
    fontWeight: '400',
    padding: 5,
    width: 100,
    textAlign: 'center',
  },
  lp: {
    width: 50,
    textAlign: 'left',
  },
  name: {
    width: 200,
    textAlign: 'left',
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

export default CarChargersDetailsScreen;
