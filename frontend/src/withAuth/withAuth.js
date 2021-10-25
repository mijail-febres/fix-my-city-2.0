import {useSelector} from "react-redux"

export const withAuth = (WrapperComponent) => {
    return props => {
        const token = 
        localStorage.getItem('token');

        if(token){
            return <WrapperComponent/>
        }else{
            props.history.push("/login");
            return null;
        }
    }
}