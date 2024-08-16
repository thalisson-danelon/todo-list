import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  logoContainer: {
    paddingTop: 35,
    backgroundColor: '#0D0D0D',
    height: 200,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: '#262626',
    borderRadius: 5,
    color: '#FFFFFF',
    padding: 16,
    fontSize: 16,
    marginRight: 12,
  },
  button: {
    height: 56,
    width: 56,
    backgroundColor: '#1E6F9F',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonIcon: {
    color: '#FFFFFF',
    fontSize: 24
  },
  form: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    marginTop: 36,
    marginBottom: 42,
  },
  tittleText: {
    color: '#808080',
    fontSize: 14,
    fontWeight: 'bold'
  },
  contentText: {
    color: '#808080',
    fontSize: 14,
  },
  listEmpty: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    borderTopWidth: 1,
    borderColor: '#808080',
  },
  contentIcon: {
    color: '#808080'
  },
  flatList: {
    flex: 1,
    paddingHorizontal: 20
  },
  contentContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  controlContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  createControlContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  createControlText: {
    color: '#4EA8DE',
    fontSize: 18,
    fontWeight: 'bold',
  },
  controlNumberContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    backgroundColor: '#333333',
    height: 25,
    width: 40,
    borderRadius: 25
  },
  controlNumber: {
    color: '#D9D9D9',
    fontSize: 18,
    fontWeight: 'bold'
  },
  completeControlText: {
    color: '#8284FA',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
