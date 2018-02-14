import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import Spinner from './component';
import { spinnerDuck } from './../../store/ducks';

const mapStateToProps = state => ({
  spinnerStatus: spinnerDuck.selectors.root(state),
});

const enhance = compose(
  withRouter,
  connect(mapStateToProps),
);

export default enhance(Spinner);
