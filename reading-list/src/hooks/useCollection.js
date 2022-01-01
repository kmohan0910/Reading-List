import { useEffect, useRef, useState } from "react"
import { db } from "../firebase/config"

import { collection , onSnapshot , query , where} from "firebase/firestore"
export const useCollection = (c, _q) => {

    const [documents , setDocuments] = useState(null)
        const q= useRef(_q).current
    useEffect(()=>{

        let ref= collection(db,c)
        if (q){
            ref= query(ref, where(...q) ) 
        }
       const unsub= onSnapshot(ref, (snapshot)=>{
            let lsit= []
            snapshot.docs.forEach((doc)=>{
              lsit.push({id:doc.id , ...doc.data()})
            })
            setDocuments(lsit)
        })
        return ()=>unsub()

    },[])
    return {documents}
}
