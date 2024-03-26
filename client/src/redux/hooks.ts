import { useDispatch, useSelector, useStore } from "react-redux";
import type { AppDispatch, RootState } from "./store";

// use these variables throughout the application instead of useDispatch or useSelector
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()