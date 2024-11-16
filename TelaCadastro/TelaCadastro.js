import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  SafeAreaView,
  ScrollView,
  ImageBackground,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MostrarDados from '../TelaCadastro/MostrarDados';

const Cadastro = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState('');
  const [cep, setCep] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');
  const [nomeDaEmpresa, setNomeDaEmpresa] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [erros, setErros] = useState({
    nome: '',
    sobrenome: '',
    dataNascimento: '',
    endereco: '',
    numero: '',
    cep: '',
    cidade: '',
    estado: '',
    cpf: '',
    rg: '',
    nomeDaEmpresa: '',
    cnpj: '',
  });

  const validarCampos = () => {
    let errosTemp = {};

    if (!nome) {
      errosTemp.nome = 'Digite seu nome';
    }

    if (!sobrenome) {
      errosTemp.sobrenome = 'Digite seu sobrenome';
    }

    if (!dataNascimento) {
      errosTemp.dataNascimento = 'Digite sua data de nascimento';
    }

    if (!endereco) {
      errosTemp.endereco = 'Digite seu endereço';
    }

    if (!numero) {
      errosTemp.numero = 'Digite o número';
    }

    if (!cep) {
      errosTemp.cep = 'Digite o CEP';
    }

    if (!cidade) {
      errosTemp.cidade = 'Digite a cidade';
    }

    if (!estado) {
      errosTemp.estado = 'Digite o estado';
    }
    if (!cpf) {
      errosTemp.cpf = 'Digite o CPF';
    }
    if (!rg) {
      errosTemp.rg = 'Digite o RG';
    }
    if (!nomeDaEmpresa) {
      errosTemp.nomeDaEmpresa = 'Digite o Nome da Empresa';
    }
    if (!cnpj) {
      errosTemp.cnpj = 'Digite o CNPJ';
    }

    setErros(errosTemp);

    return Object.keys(errosTemp).length === 0;
  };

  const handleSalvar = async () => {
    const dados = {
      id: '0',
      nome,
      sobrenome,
      dataNascimento,
      endereco,
      numero,
      cep,
      cidade,
      estado,
      cpf,
      rg,
      nomeDaEmpresa,
      cnpj,
    };

    if (validarCampos()) {
      try {
        dados.id = Math.floor(Math.random() * 10000) + '';

        await AsyncStorage.setItem(dados.id, JSON.stringify(dados), () => {
          console.warn('Dados salvos no AsyncStorage com sucesso!');
          navigation.navigate('MostrarDados', { dados });
        });
      } catch (error) {
        console.warn('Erro ao salvar os dados no AsyncStorage:', error);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/planoDeFundo.png')}
        style={styles.backgroundImage}>
        <ScrollView>
          <View style={styles.formContainer}>
            <Text style={styles.textoPrincipal}>Queremos te conhecer!</Text>

            {erros.nome !== '' ? (
              <Text style={styles.erro}>{erros.nome}</Text>
            ) : (
              <Text></Text>
            )}
            <Text style={styles.texto}>Nome:</Text>
            <TextInput
              style={styles.input}
              value={nome}
              onChangeText={setNome}
              placeholder="Digite seu nome"
              maxLength={100}
            />

            {erros.sobrenome !== '' ? (
              <Text style={styles.erro}>{erros.sobrenome}</Text>
            ) : (
              <Text></Text>
            )}
            <Text style={styles.texto}>Sobrenome:</Text>
            <TextInput
              style={styles.input}
              value={sobrenome}
              onChangeText={setSobrenome}
              placeholder="Digite seu sobrenome"
              maxLength={100}
            />

            {erros.dataNascimento !== '' ? (
              <Text style={styles.erro}>{erros.dataNascimento}</Text>
            ) : (
              <Text></Text>
            )}
            <Text style={styles.texto}>Data de Nascimento:</Text>
            <TextInput
              style={styles.input}
              value={dataNascimento}
              onChangeText={setDataNascimento}
              placeholder="DD/MM/AAAA"
              maxLength={10}
            />

            {erros.endereco !== '' ? (
              <Text style={styles.erro}>{erros.endereco}</Text>
            ) : (
              <Text></Text>
            )}
            <Text style={styles.texto}>Endereço:</Text>
            <TextInput
              style={styles.input}
              value={endereco}
              onChangeText={setEndereco}
              placeholder="Digite seu endereço"
              maxLength={1000}
            />

            {erros.numero !== '' ? (
              <Text style={styles.erro}>{erros.numero}</Text>
            ) : (
              <Text></Text>
            )}
            <Text style={styles.texto}>Número:</Text>
            <TextInput
              style={styles.input}
              value={numero}
              onChangeText={setNumero}
              placeholder="Digite o número"
              keyboardType="numeric"
              maxLength={5}
            />

            {erros.cep !== '' ? (
              <Text style={styles.erro}>{erros.cep}</Text>
            ) : (
              <Text></Text>
            )}
            <Text style={styles.texto}>CEP:</Text>
            <TextInput
              style={styles.input}
              value={cep}
              onChangeText={setCep}
              placeholder="CEP"
              keyboardType="numeric"
              maxLength={9}
            />

            {erros.cidade !== '' ? (
              <Text style={styles.erro}>{erros.cidade}</Text>
            ) : (
              <Text></Text>
            )}
            <Text style={styles.texto}>Cidade:</Text>
            <TextInput
              style={styles.input}
              value={cidade}
              onChangeText={setCidade}
              placeholder="Digite a cidade"
              maxLength={100}
            />

            {erros.estado !== '' ? (
              <Text style={styles.erro}>{erros.estado}</Text>
            ) : (
              <Text></Text>
            )}
            <Text style={styles.texto}>Estado:</Text>
            <TextInput
              style={styles.input}
              value={estado}
              onChangeText={setEstado}
              placeholder="Digite o estado"
              maxLength={2}
            />
            {erros.cpf !== '' ? (
              <Text style={styles.erro}>{erros.cpf}</Text>
            ) : (
              <Text></Text>
            )}
            <Text style={styles.texto}>CPF:</Text>
            <TextInput
              style={styles.input}
              value={cpf}
              onChangeText={setCpf}
              placeholder="Digite o CPF"
              keyboardType="numeric"
              maxLength={15}
            />
            {erros.rg !== '' ? (
              <Text style={styles.erro}>{erros.rg}</Text>
            ) : (
              <Text></Text>
            )}
            <Text style={styles.texto}>RG:</Text>
            <TextInput
              style={styles.input}
              value={rg}
              onChangeText={setRg}
              placeholder="Digite o RG"
              keyboardType="numeric"
              maxLength={15}
            />

            <Text style={{ fontWeight: 'bold' }}>Campos Opcionais</Text>
            <Text>Se nao tiver, Digite apenas:( - )</Text>

            {erros.nomeDaEmpresa !== '' ? (
              <Text style={styles.erro}>{erros.nomeDaEmpresa}</Text>
            ) : (
              <Text></Text>
            )}
            <Text style={styles.texto}>Nome da Empresa:</Text>
            <TextInput
              style={styles.input}
              value={nomeDaEmpresa}
              onChangeText={setNomeDaEmpresa}
              placeholder="Digite o Nome da empresa"
              maxLength={50}
            />

            {erros.cnpj !== '' ? (
              <Text style={styles.erro}>{erros.cnpj}</Text>
            ) : (
              <Text></Text>
            )}
            <Text style={styles.texto}>CNPJ:</Text>
            <TextInput
              style={styles.input}
              value={cnpj}
              onChangeText={setCnpj}
              placeholder="Digite o CNPJ"
              keyboardType="numeric"
              maxLength={30}
            />

            <Button title="Salvar" onPress={handleSalvar} />
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  formContainer: {
    flex: 1,
    padding: 20,
    paddingTop: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    color: '#000',
  },
  erro: {
    color: 'red',
    marginBottom: 5,
  },
  textoPrincipal: {
    color: '#022545',
    fontFamily: 'Poppins',
    fontSize: 25,
    fontStyle: 'normal',
    fontWeight: '800',
    lineHeight: 1.5,
    padding: 25,
    paddingLeft: 1,
  },
  texto: {
    color: '#022545',
    fontFamily: 'Poppins',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 1.5,
    padding: 15,
    paddingLeft: 1,
  },
});

export default Cadastro;
