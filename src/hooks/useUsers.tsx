import React, { useEffect, useRef, useState } from 'react'
import { reqResApi } from '../api/reqRes';
import { ReqRes, User } from '../interfaces/ReqRes.interface';

export const useUsers = () => {
    const [users, setUsers] = useState<User[]>([])
    const pageRef = useRef(0);
  
    useEffect(() => {
      loadUsers();
    }, [])
  
    const loadUsers = async() => {
      const resp = await reqResApi.get<ReqRes>('/users', {
          params: {
              page: pageRef.current
          }
      })
  
      if(resp.data.data.length > 0){
          setUsers(resp.data.data);
        }else{
            alert('No hay más registros')
            pageRef.current --;
        }
        
    }
    
    const nextPage = () => {
        pageRef.current ++;
        loadUsers();
    }
    const lastPage = () => {
        if(pageRef.current > 0){
            pageRef.current --;
            loadUsers();
        }
    }

    return{
        users,
        nextPage,
        lastPage
    }
}
