import { useRef, useState } from 'react';
import {
  Alert,
  FlatList,
  Image,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import Task from '../../components/Task/index.tsx';

type TaskProps = {
  note: string;
  isChecked: boolean;
}[]

export default function Home() {
  const [tasks, setTasks] = useState<TaskProps>([]);
  const [taskText, setTaskText] = useState('');
  const [borderColor, setBorderColor] = useState('#262626');
  const inputRef = useRef<TextInput | null>(null);


  function handleTaskAdd() {
    if (tasks.some(task => task.note === taskText)) {
      return Alert.alert('Nota Repetida', 'Você já criou esta nota.');
    }
    setTasks(prevState => [...prevState, { note: taskText, isChecked: false }]);
    setTaskText('');
    if (inputRef.current) {
      (inputRef.current as TextInput).blur();
    }
  }

  function handleCheckTask(note: string) {
    setTasks(prevState => prevState.map(task => {
        if (task.note === note)
          task.isChecked = !task.isChecked;
        return task;
      })
    );
  }

  function handleTaskRemove(task) {
    Alert.alert('Deletar Nota', `Tem certeza que deseja deletar a nota?`, [
      {
        text: 'Sim',
        onPress: () => setTasks(prevState =>
          prevState.filter(item => item !== task)
        ),
        style: 'destructive'
      },
      {
        text: 'Não'
      }
    ]);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require('../../../assets/logo-todo.png')} />
        </View>
        <View style={styles.form}>
          <TextInput
            ref={inputRef}
            style={{ ...styles.input, borderWidth: 2, borderColor: borderColor }}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            onChangeText={setTaskText}
            value={taskText}
            onFocus={() => setBorderColor('#5E60CE')}
            onBlur={() => setBorderColor('#262626')}
          />
          <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
            <Text style={styles.buttonIcon}>
              <MaterialIcons name="add-circle" size={24} />
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.controlContainer}>
            <View style={styles.createControlContainer}>
              <Text style={styles.createControlText}>
                Criadas
              </Text>
              <View style={styles.controlNumberContainer}>
                <Text
                  style={styles.controlNumber}>
                  {tasks.length}
                </Text>
              </View>
            </View>
            <View style={styles.createControlContainer}>
              <Text style={styles.completeControlText}>
                Concluídas
              </Text>
              <View style={styles.controlNumberContainer}>
                <Text
                  style={styles.controlNumber}>
                  {tasks.filter(task => task.isChecked).length}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <FlatList
          data={tasks}
          keyExtractor={item => item.note}
          style={styles.flatList}
          renderItem={({ item }) =>
            <Task
              note={item.note}
              isChecked={item.isChecked}
              onCheck={() => handleCheckTask(item.note)}
              onRemove={() => handleTaskRemove(item)}
            />
          }
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() =>
            <View style={styles.listEmpty}>
              <MaterialIcons name="content-paste" size={56} style={styles.contentIcon} />
              <Text style={styles.tittleText}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.contentText}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          }
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
