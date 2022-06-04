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
import {ActivityIndicator, Colors} from 'react-native-paper';
import {Navigation} from 'react-native-navigation';

const App = props => {
  const [posts, setData] = React.useState([]);
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
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        // alert(item.id);
        // fetchComments(item.id);
        Navigation.push('AppStack', {
          component: {
            name: 'DetailsScreen',
            passProps: {
              id: item,
            },
          },
        });
      }}>
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
          () => <ActivityIndicator animating={true} color={Colors.red800} />
        ) : (
          <FlatList data={posts} renderItem={renderItem} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  item: {
    flex: 1,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
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
