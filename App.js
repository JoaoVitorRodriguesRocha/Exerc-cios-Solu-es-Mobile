import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  const [displayValue, setDisplayValue] = useState('');
  const [firstValue, setFirstValue] = useState(null);
  const [secondValue, setSecondValue] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleNumberPress = (value) => {
    setDisplayValue(displayValue + value);
  };

  const handleOperatorPress = (op) => {
    setFirstValue(parseFloat(displayValue));
    setOperator(op);
    setDisplayValue('');
  };

  const handleClear = () => {
    setDisplayValue('');
    setFirstValue(null);
    setSecondValue(null);
    setOperator(null);
  };

  const handleEqualPress = () => {
    setSecondValue(parseFloat(displayValue));
    if (operator && firstValue != null && displayValue !== '') {
      let result;
      switch (operator) {
        case '+':
          result = firstValue + parseFloat(displayValue);
          break;
        case '-':
          result = firstValue - parseFloat(displayValue);
          break;
        case '*':
          result = firstValue * parseFloat(displayValue);
          break;
        case '/':
          result = firstValue / parseFloat(displayValue);
          break;
        default:
          return;
      }
      setDisplayValue(result.toString());
      setFirstValue(result);
      setOperator(null);
    }
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text style={styles.display}>{displayValue}</Text>
        <View style={styles.buttonRow}>
          <Button mode="contained" onPress={() => handleNumberPress('1')} style={styles.button}>1</Button>
          <Button mode="contained" onPress={() => handleNumberPress('2')} style={styles.button}>2</Button>
          <Button mode="contained" onPress={() => handleNumberPress('3')} style={styles.button}>3</Button>
          <Button mode="contained" onPress={() => handleOperatorPress('+')} style={styles.button}>+</Button>
        </View>
        <View style={styles.buttonRow}>
          <Button mode="contained" onPress={() => handleNumberPress('4')} style={styles.button}>4</Button>
          <Button mode="contained" onPress={() => handleNumberPress('5')} style={styles.button}>5</Button>
          <Button mode="contained" onPress={() => handleNumberPress('6')} style={styles.button}>6</Button>
          <Button mode="contained" onPress={() => handleOperatorPress('-')} style={styles.button}>-</Button>
        </View>
        <View style={styles.buttonRow}>
          <Button mode="contained" onPress={() => handleNumberPress('7')} style={styles.button}>7</Button>
          <Button mode="contained" onPress={() => handleNumberPress('8')} style={styles.button}>8</Button>
          <Button mode="contained" onPress={() => handleNumberPress('9')} style={styles.button}>9</Button>
          <Button mode="contained" onPress={() => handleOperatorPress('*')} style={styles.button}>*</Button>
        </View>
        <View style={styles.buttonRow}>
          <Button mode="contained" onPress={handleClear} style={styles.button}>C</Button>
          <Button mode="contained" onPress={() => handleNumberPress('0')} style={styles.button}>0</Button>
          <Button mode="contained" onPress={handleEqualPress} style={styles.button}>=</Button>
          <Button mode="contained" onPress={() => handleOperatorPress('/')} style={styles.button}>/</Button>
        </View>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  display: {
    fontSize: 40,
    marginBottom: 20,
    textAlign: 'right',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    flex: 1,
    margin: 5,
  },
});
