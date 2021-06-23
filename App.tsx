import React from 'react';
import { StatusBar } from 'react-native'; 
import { useFonts } from 'expo-font'; 
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'; 
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani'; 
import AppLoading from 'expo-app-loading'; 

import { Routes } from './src/routes';
import { Background } from './src/components/Background';

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular, 
    Inter_500Medium, 
    Rajdhani_500Medium, 
    Rajdhani_700Bold
  });

  //Para que a tela splash continue aparecendo até que as fonts sejam baixadas
  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <Background>
    <Routes />
    <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
    </Background>
  );
}

