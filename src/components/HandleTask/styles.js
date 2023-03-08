import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  centralizer: {
    flex: 1,
  },
  
  container: {
    backgroundColor: '#8c8787',
    borderWidth: 2,
  },

  taskField:{
    paddingVertical: '8%',
    paddingHorizontal: '15%',
    borderBottomWidth: 2,
    
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 5,
  },

  textTask: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 26,
  },

  buttonField: {
    flexDirection: 'row',  
  },

  button: {
    flex: 1, 
  },

  textButton: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 32,
  },

  separator: {
    borderLeftWidth: 2
  }


});

