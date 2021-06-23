import React, {useState} from 'react';
import { 
    Text, 
    View, 
    Image, 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import IlustrationImg from '../../assets/illustration.png'; 
import { styles } from './styles';

import { ButtonIcon } from '../../components/ButtonIcon'

export function Signin() {
    const navegation = useNavigation();

    function handleSigin(){
        navegation.navigate('Home'); 
    }

  return (
    <View style={styles.container}>
        <Image 
            source={IlustrationImg} 
            style={styles.image} 
            resizeMode='stretch'
        />
        <View style={styles.content}>
            <Text style={styles.title}>
                Conecte-se {'\n'}
                e organize suas {'\n'}
                jogatinas
            </Text>
            <Text style={styles.subtitle}>
                Crie grupos para jogar seus games{'\n'}
                favoritos com seus amigos
            </Text>

            <ButtonIcon 
                title='Conectar ao discord'
                activeOpacity={0.7}
                onPress={handleSigin}
            />
        </View>
    </View>
  );
}

