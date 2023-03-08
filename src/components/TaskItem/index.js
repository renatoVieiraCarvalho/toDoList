import React, { useState, useRef, useEffect } from 'react';

import { View, Text, Alert } from 'react-native';
import styles from './styles';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Modal } from 'react-native';
import  Feather  from '@expo/vector-icons/Feather';
import { HandleTask } from '../HandleTask'
import moment from 'moment';
import Toast from 'react-native-toast-message';




export function TaskItem({id, desc, date, conclude, propshandleTask}) {

    const [handleTaskType, setHandleTaskType] = useState('');
    const [handleModalOpen, setHandleModalOpen] = useState(false);
    const swipeableRef = useRef(null);   
    const hours = moment(date.time).format('HH:mm');
    const [handleReset, setHandleReset] = useState('');

    useEffect(() => {

        if(handleTaskType !== ''){
            
        handleConcludeModal();
        }
      }, [handleReset]);

    const LeftSwipe = () => {
        return(
            <View style={styles.deleteField}>
                <Feather name='trash-2' size={25} color={'red'}/>
            </View>
        );
    };

    const RightSwipe = () => {
        return(
            <View style={styles.concludeField}>
                <Feather name='check' size={25} color={'green'}/>
            </View>
        );
    };

    const handleColor = () =>{
        if(conclude === true){
            return(
            <View style={styles.headerTitleField}>
                <View style={[styles.headerTaskField, {backgroundColor: "rgba(0, 255, 0, 0.5)", borderColor:'#356c1d', width: '80%'}]}>
                    <Text style={styles.textName}>{desc}</Text>
                </View>
                <View style={[styles.headerTaskField, {backgroundColor: "rgba(0, 255, 0, 0.5)", borderColor:'#356c1d', width: '20%'}]}>
                    <Text style={styles.textTime}>{hours}</Text>
                </View>
            </View>
            )
        }else{
            return(
                <View style={styles.headerTitleField}>
                    <View style={[styles.headerTaskField, {backgroundColor: '#aee0ea', borderColor: '#285d93', width: '80%'}]}>
                        <Text style={styles.textName}>{desc}</Text>
                    </View>
                    <View style={[styles.headerTaskField, {backgroundColor: '#aee0ea', borderColor:'#285d93', width: '20%'}]}>
                        <Text style={styles.textTime}>{hours}</Text>
                    </View>
                </View>
                )
        }
    }

    function handleCloseModal(){
        setHandleModalOpen(false);
    }

    function handleConcludeModal(){

        if(conclude === true && handleTaskType ==='CONCLUIR'){
            Toast.show({
                type: "success",
                text1: "Esta tarefa já encontra-se concluida!"
            })
            setHandleReset('');
            return;
            
        }
        if(conclude === true && handleTaskType ==='DELETAR'){
            Alert.alert("Atenção","Esta tarefa encontra-se concluida, caso remova nao poderá ser recuperada");
            setHandleModalOpen(true);
            setHandleReset('')
            return;
            
        }else{
            setHandleReset('');
            setHandleModalOpen(true);
        }

        
    }

    return(
        <GestureHandlerRootView>
            <Swipeable
            ref={swipeableRef}
            renderLeftActions={LeftSwipe}
            renderRightActions={RightSwipe}
            onSwipeableLeftOpen={() => {setHandleTaskType('DELETAR'); /*handleConcludeModal();*/ swipeableRef.current.close(); setHandleReset('x'); }}
            onSwipeableRightOpen={() => {setHandleTaskType('CONCLUIR'); /*handleConcludeModal();*/  swipeableRef.current.close(); setHandleReset('x'); }}
            >           
                {handleColor()}
            </Swipeable>
            <Modal
            animationType='slide' 
            transparent={true}
            visible={handleModalOpen}>
               <HandleTask
               id={id}
               description={desc}
               type={handleTaskType}
               closeModalHandleTask={handleCloseModal}
               propsHandle={propshandleTask}
               /> 
            </Modal>        
        </GestureHandlerRootView>
    );
}