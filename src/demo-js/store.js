import { createStore } from "redux";
import reducer from "./reducer";

// 使用redux的createStore函数 传入自定的reducer 以创建state
const store = createStore(reducer);

export default store;
