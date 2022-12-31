import {connect} from "react-redux";
import { Employee } from "../page";


const mapStateToProps = state => ({
    employee: state.employee
})

export default connect(mapStateToProps)(Employee);