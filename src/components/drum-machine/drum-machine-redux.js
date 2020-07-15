import { connect } from 'react-redux';
import { setPreset, setVolume } from '../../redux/actions';
import withData from '../hoc/with-data';
import DrumMachine from './drum-machine';

const mapStateToProps = ({ presetId, sound, volume }) => ({
  presetId,
  sound,
  volume,
});

const mapDispatchToProps = {
  setVolume,
  setPreset,
};

export default connect(mapStateToProps, mapDispatchToProps)(withData(DrumMachine));
