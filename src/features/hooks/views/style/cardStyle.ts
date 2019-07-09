const textoPadrao = {
  fontFamily: 'Lato'
};

const styles = (theme: Object) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    margin: 'auto'
  },
  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%'
  },
  textoPadrao: {
    fontFamily: 'Lato',
    color: '#B8B8B8',
    fontSize: 24,
    height: 48,
    padding: '0 30px'
  },
  gridCenter: {
    height: '100vh'
  },
  margin: {
    margin: '30px 20px 20px 20px'
  },
  degredeButton: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px'
  }
});

export default styles;
