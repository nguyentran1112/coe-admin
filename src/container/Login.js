import {connect} from "react-redux";
import SignIn from "../components/Form/Auth/SignIn";
import {login} from '../redux/auth';

const mapActionsToProps = {login}

export default connect(null,mapActionsToProps)(SignIn);