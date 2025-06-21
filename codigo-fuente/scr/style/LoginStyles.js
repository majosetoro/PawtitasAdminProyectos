import { StyleSheet, Platform, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  logo: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 8,
  },
  pawtitas: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#E5738A',
    letterSpacing: 1,
    marginBottom: 12,
  },
  formContainer: {
    width: width > 500 ? 400 : '90%',
    backgroundColor: '#ededed',
    borderRadius: 40,
    padding: 28,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 18,
    color: '#222',
  },
  label: {
    fontSize: 15,
    marginBottom: 4,
    marginTop: 10,
    color: '#222',
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 16,
    paddingVertical: Platform.OS === 'web' ? 10 : 8,
    paddingHorizontal: 16,
    marginBottom: 4,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  button: {
    marginTop: 22,
    backgroundColor: '#ededed',
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#222',
    fontSize: 18,
    fontWeight: '500',
  },
  error: {
    color: 'red',
    marginTop: 8,
    textAlign: 'center',
    fontSize: 14,
  },
});

export default styles;