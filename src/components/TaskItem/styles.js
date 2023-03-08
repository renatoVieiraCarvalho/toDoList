import { StyleSheet } from 'react-native';

export default StyleSheet.create({


  textName:{
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: '2%',
    paddingVertical: '1%'
  },

  textTime:{
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: '1%'
  },

  headerTitleField:{
    flexDirection: 'row',
    marginBottom: '3%',
  },

  headerTaskField:{
    borderWidth: 2,
    borderRadius: 15,
  },

  deleteField: {
    justifyContent: 'center',
    paddingLeft: '1%',
    marginRight: '5%',
    marginBottom: '2%'    
  },

  concludeField: {
    justifyContent: 'center',
    paddingRight: '1%',
    marginLeft: '5%',
    marginBottom: '2%'    
  }
});

