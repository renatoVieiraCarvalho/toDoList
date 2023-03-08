import React from 'react';
import { BlurView } from 'expo-blur';


import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export function HandleTask({ id, description, type, closeModalHandleTask, propsHandle }) {
    
    return(       
            <View style={styles.centralizer}>
                <BlurView intensity={100} tint="dark" style={styles.centralizer}/>
                <View style={styles.container}>
                    <View style={styles.taskField}>
                        <Text style={styles.text}> Deseja {type} a tarefa:</Text>
                        <Text style={styles.textTask}> {description} </Text>
                    </View>
                    <View style={styles.buttonField}>
                        <TouchableOpacity
                        style={styles.button}
                        onPress={() => {propsHandle(id, type); closeModalHandleTask();}}
                        >
                            <Text style={styles.textButton}>Sim</Text>
                        </TouchableOpacity>
                        <View style={styles.separator} />
                        <TouchableOpacity 
                        style={styles.button}
                        onPress={closeModalHandleTask}
                        >
                            <Text style={styles.textButton}>Não</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <BlurView intensity={100} tint="dark" style={styles.centralizer}/>
            </View>
    );
}