import {fetchProfileInfo} from "../Axios/fetches"


export const fetchLatestProfileInfoAndUpdateRedux = async (dispatch) => {    
    const data = await fetchProfileInfo(); 
    console.log("Success. Latest profile info:",data);

   
            const action = {type:"updateProfileInfo",payload:{
                avatar: data.profile_picture,
                userName:data.username,
                dateJoined:data.date_joined,
                points:data.points,
                level:data.status,
                issuesReported:data.user_issues,
                issuesUpvoted:data.upvoted_issues,
                email:data.email,
                firstName:data.first_name,
                lastName:data.last_name,                  
                }
            }      
              
            dispatch(action);
}           




