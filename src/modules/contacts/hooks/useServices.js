import {useState, useCallback, useEffect} from 'react';
import {getInfo, updateInfo, deleteInfo, addInfo} from "../services/contactsServises";

export function useServices() {
    const [userData, setUserData] = useState([]);
    const [getIsLoading, setGetIsLoading] = useState(false);
    const [saveIsLoading, setSaveIsLoading] = useState(false);
    const [deleteIsLoading, setDeleteIsLoading] = useState(false);

    const getData = useCallback(() => {
        setGetIsLoading(true)
        getInfo().then(({data}) => {
            setUserData(data)
            setGetIsLoading(false)
        })
    }, [setUserData])


    const saveData = useCallback((currentData) => {
        setSaveIsLoading(true)
        if (currentData.id) {
            updateInfo(currentData).then(({data}) => {
                setUserData((userData) =>
                    userData.map((item) => (item.id === data.id ? data : item)))
                setSaveIsLoading(false)
            })
        } else {
            addInfo(currentData).then(({data}) => {
                setUserData((userData) => [
                    ...userData, data
                ])
                setSaveIsLoading(false)
            })
        }
    }, [setUserData])


    const deleteData = useCallback((currentData) => {
        setDeleteIsLoading(true)
        deleteInfo(currentData.id).then(() => {
            setUserData((userData) => userData.filter((item) => item.id !== currentData.id))
            setDeleteIsLoading(false)
        })
    }, [setUserData])

    useEffect(getData, [setUserData])// eslint-disable-line react-hooks/exhaustive-deps

    return {
        userData,
        getData: {
            getData,
            getIsLoading
        },
        saveData: {
            saveData,
            saveIsLoading
        },
        deleteData: {
            deleteData,
            deleteIsLoading
        }
    }
}

