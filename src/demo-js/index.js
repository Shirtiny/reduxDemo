// demo js redux
import store from "./store";

export function baseUse() {
  console.log("store：", store);
  console.log("初始， state：", store.getState());

  // 订阅 返回一个取消订阅的函数
  const unSubscribe = store.subscribe(() => {
    console.log("修改后， state：", store.getState());
  });

  // 发送动作
  store.dispatch({
    type: "ADD_BUG",
    payload: {
      id: 1,
      description: "第一个bug",
    },
  });

  store.dispatch({
    type: "ADD_BUG",
    payload: {
      id: 2,
      description: "第二个bug",
    },
  });

  // 取消订阅
  unSubscribe();

  store.dispatch({
    type: "REMOVE_BUG",
    payload: {
      id: 1,
    },
  });
}
