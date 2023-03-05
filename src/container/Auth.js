import {connect} from "react-redux";
import { AuthPage } from "../page";
import {getAllClient} from '../redux/client'
import { getAllEmp } from "../redux/employee";
import { getAllMaintenance } from "../redux/maintenance ";


const mapStateToProps = state => ({
    auth: state.auth
})
const mapActionsToProps = {getAllClient, getAllEmp, getAllMaintenance}


export default connect(mapStateToProps, mapActionsToProps)(AuthPage);