import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: '12%',
        paddingHorizontal: '2%',
        justifyContent: 'space-between',
    
        backgroundColor: '#fdfcf3',
    },

    headerField: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '2%',
        borderRadius: 5,
        alignItems: 'center',

        backgroundColor: '#93b6ed'
    },

    textDate: {
        fontSize: 24,
        fontWeight: 'bold',
        //color: 'white'
    },

    textTime: {
        fontSize: 30,
        fontWeight: 'bold',
        //color: 'white'
    },

    descriptionField: {
        backgroundColor: '#285d93',
        borderRadius: 15,
    },

    textDescription: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    
    taskField: {
        backgroundColor: '#93b6ed',
        borderColor: '#285d93',
        
        borderRadius: 15,
        borderWidth: 2,
        marginTop: '3%',
        
        fontSize: 22,
        paddingLeft: 10,
    },

    buttonField: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: '10%',
    },

    button: {
        backgroundColor: '#E7281A',
        width: '45%',
        
        borderRadius: 5,
        paddingVertical: '1%'
    },

    textButton: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    },

  });