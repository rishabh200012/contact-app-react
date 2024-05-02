// Importing Styling
import Style from './AddToContact.module.css'

// Importing context from Customhook
import { useValue } from '../../context';
import { useNavigate } from 'react-router-dom';
// Importing Toast messages
import {toast} from 'react-toastify';

// function of the AddToContact
function AddToContact() {
    const {contactList, 
        setContactList ,
         nameRef, 
         emailRef, 
         numberRef, 
         handleClear} = useValue();
    const navigate = useNavigate();

//    submit function, it will be fired when submit button is cliked
    const handleSubmit = (e)=>{
        e.preventDefault();
        
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const number = numberRef.current.value;
        
        const checkNumber = contactList.find(contact => contact.number === parseInt(number) && number)

        if(checkNumber){
            return toast.warning("Data not Changed !");
        }
        
        const newContactList = [...contactList];
        newContactList.push({
            id: contactList[contactList.length - 1].id + 1,
            name ,
            email ,
            phone : number
        });
        toast.success("New Contact added !");
        setContactList(newContactList);
        navigate('/');
        
        handleClear();

    }


    return (
        <>
            <div className={Style.container}>
                <h1>Add To Contact</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" ref={nameRef} required  /> <br />
                    <input type="email" placeholder="Email" ref={emailRef} required  /> <br />
                    <input type="tel" placeholder="Number" ref={numberRef} required /> <br />
                    <button>Submit</button>
                </form>
            </div>
        </>
    )
}

export default AddToContact;