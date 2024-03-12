import { View, Text, Button } from 'react-native'
import React from 'react'

export default function ToggleText() {
  //let value = "SHOW";

  let [value, setValue] = useState(false);
  function hadleClick() {
    //value = "HIDE";
    setValue(!value)
  }


  return (
    <View>
      <Button onPress={hadleClick} title='Toggle'></Button>
      {(value) ? <Text>Collapsed</Text> : <Text>Expanded</Text>}
    </View>
  )
}