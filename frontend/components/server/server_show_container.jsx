import { connect } from 'react-redux';
import { requestServer, updateServer, deleteServer } from '../../actions/server/server_actions';
import { closeModal } from '../../actions/modal/modal_actions';
import ServerShow from './server_show';

const mapSTP = (state, ownProps) => ({
  server: state.entities.servers[ownProps.match.params.serverId]
});

const mapDTP = dispatch => ({
  requestServer: (serverId) => dispatch(requestServer(serverId)),
  updateServer: (server) => dispatch(updateServer(server)),
  deleteServer: (serverId) => dispatch(deleteServer(serverId)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapSTP, mapDTP)(ServerShow);