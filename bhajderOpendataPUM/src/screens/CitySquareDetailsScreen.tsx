import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import {Table, Row, Rows} from 'react-native-table-component';
import {useQuery} from 'react-query';
import {getCitySquareCameras} from '../services/communalUtils';

const CitySquareDetailsScreen = () => {
  const {data, isLoading, isError} = useQuery(
    'citySquare',
    getCitySquareCameras,
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
              data={data.data[0].filter(
                (v: any, i: number) => i !== 0 && i !== 2 && i !== 3,
              )}
              widthArr={[200, 200, 100, 100]}
            />
            <ScrollView>
              <Table>
                <Rows
                  widthArr={[200, 200, 100, 100]}
                  data={data.data
                    .filter((v: any, i: number) => i > 0)
                    .map((row: any) =>
                      row.filter(
                        (v: any, i: number) => i !== 0 && i !== 2 && i !== 3,
                      ),
                    )}
                />
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

export default CitySquareDetailsScreen;
