import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#262626',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'justify',
  },
  checkedText: {
    flex: 1,
    fontSize: 16,
    color: '#808080',
    textAlign: 'justify',
    textDecorationLine: 'line-through',
  },
  buttonContainer: {
    height: 56,
    width: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonCheck: {
    color: '#4EA8DE',
    fontSize: 24,
  },
  buttonChecked: {
    color: '#5E60CE',
    fontSize: 24,
  },
  buttonDelete: {
    color: '#808080',
    fontSize: 24
  },
  contentButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});
