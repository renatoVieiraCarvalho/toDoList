import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: '15%',
        paddingHorizontal: '2%',
    
        backgroundColor: '#fdfcf3',
    },
    
    textDateHeader: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center'
    },

    textDayHeader: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#E7281A',
        textAlign: 'center'
    },

    holeTop: {
        width: 10,
        height: 10,
        backgroundColor: '#8b8378',
        justifyContent: 'center',

        borderRadius: 50,
    },

    holeTop2: {
        width: 8,
        height: 8,
        backgroundColor: '#1b1b1b',
        borderRadius: 50,
    },

    redTop: {
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: '#E7281A',
        height: 30,
        borderRightWidth: 0.5,
        borderTopWidth: 3,
        borderLeftWidth: 0.5,
        borderColor: '#8b8378',

        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
    },

    dateField:{   
        flexDirection: 'row',
        justifyContent: 'center',
        
        //backgroundColor: '#1b1b1b',
        backgroundColor: '#FFF',
        borderColor: '#8b8378',
        // paddingHorizontal: '25%',
        // paddingVertical: '5%',
        padding: '5%',

        borderBottomWidth: 0.5,
        borderLeftWidth: 0.5,
        borderRightWidth: 0.5,

        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
    },

    dateFieldShadow:{
        backgroundColor: '#8b8378',
        paddingTop: 10,
        //paddingLeft: 12,
        paddingRight: 12,
        
        borderTopLeftRadius: 32,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 32,
        borderBottomLeftRadius: 15,

        marginHorizontal: '25%',
        
    },

    textHeader:{
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white'
    },

    headerTitleField:{
        flexDirection: 'row',
        marginTop: '15%',
        marginBottom: '5%'
    },

    headerTaskField:{
        backgroundColor: '#285d93',
        borderRadius: 15,
        width: '80%',
        paddingVertical: '1%',
    },

    headerTimeField:{
        backgroundColor: '#285d93',
        borderRadius: 15,
        width: '20%',
        paddingVertical: '1%',
    },

    buttonField: {
        marginTop: '10%',
        marginBottom: '5%',
        alignItems: 'center',
      },
    
      button: {
        //flex: 1,
        width: '30%',
        alignItems: 'center',
        paddingVertical: 15,
    
        backgroundColor: '#E7281A',
        borderRadius: 5,
      },


  });