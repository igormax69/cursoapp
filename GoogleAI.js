import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';


function GoogleAI () {
    const [respuesta2, setRespuesta2] = useState('')

    useEffect(()=>{
       
       fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyB9Tj7aedY2ncIBE85FjYZ7GoYgPpYZWdk',{
        method: 'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            "contents": [{
            "parts":[{
            "text": "Write a story about a magic backpack."}]}]}
        )
       })
       .then(response => response.json())
       .then(data => {setRespuesta2(data.choices[0].message.content)})
    })


    return(
        <View>
            <Text>
                {respuesta2}
            </Text>
        </View>
    )

}

export default GoogleAI;
