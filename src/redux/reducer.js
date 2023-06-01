const initialState = {
    username:'',
    password:''
  };
  export default (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          username: action.payload.username,
          password: action.payload.password
        };
      default:
        return state;
    }
  };