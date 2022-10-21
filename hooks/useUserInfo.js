import React, { useState, useEffect } from 'react'
import {useSession} from "next-auth/react";

const useUserInfo = () => {

    const { data: session , status: sessionStatus } = useSession()
    const [ userInfo, setUserInfo ] = useState()
    const [ status, setStatus ] = useState( 'loading' )



    function getUserInfo() {

        if(sessionStatus === 'loading') {
          return;
        }
  
      fetch('/api/users?id='+session.user.id)
        .then(response => {
          response.json().then(json => {
            setUserInfo( json.user )
            setStatus('loaded')
          })
        })
  
      }

      useEffect( () => {
        getUserInfo()
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [ sessionStatus ]);

  return { userInfo, status}
}

export default useUserInfo