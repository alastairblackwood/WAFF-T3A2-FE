import {createContext} from 'react'


export const AuthContext = createContext({
    isLoggedIn: false, 
    login: ()=> {}, 
    logout: () => {},
    isAdmin: false,
    AdminRole: () => {},
    isLoading: false,
    loading: () => {},
    notloading: () => {},
});

