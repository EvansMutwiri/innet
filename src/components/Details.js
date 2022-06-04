import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import axios from 'axios';
import {ActivityIndicator, Colors, TouchableRipple} from 'react-native-paper';

const Details = props => {
  const {id} = props.id;
  const [post, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then(({data}) => setData(data))
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <View>
      {loading ? (
        () => <ActivityIndicator animating={true} color={Colors.red800} />
      ) : (
        <TouchableRipple
          style={styles.container}
          onPress={() => {}}
          rippleColor="rgba(0, 0, 0, .32)">
          <>
            <Text style={styles.id}>{post.id}</Text>
            <Text style={styles.title}>{post.email}</Text>
            <Text style={styles.post}>{post.body}</Text>
          </>
        </TouchableRipple>
      )}
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  post: {
    padding: 10,
  },
  postheader: {
    flexDirection: 'row',
  },
  id: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 18,
  },
});
