import { useQuery } from "@tanstack/react-query";
import { useState } from "react";


const useCourse = () => {
    const [loading, setLoading] = useState(true)
    const {data: courses = [], refetch} = useQuery({
        queryKey: ['courses'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/courses');
            setLoading(false)
            return res.json();
        }
    })
    return [courses, loading, refetch]
};

export default useCourse;