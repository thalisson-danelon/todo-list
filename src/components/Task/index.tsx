import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import { MaterialIcons } from '@expo/vector-icons';

export type Props = {
  note: string;
  isChecked: boolean;
  onCheck: () => void;
  onRemove: () => void;
}

export default function Task({ note, isChecked, onCheck, onRemove }: Props) {
  return (
    <View style={{ ...styles.container, backgroundColor: isChecked ? '#1f1f1f' : '#262626' }}>
      <TouchableOpacity style={styles.contentButton} onPress={onCheck} activeOpacity={1}>
        <View style={styles.buttonContainer}>
          <MaterialIcons
            name={isChecked ? 'task-alt' : 'radio-button-unchecked'}
            size={24}
            style={isChecked ? styles.buttonChecked : styles.buttonCheck}
          />
        </View>
        <Text style={isChecked ? styles.checkedText : styles.text}>
          {note}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer} onPress={onRemove}>
        <MaterialIcons name="delete" size={24} style={styles.buttonDelete} />
      </TouchableOpacity>
    </View>
  );
}
