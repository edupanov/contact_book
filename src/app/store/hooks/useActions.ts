import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import rootActionCreators from "../rootActionCreators";

export const useActions = () => {
    const dispatch = useDispatch()

    return bindActionCreators(rootActionCreators, dispatch)
}