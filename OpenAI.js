import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

function OpenAI (props) {
    const [respuesta, setRespuesta] = useState('')

    useEffect(()=>{
       
       fetch('https://api.openai.com/v1/chat/completions',{
        method: 'POST',
        headers:{
            "Content-Type":"application/json",
            "Authorization": "Bearer sk-proj-vkqAa24kyWR1Vy0MR6NZT3BlbkFJXv3kYan3lr0TLRVn7eiA"
        },
        body: JSON.stringify({
            "model": "gpt-3.5-turbo",
            "messages": [{"role": "user", "content": props.pregunta}],
            "temperature": 0,
            "max_tokens": 50
        })
       })
       .then(response => response.json())
       .then(data => {setRespuesta(data.choices[0].message.content)})
    },[props.pregunta])

    return(
        <View>
            <Text style={{fontSize:50}}>
                {respuesta}
            </Text>
        </View>
    )

}

export default OpenAI;

