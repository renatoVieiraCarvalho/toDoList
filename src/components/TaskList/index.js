import React, { useCallback, useState } from 'react';

import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import Toast from 'react-native-toast-message';
import styles from './styles';
import { View, FlatList } from 'react-native';

import { useFocusEffect } from "@react-navigation/native";

import { TaskItem } from '../TaskItem';

export function TaskList({handleDay}) {

    const [ tasks, setTasks ] = useState([]);
    const { getItem, setItem, removeItem } = useAsyncStorage("@newToDoList:taskList");

    async function handleFetchTask() {

        const response = await getItem();
        const previousTasks = response ? JSON.parse(response): [];
        const tasks = previousTasks.filter((item) => (item.date ? item.date.day : null) == handleDay);

        setTasks(tasks)
    }


    async function handleTask(id, type){
        
        if( type === "DELETAR"){
            const response = await getItem();
            const previousTasks = response ? JSON.parse(response): [];
            const tasks = previousTasks.filter((item) => item.id !== id);

            setItem(JSON.stringify(tasks));            

            handleFetchTask()

            Toast.show({
                type: "success",
                text1: "Tarefa deletada!"
            })
            return
        }
        if( type === "CONCLUIR" ){
            const response = await getItem();
            const responseData = response ? JSON.parse(response): [];
            const tasks = responseData.filter((item) => item.id == id);

            tasks.map((item) => item.conclude = true);
           
            const data = [...responseData, tasks]
            await setItem(JSON.stringify(data));

            handleFetchTask();   
                        
            Toast.show({
                type: "success",
                text1: "Tarefa concluida!"
            });
            return;
        }
                        
    }
        
    useFocusEffect(useCallback(() => {
        handleFetchTask();
    }, [handleDay]))

    return(
        <View style={styles.container}>
            <FlatList
            showsVerticalScrollIndicator={false}
            data={tasks}
            keyExtractor={ item => item.id }
            renderItem={({ item }) => (
                <TaskItem 
                {...item}
                propshandleTask={handleTask}
                />
            )}
            />           
        </View>
    );
}