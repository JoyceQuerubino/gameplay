import React, {useState} from 'react';
import { 
    Text, 
    View, 
    Image, 
    StatusBar
} from 'react-native';

import IlustrationImg from '../../assets/illustration.png'; 
import { styles } from './styles';

import { ButtonIcon } from '../../components/ButtonIcon'


export function Signin() {
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
            />
        </View>
    </View>
  );
}

