import { useEffect, useState } from "react";
import { useDeviceContacts } from "./useDeviceContacts";

function useAlphabeticsOfTheContacts(){

 
    const [alphabetics,addAlphabetics] = useState([])
    const contacts = useDeviceContacts()

    useEffect(()=>{
        contacts.sort((function(a, b){
            if(a.firstName < b.firstName) { return -1; }
            if(a.firstName > b.firstName) { return 1; }
            return 0;
        })).map((contact,index) =>{

            if(contact.name[0] === undefined){
                console.log("strange")
            }
            // if(!alphabetics.includes(name[0])){
            //     addAlphabetics([...alphabetics, name[0] ])
            // }
        })
    },[])



}

export {useAlphabeticsOfTheContacts}