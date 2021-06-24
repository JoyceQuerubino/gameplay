import React,  {useState} from 'react'; 
import { View } from 'react-native';
import { styles } from './styles';

import { CategorySelect } from '../../components/CategorySelect'; 
import { ButtonAdd } from '../../components/ButtonAdd';
import { Profile } from '../../components/Profile'; 

export function Home(){
    const [category, setCategory] = useState(''); 

    function handleCategorySelect(categoriId: string){
        //Se o id atual é o mesmo clicado, desmarque setando string vazia, 
        //caso contrário atribua um novo ID
        categoriId === category ? setCategory('') : setCategory(categoriId)
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd />
            </View>    

            <View>
                <CategorySelect 
                    categorySelected={category}
                    setCategory={handleCategorySelect}
                />
            </View>   
        </View>
    ); 
}