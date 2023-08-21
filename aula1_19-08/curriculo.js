import { View, Text, Image } from 'react-native';
const imgLink =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKnj_mHn0PBtPY_bbNIxPwvH2xoUTktHdZDJqJT4y69g&s';

function App() {
  return (
    <View>
      <Image
        source={{ uri: imgLink }}
        style={{
          width: 300,
          height: 300,
          alignSelf: 'center',
          marginTop: '30px',
        }}
      />

      <View style={{padding: '10px'}}>
        <Text style={{fontSize: '20px', fontWeight: 'bold'}}>
          Dados pessoais
        </Text>
        <Text style={{ fontSize: '17px' }}>Caio Negueba Pinto</Text>

        <Text style={{fontSize: '20px', fontWeight: 'bold', marginTop: '20px'}}>
          Formação
        </Text>
        <Text style={{ fontSize: '17px' }}>Analise e Desenvolvimiento de Sistemas</Text>

        <Text style={{fontSize: '20px', fontWeight: 'bold', marginTop: '20px'}}>
          Experiência
        </Text>
        <Text style={{ fontSize: '17px' }}>Estágio em desenvolvimento na prefeitura de são vicente</Text>

        <Text style={{fontSize: '20px', fontWeight: 'bold', marginTop: '20px'}}>
          Projetos
        </Text>
        <Text style={{ fontSize: '17px' }}>Acesso Unico</Text>
        <Text style={{ fontSize: '17px' }}>Quadro de avisos</Text>
        <Text style={{ fontSize: '17px' }}>Pizzaria</Text>
      </View>
    </View>
  );
}

export default App;