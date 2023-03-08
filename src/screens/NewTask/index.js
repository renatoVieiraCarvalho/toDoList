import React, { useState } from "react";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import  Feather  from '@expo/vector-icons/Feather';
import moment from 'moment';
import Toast from 'react-native-toast-message';
import { LogBox } from 'react-native';

import styles from './styles';

import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Alert, Platform} from 'react-native';
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from '@react-native-community/datetimepicker';


export function NewTask({ route }) {
     
    const { getItem, setItem } = useAsyncStorage("@newToDoList:taskList");
    const navigation = useNavigation();
    const { actualDate } = route.params;

    const [taskDescription, setTaskDescription] = useState('');
    const handleDate = actualDate;
    const [handleTime, setHandleTime] = useState (new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);

    LogBox.ignoreLogs([
        'Non-serializable values were found in the navigation state',
      ]);


    async function saveTask() {
        try {
            if (taskDescription !== "" && taskDescription.trim() !== "" ){

                const newTask = {
                    id: Math.random(),
                    desc: taskDescription,
                    date: {
                        day: moment(handleDate).format('DD[/]MM'),
                        time: handleTime,
                    },
                    conclude: false
                }

                const response = await getItem();
                const responseData = response ? JSON.parse(response) : [];

                const data = [...responseData, newTask];
        
                await setItem(JSON.stringify(data));

                Toast.show({
                    type: "success",
                    text1: "Tarefa cadastrada!"
                })

       
                navigation.goBack()
            }else{
                    Toast.show({
                        type: "error",
                        text1: "Insira a descrição da tarefa!"
                    })
            }
          
        } catch (error) {
            console.log(error)

            Toast.show({
                type: "error",
                text1: "erro sinistro"
            })
            
        }
        
    }

    function cancelTask() {
        Alert.alert("Atenção","Deseja cancelar a nova tarefa?", 
        [
            {
                text: 'Sim',
                onPress(){
                    navigation.goBack();
                }
            },
            {
                text: 'Não',
                onPress(){
                    return;
                }
            }
        ])
    }

    getDatePicker = () => {
        let datePicker = <DateTimePicker 
                onChange={(_, date) => {setHandleTime(date), setShowDatePicker(false)}}
                value={handleTime}
                mode="time"
                />

        const dateStringWeek = moment(handleDate).format('dddd')
        const dateStringDay = moment(handleDate).format('DD[/]MM')
        const dateStringTime = moment(handleTime).format('HH:mm')

        if(Platform.OS === 'android') {
            datePicker = (
               <>
                    <TouchableOpacity style={styles.headerField} onPress={() => setShowDatePicker(true)}>
                        <Feather name="calendar" size={60}/>
                        <View>
                            <Text style={styles.textDate}>{dateStringWeek}</Text>
                            <Text style={styles.textDate}>{dateStringDay}</Text>
                        </View>
                        <Text style={styles.textTime}>{dateStringTime}</Text>
                    </TouchableOpacity>
                        {/* <TouchableOpacity onPress={() => setShowTimePicker(true)}>
                        </TouchableOpacity> */}
                    {showDatePicker && datePicker}
               </> 
            )
        }

        return datePicker;
    }



    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>

                {getDatePicker()}                
                <View>
                    <View style={styles.descriptionField}>
                        <Text style={styles.textDescription}>Descrição</Text>
                    </View>
                    <TextInput style={styles.taskField}
                    onChangeText={setTaskDescription}
                    value={taskDescription}
                    />
                </View>

                <View style={styles.buttonField}>
                    <TouchableOpacity style={styles.button}
                    onPress={cancelTask}>
                        <Text style={styles.textButton}>Cancelar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}
                    onPress={saveTask }>
                        <Text style={styles.textButton}>Salvar</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </TouchableWithoutFeedback>
    );
}