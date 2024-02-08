import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

function LowerCaseText(props){
  return (
    <Text>{props.text.toLowerCase()}</Text>
  );
}

function Rating(props){

  let str = ""

  for (let index = 0; index < props.value; index++) {
    str+= "❤️"    
  }


  return (
    <Text>{str}</Text>
  )
}


export default function App() {
  return (
    <View style={styles.container}>
      <LowerCaseText text={"SAGAR"}/>
      <LowerCaseText text={"Amit"}/>
      <LowerCaseText text={"Jay"}/>

      <Rating value={3}/>
      <Rating value={2}/>
      <Rating value={5}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
