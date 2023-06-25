import {CardView, CircleImage, DownSidePart,Image, Info, Line, UpSidePart, Button } from "./StreamerCard.styled"
import messagePhoto from "../Images/pic.svg";
import testPic from "../Images/Hansel.svg";


export const StreamerCard = ( ) =>  {
    // const handleClick = () => { 
    // if (user.isFollowed) {
    //     unSubscribe(id)
    //     return
    // }
    //     setFollowers(id)
       
    // }
    return ( 
        <CardView>
        
        <UpSidePart>
            <Image src={messagePhoto} alt="logo image" />
        </UpSidePart>
        <Line>
            <CircleImage src= {testPic} width = "79" height= "79" />
        </Line>
        <DownSidePart>
            <Info> user.tweets TWEETS</Info>
            <Info> user.followers FOLLOWERS</Info>
            <Info> user.followers FOLLOWERS</Info>
            {/* <Button type="button"   followed={user.isFollowed} onClick={() => handleClick(user.id)}>
               {user.isFollowed ? 'Following' : 'Follow'} 
            </Button> */}
            <Button type="button"   followed={false} >
              Upvote 
            </Button>
            <Button type="button"   followed={false} >
              DownVote 
            </Button>
        </DownSidePart>
        </CardView>
    )
}