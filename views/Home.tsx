import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import {
    createStaticNavigation,
    useNavigation,
  } from '@react-navigation/native';
  import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Home(){
    const navigation = useNavigation();
    return(
        <View style={styles.bloco}>
                <Text style={styles.Texto}>Seja bem-vindo!</Text>
                <Text style={styles.Texto2}>Verifique as previsões do tempo</Text>

                <TouchableOpacity 
                    style={styles.btn}
                    onPress={()=>navigation.navigate('Itanhaem' as never)}
                >
                <Text style={styles.textoBtn}>Itanhaém</Text>
                </TouchableOpacity>

                  <TouchableOpacity 
                    style={styles.btn}
                    onPress={()=>navigation.navigate('PraiaGrande' as never)}
                >
                    <Text style={styles.textoBtn}>Praia Grande</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.btn}
                    onPress={()=>navigation.navigate('Santos' as never)}
                >
                <Text style={styles.textoBtn}>Santos</Text>
                </TouchableOpacity>

                  <TouchableOpacity 
                    style={styles.btn}
                    onPress={()=>navigation.navigate('SaoVicente' as never)}
                >
                <Text style={styles.textoBtn}>São Vicente</Text>
                </TouchableOpacity>
        </View>
    );
} 

const styles = StyleSheet.create({
    bloco:{
        flex:1,
        alignItems:'center',
        justifyContent:'flex-start',
    },
    Texto:{
        marginTop:30,
        fontSize:30,
        fontWeight:700
    },

     Texto2:{
        marginTop:20,
        fontSize:30,
        fontWeight:400,
        textAlign:'center'
    },

    btn:{
       backgroundColor:"#c9d7ebff",
       width:'80%',
       padding:10,
       marginBottom:20,
       marginTop: 20,
       borderRadius:20
    },
    textoBtn:{
        color:"#0a1a30ff",
        fontSize:30,
        textAlign:'center'
    }
});