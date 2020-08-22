/* state 和 action 的设计
state = {
  bugs: [
    {
      id: 0,
      descripton: ""
    }
  ]
}

action = {
  type: "ADD_BUG",
  payload: {
    id: 1,
    description: ""
  }
}
*/

// 处理器 处理每个action然后返回一个新的状态 默认返回原状态
export default function reducer(
  // state 需要有一个初始值， 表示应用的初始状态
  state = {bugs: []},
  action
) {
  switch (action.type) {
    case "ADD_BUG":
      return {
        ...state,
        bugs: [...state.bugs, action.payload],
      };

    case "REMOVE_BUG":
      return {
        ...state,
          bugs:[state.bugs.filter(bug => bug.id !== action.payload.id)]
      };

    default:
      return state;
  }
}
