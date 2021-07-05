import React,  {useState} from 'react'; 
import { View, FlatList, Text } from 'react-native';
import { styles } from './styles';

import { CategorySelect } from '../../components/CategorySelect'; 
import { ButtonAdd } from '../../components/ButtonAdd';
import { Profile } from '../../components/Profile'; 
import { ListHeader } from '../../components/ListHeader'; 
import { Appointment } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';

export function Home(){
    const [category, setCategory] = useState(''); 

    //da documentação do discord
    const appointments = [
        {
            id: '1', 
            guild: {
                id: '1', 
                name: 'Lendários', 
                icon: null, 
                owner: true
            },
            category: '1', 
            date: '22/06 ás 20:40', 
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
        },
        {
            id: '2', 
            guild: {
                id: '1', 
                name: 'Lendários', 
                icon: null, 
                owner: true
            },
            category: '1', 
            date: '22/06 ás 20:40', 
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
        }
    ]

    function handleCategorySelect(categoriId: string){
        //Efeito de marca ou desmarca
        //Se o id atual é o mesmo clicado, desmarque setando string vazia, 
        //caso contrário, se o ID atual não é o mesmo que estou clicando, atribua um novo ID
        categoriId === category ? setCategory('') : setCategory(categoriId)
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd />
            </View>   

            <CategorySelect 
                categorySelected={category}
                setCategory={handleCategorySelect}
            />  
            <View style={styles.content}>
                <ListHeader 
                    title="Partidas agendadas"
                    subtitle="Total 6"
                />

                <FlatList 
                    data={appointments}
                    keyExtractor={item => item.id}
                    renderItem= {( { item } ) => (
                        <Appointment data={item} />
                    )}
                    ItemSeparatorComponent={() => <ListDivider />}
                    style={styles.matches}
                    showsVerticalScrollIndicator={false}
                />

            </View>
        </View>
    ); 
}