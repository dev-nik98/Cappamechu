import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Text,
  Linking,
  Image,
} from 'react-native';
import {Camera, useCameraDevice} from 'react-native-vision-camera';

function App() {
  const camera = useRef(null);
  const device = useCameraDevice('back');

  const [showCamera, setShowCamera] = useState(true);
  const [imageSource, setImageSource] = useState('');

  useEffect(() => {
    async function getPermission() {
      const newCameraPermission = await Camera.requestCameraPermission();
      console.log(newCameraPermission);
    }
    getPermission();
  }, []);

  const capturePhoto = async () => {
    if (camera.current !== null) {
      const photo = await camera.current.takePhoto({});
      setImageSource(photo.path);
      setShowCamera(false);
      console.log(photo.path);
    }
  };

  if (device == null) {
    return <Text>Camera not available</Text>;
  }

  return (
    <View style={styles.container}>
      {showCamera == true ? (
        <>
       
          <Camera
            style={StyleSheet.absoluteFill}
            ref={camera}
            isActive={showCamera}
            device={device}
            photo={true}
          />
          <TouchableOpacity
            style={{
              borderRadius: 40,
              height: 80,
              width: 80,
              backgroundColor: 'white',
              borderWidth: 5,
              borderColor: 'gray',
              position: 'absolute',
             bottom:0
            }}
            onPress={capturePhoto}
          />
        </>
      ) : null}
      {imageSource !== '' ? (
        <>
          <Image
            source={{uri: `file://${imageSource}`}}
            style={StyleSheet.absoluteFill}
          />
          <TouchableOpacity
            style={{
              height: 40,
              width: 100,
              backgroundColor: 'white',
              borderWidth: 5,
              borderColor: 'gray',
              position: 'absolute',
              bottom: 10,
            }}
            onPress={()=>{
                setImageSource('')
                setShowCamera(true);
            }
            }
          />
        </>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'gray',
  },
  backButton: {
    backgroundColor: 'rgba(0,0,0,0.0)',
    position: 'absolute',
    justifyContent: 'center',
    width: '100%',
    top: 0,
    padding: 20,
  },
  buttonContainer: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    bottom: 0,
    padding: 20,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  camButton: {
    height: 80,
    width: 80,
    borderRadius: 40,
    //ADD backgroundColor COLOR GREY
    backgroundColor: '#B2BEB5',

    alignSelf: 'center',
    borderWidth: 4,
    borderColor: 'white',
  },
  image: {
    width: '100%',
    height: '100%',
    aspectRatio: 9 / 16,
  },
});

export default App;
