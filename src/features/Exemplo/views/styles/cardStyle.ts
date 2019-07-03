const textoPadrao = {
  fontFamily: 'Lato'
};

const styles = (theme: Object) => ({
  card: {
    border: '1px solid #ECECEC',
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.11)',
    height: 200
  },
  tituloCard: {
    height: 130,
    display: 'flex',
    flexDirection: 'column' as 'column',
    justifyContent: 'flex-end',
    paddingLeft: 15,
    paddingBottom: 10
  },
  titulo: {
    color: '#FFFFFF',
    fontFamily: textoPadrao.fontFamily,
    fontSize: 24
  },
  subTitulo: {
    color: '#FFFFFF',
    fontFamily: textoPadrao.fontFamily,
    fontSize: 12
  },
  cardContent: {
    padding: 0,
    cursor: 'pointer'
  },
  loading: {
    padding: '10px 0'
  },
  detalhesPedidoCard: {
    paddingLeft: 15,
    paddingTop: 10
  },
  itensSelecionados: {
    fontSize: 14,
    fontFamily: textoPadrao.fontFamily,
    color: '#525252'
  },
  janelaEnvio: {
    fontSize: 12,
    fontFamily: textoPadrao.fontFamily,
    color: '#525252'
  }
});

export default styles;
