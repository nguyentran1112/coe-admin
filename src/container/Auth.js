import {connect} from "react-redux";
import { AuthPage } from "../page";


const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(AuthPage);