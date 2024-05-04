import {View, Image} from 'react-native';
import { useEffect, useState } from 'react';

function ImagenRickAndMorty(props){
    //Esto es un hook llamado useState
    //permite que podamos recordar un objeto o um valor
    //imagenPersonaje es la variable o el objeto
    //setImagenPersonaje es la funcion que nos permite cambiar el valor de imagenPersonaje
    const [imagenPersonaje, setImagenPersonaje] = useState('')
    const [nombrePersonaje, setNombrePersonaje] = useState('')

    useEffect(()=>{

        fetch('https://rickandmortyapi.com/api/character/'+props.id)
        .then(response => response.json())
        .then(data => {
            setImagenPersonaje(data.image)
            setNombrePersonaje(data.name)
        })
    },[props.id])

    return(
        <View>
            
            <Image 
            style={{width: 100, height: 100}}
            source={{uri: imagenPersonaje}}/>
           

        </View>
    )
}


export default ImagenRickAndMorty;