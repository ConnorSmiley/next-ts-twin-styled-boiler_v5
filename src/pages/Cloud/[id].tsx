import React from "react";
import {useRouter} from "next/router";

export interface Props {

}


const getStaticPaths: React.FC<Props> = () =>{
   const router = useRouter()
   const cloudId = router.query.id



    return(
       <>
           <div>
             {cloudId}
           </div>
       </>
    )
}

export default getStaticPaths
