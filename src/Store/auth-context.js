import React,{useState,useEffect} from "react";
const AuthContext=React.createContext({
    isLoggedIn:false,
    onLogout: () => { },
    onLogin:(email,password,college)=>{}
})
export const AuthContextProvider=(props)=>{
    const [isLoggedIn,setIsLoggedIn]=useState(false)
    
    useEffect(()=>{
        const storedLoggedInInformation=localStorage.getItem('isLoggedIn');
        if(storedLoggedInInformation==='1'){
          setIsLoggedIn(true);
        }
      },[])
    const logOutHandler=()=>{
        localStorage.removeItem('isLoggedIn')
        setIsLoggedIn(false)
    }
    const loginHandler=()=>{
        setIsLoggedIn(true)
    }
    return <AuthContext.Provider value={{isLoggedIn: isLoggedIn, onLogOut:logOutHandler}}>
     {props.children}
    </AuthContext.Provider>
}
export default AuthContext