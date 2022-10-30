import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles'

export function Home() {
    const [cep, setCep] = useState('')
    const [endereco, setEndereco] = useState({ cep: '', localidade: '', uf: ''})
    const [carregando, setCarregando] = useState(false)

    const buscaCep = () => {

        if (cep.replace('-', '').length != 8) {
            alert('CEP inválido')
            return
        }

        setCarregando(true)

        fetch(`http://viacep.com.br/ws/${cep}/json`)
            .then(resposta => resposta.json())
            .then(obj => setEndereco(obj))
            .catch(erro => alert('Ocorreu um erro ao buscar o CEP'))
            .finally(() => setCarregando(false))
        setCep('')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Buscador de CEP</Text>
            <Text style={styles.texto}>Digite seu CEP</Text>
            <TextInput style={styles.input}
                placeholder='Digite aqui' value={cep}
                onChangeText={input => setCep(input)} />
            <TouchableOpacity style={styles.button}
                onPress={buscaCep}>
                    <Text style={styles.textButton}>Buscar</Text>
                </TouchableOpacity>

            {carregando &&
                <Text style={styles.texto}>
                    carregando...
                </Text>}

            {endereco != null && !carregando && (
                <View style={styles.viewRes}>
                    <Text style={styles.textoRes}>{endereco.cep}</Text>
                    <Text style={styles.textoRes}>{endereco.localidade}</Text>
                    <Text style={styles.textoRes}>{endereco.uf}</Text>
                </View>
            )}
        </View>
    )
}