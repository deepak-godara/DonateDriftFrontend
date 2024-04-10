import React, { useContext,useEffect,useState } from 'react'
import UserContext from '../../Store/AuthUser'
import { ProptypesDonationCard } from '../DonationCard/main';
function UserFundrasiers() {
    const user=useContext(UserContext);
    const [UserFundrasiers,SetFundraisers]=useState<ProptypesDonationCard[]>([])
    // useEffect(()=>{ SetFundraisers(user.fundraisers)},[])
  return (
    <div>main</div>
  )
}

export default UserFundrasiers