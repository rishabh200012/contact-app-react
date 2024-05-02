
import { createContext, useContext, useState , useEffect , useRef } from "react";


import {toast} from 'react-toastify';
 
const contactApi = createContext();

export function useValue(){
    const value = useContext(contactApi);
    return value;
}

function CustomeContext({children}){
    
    const [contactList, setContactList] = useState([]);

    const [isLoading, setIsLoading] = useState(false);
   
    const nameRef = useRef();
    const emailRef = useRef();
    const numberRef = useRef();


    const fetchContactList = async() =>{
        setIsLoading(true);
        let data = await fetch('https://jsonplaceholder.typicode.com/users/');
        let contact = await data.json();
        
        setContactList(contact);
        setIsLoading(false);
    }

    
    const deleteContact = (id) => {
        const index = contactList.findIndex((contact) => contact.id === id);
        if (index !== -1) {
          let newContactList = [...contactList];
          newContactList.splice(index, 1);
        
          toast.success("Contact Deleted Successfully !");
          setContactList(newContactList);
        }
    };
 
    const handleClear = ()=>{
        nameRef.current.value = "";
        emailRef.current.value = "";
        numberRef.current.value = "";
    }
      
 
    useEffect(()=>{
        fetchContactList();
    }, []);

    
    return (
        <>
            <contactApi.Provider value={{contactList, setContactList, isLoading, setIsLoading, deleteContact
                                        ,nameRef, emailRef ,numberRef, handleClear}}>
                {children}
            </contactApi.Provider>
        </>
    )

}

export default CustomeContext;