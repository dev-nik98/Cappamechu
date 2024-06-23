import React,{useEffect,useState} from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';

const Timer = () => {
    const [seconds, setSeconds] = useState(0); 
    const [isRunning, setIsRunning] = useState(false);
  
    useEffect(() => {
      let interval = null;
      if (isRunning) {
        interval = setInterval(() => {
          setSeconds(prevSeconds => prevSeconds + 1) 
        }, 1000)
      } else  {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [isRunning]);
  





    const startTimer = () => {
        setIsRunning(true);
       
      };
      
      const resetTimer = () => {
        setIsRunning(false);
        setSeconds(0);
      };
  return (
    <View style={{padding:10,flex :1}}>
        <Text style={styles.timerText}>{seconds}</Text>
      <TouchableOpacity style={styles.startButton} onPress={startTimer}>
        <Text style={styles.startButtonText}>Start</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.resetButton} onPress={resetTimer}>
        <Text style={styles.resetButtonText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  startButton: {
    width:100,
    backgroundColor: 'green',
    paddingVertical: 15,
    paddingHorizontal: 10,
marginBottom:10,
    borderRadius: 10,
  },
 
 resetButton: {
    width:100,
    backgroundColor: 'blue',
    paddingVertical: 15,
    paddingHorizontal: 10,

    borderRadius: 10,
  },
  startButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
 
  resetButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  timerText: {
    fontSize: 48,
    marginBottom: 20,
    color:'black'
  },
});

export default Timer;

