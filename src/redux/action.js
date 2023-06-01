export const login = (username,password) => {
    return {
      type: 'LOGIN',
      payload:{
        username:username,
        password:password
    }
    };
  };