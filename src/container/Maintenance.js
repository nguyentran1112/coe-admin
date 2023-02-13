import {connect} from "react-redux";
import { Maintenance } from "../page";


const mapStateToProps = state => ({
    maintenance: state.maintenance
})

export default connect(mapStateToProps)(Maintenance);