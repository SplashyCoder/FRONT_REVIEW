import { useEffect, useState } from 'react'

type Data<T> = T | null
type ErrorType = Error | null 

interface Params <T>{
    data: Data<T>;
    loading: boolean;
    error:Error | null;
}
const useFetch = <T>(url: string):Params<T> => {

    const [data, setData] = useState<Data<T>>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<ErrorType>(null)

    useEffect(() => {
   
      const fectchData = async () => {

        try {
            const response = await fetch(url)
            
            if(!response.ok){
                throw new Error('')
            }

            const jsonData: T = await response.json()
            setData(jsonData)
        } catch (error) {
           setError(error as Error)
        }finally{
            setLoading(false)
        }
      }
      fectchData()
    }, [url])
    

    return {data,loading,error}
}

export default useFetch