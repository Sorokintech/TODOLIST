import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, FILTER_TODO} from "../actions/types/todo";

// 1.
const initialState = {
  byIds: []
};

// 2.
export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    // 3.
    case ADD_TODO: {
      // 4.
      const { id, content } = action.payload;

      // 5.
      return {
        ...state,

        byIds: [
          ...state.byIds,

          {
            id,
            content,
            complete: false,
          },
        ]
      }
    }

    case TOGGLE_TODO: {
      const { id } = action.payload;

      const targetTodoIndex = state.byIds.findIndex(todo => todo.id === id);
      const todos = [...state.byIds];
      todos[targetTodoIndex] = {...todos[targetTodoIndex],completed: !todos[targetTodoIndex].completed};
      console.log(todos)
      return {
        ...state,

        byIds:[...todos]
      }
    }
    case DELETE_TODO: {
      const { id } = action.payload;

      return {
        ...state,
        byIds: [...state.byIds.filter( item => item.id !== id)],
      };
      
    }
    case FILTER_TODO: {
        return {
             ...state,


              byIds: [
                  ...state.byIds.filter(({completed}) => !completed),
                  ...state.byIds.filter(({completed}) => completed)
                  ]
             }
        }
    default:
      return state;
  }
}
