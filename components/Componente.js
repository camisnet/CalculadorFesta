import React from "react";
import {StyleSheet, Button, Text, View} from "react-native";

export default function Componente(props){
    let texto = [];
    let refri = 600;    
    let agua = 200;
    let bolo = 100;
    let doce = 3;
    let salgadinho = 10;

    texto.push( 
   
         <Text 
           style = {styles.texto}>
               Quantidade de convidados: {doce = parseFloat(props.num)} pessoas {'\n'}
                Quantidade de refrigerante: {(refri * parseFloat(props.num))/1000} L {'\n'}
                Quantidade de água: {(agua * parseFloat(props.num))/1000} L {'\n'}
                Quantidade de bolo: {(bolo * parseFloat(props.num))/1000} Kg {'\n'}
                Quantidade de doces: {doce * parseFloat(props.num)} unidades {'\n'}
                Quantidade de salgadinhos: {salgadinho * parseFloat(props.num)} unidades {'\n'}
                </Text>
    
        );
    
    return(
        <>
            <View style = {styles.container}>
                {texto}
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        fontFamily: 'Helvetica',
        width: '40%',
        padding: 18,
        borderRadius: 15,  
        backgroundColor: '#FDDDDE',
    },
    texto: {
        textAlign: "center",
        fontSize: 26,
    }
});

