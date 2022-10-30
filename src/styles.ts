import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center'
      },
    
      titulo: {
        fontSize: 35,
        bottom: 10
      },
    
      texto: {
        fontSize: 15,
        marginBottom: 10,
      },

      textoRes: {
        textAlign: 'center',
        fontSize: 30
      },

      viewRes: {
        top: 30
      },
    
      input: {
        height: 40,
        width: 200,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
      },
    
      button: {
        width: 200,
        height: 40,
        backgroundColor: 'red',
        top: 10,
        marginBottom: 10,
        borderRadius: 5
      },

      textButton: {
        color: '#FFF',
        textAlign: 'center',
        marginVertical: 10,
      }
})