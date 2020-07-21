import { connect } from 'react-redux';
import { setSound } from '../../redux/actions';
import Pad from './pad';

const mapDispatchToProps = {
  setSound,
};

export default connect(null, mapDispatchToProps)(Pad);
