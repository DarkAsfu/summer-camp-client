import { useEffect, useState } from "react";


const usePopularInstructor = () => {
    const [populaIns, setPopularIns] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect( () => {
        fetch('http://localhost:5000/instructor')
        .then(res => res.json())
        .then(data => {
            setPopularIns(data)
            setLoading(false);
        })
    } )

    
    return [populaIns, loading]
};

export default  usePopularInstructor;