import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(({data}) => setData(data))
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  const renderItem = ({item}) => (
    <TouchableOpacity onPress={alert(item.id)}>
      <View style={styles.post}>
        <View style={styles.postheader}>
          <Text style={styles.id}>{item.id} - </Text>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <Text style={styles.body}>{item.body}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        {loading ? (
          () => <ActivityIndicatorView />
        ) : (
          <FlatList data={data} renderItem={renderItem} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  post: {
    margin: 4,
  },
  postheader: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#FFFFFF',
  },
  id: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  title: {
    fontWeight: 'bold',
  },
});
