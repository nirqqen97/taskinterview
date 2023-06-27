import { useParams } from 'react-router-dom';


export const StreamerDescription = ( ) => {

    let { userId } = useParams();
    console.log('streamerId: ', userId);

    return (
        <div>
            asd
        </div>
    )
}