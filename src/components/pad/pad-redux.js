import { connect } from 'react-redux';
import { setSound } from '../../redux/actions';
import Pad from './pad';

const mapStateToProps = ({ sound }) => ({
  sound,
});

const mapDispatchToProps = {
  setSound,
};

export default connect(mapStateToProps, mapDispatchToProps)(Pad);
