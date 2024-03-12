import { StatusBar, StyleSheet, View } from 'react-native';
import ProductList from './ProductList';
import Child1 from './Child1';
import CallToApi from './CallToApi';
import { Provider } from 'react-redux';
import { store } from './store';
export default function App() {

  let paddingFromTop = StatusBar.currentHeight ;

  return (
    <View style={{...styles.container,paddingTop:paddingFromTop}}>
       <Provider store={store}>
            <Child1/>
            <ProductList/>
       </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    color: 'red',
  }
});
