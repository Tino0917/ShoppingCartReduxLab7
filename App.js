import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store';
import ProductListScreen from './src/screens/ProductListScreen';
import CartScreen from './src/screens/CartScreen';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

function App() {
  const [currentScreen, setCurrentScreen] = useState('products');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'cart':
        return <CartScreen />;
      case 'products':
      default:
        return <ProductListScreen />;
    }
  };

  return (
    <Provider store={store}>
      <View style={styles.container}>
        {renderScreen()}
        <View style={styles.tabBar}>
          <TouchableOpacity
            style={[styles.tab, currentScreen === 'products' && styles.activeTab]}
            onPress={() => setCurrentScreen('products')}
          >
            <Text style={[styles.tabText, currentScreen === 'products' && styles.activeTabText]}>
              Products
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, currentScreen === 'cart' && styles.activeTab]}
            onPress={() => setCurrentScreen('cart')}
          >
            <Text style={[styles.tabText, currentScreen === 'cart' && styles.activeTabText]}>
              Cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#ecf0f1',
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#3498db',
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#7f8c8d',
  },
  activeTabText: {
    color: 'white',
  },
});

export default App;