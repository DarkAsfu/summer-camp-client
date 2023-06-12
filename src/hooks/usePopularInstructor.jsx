import { useEffect, useState } from "react";


const usePopularInstructor = () => {
    const [populaIns, setPopularIns] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect( () => {
        fetch('https://summer-camp-server-darkasfu.vercel.app/instructor')
        .then(res => res.json())
        .then(data => {
            setPopularIns(data)
            setLoading(false);
        })
    } )

    
    return [populaIns, loading]
};

export default  usePopularInstructor;