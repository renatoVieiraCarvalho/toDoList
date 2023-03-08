import React, { useState } from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import  Feather  from '@expo/vector-icons/Feather';

import { useNavigation } from "@react-navigation/native";

import { TaskList } from '../../components/TaskList';


export function Dashboard(){

    const navigation = useNavigation();
    const [ handleDate, setHandleDate ] = useState (new Date());
    const [ showDatePicker, setShowDatePicker ] = useState(false);
    const [ handleDateList, setHandleDateList ]= useState(moment(handleDate).format('DD[/]MM'));


    getDatePicker = () => {

        let datePicker = <DateTimePicker 
                onChange={(_, date) => {setHandleDate(date); setShowDatePicker(false); setHandleDateList(moment(date).format('DD[/]MM'));}}
                value={handleDate}
                />

        const dateStringWeek = moment(handleDate).format('dddd')
        const dateStringDay = moment(handleDate).format('DD')
        const dateStringMonth = moment(handleDate).format('MMMM')
        //const dateStringTime = moment(handleDate).format('HH:MM')

        if(Platform.OS === 'android') {
            datePicker = (
                //<View>
                <View style={styles.dateFieldShadow}>
                    <View style={styles.redTop}>
                        <View style={styles.holeTop}>
                            <View style={styles.holeTop2}/>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.dateField} onPress={() => setShowDatePicker(true)}>
                        <View>
                            <Text style={styles.textDateHeader}>{dateStringMonth}</Text>
                            <Text style={styles.textDayHeader}>{dateStringDay}</Text>
                            <Text style={styles.textDateHeader}>{dateStringWeek}</Text>
                        </View>           
                    </TouchableOpacity>
                    {showDatePicker && datePicker}
               </View>
              // </View> 
            )
        }
        return datePicker;
    }

    function goToNewTask(){
        navigation.navigate('NewTask', {actualDate: handleDate});
    }

    return(
        <View style={styles.container}>
            {getDatePicker()}            
            <View style={styles.headerTitleField}>
                <View style={styles.headerTaskField}>
                    <Text style={styles.textHeader}>Tarefa</Text>
                </View>
                <View style={styles.headerTimeField}>
                    <Text style={styles.textHeader}>Hora</Text>
                </View>
            </View>          
            <TaskList 
            handleDay={handleDateList}
            />
            <View style={styles.buttonField}>
                <TouchableOpacity style={styles.button}
                onPress={() => goToNewTask() }
                >
                    <Feather name="plus" size={35} color='white'/>
                </TouchableOpacity>
            </View>
        </View>
    );
}