import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../rootReducer";

export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector