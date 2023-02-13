import {connect} from "react-redux";
import { Client } from "../page";


const mapStateToProps = state => ({
    client: state.client
})

export default connect(mapStateToProps)(Client);