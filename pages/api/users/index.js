import connectMongo from "../../../database/conn"

export default async function handler(req, res) {
    connectMongo().catch()=>res.status(405).json({error:"Error in the Connection"})

    //type of request ['GET','POST','PUT','DELETE']

    const {method} = req

    switch(method){
        case 'GET':
            res.status(200).json({method,name:'GET_REQUEST'});
            break;
        case 'POST':
            res.status(200).json({method,name:'POST_REQUEST'});
            break;
        case 'PUT':
            res.status(200).json({method,name:'PUT_REQUEST'});
            break;
        case 'DELETE':
            res.status(200).json({method,name:'DELETE_REQUEST'});
            break;
        default:
            res.setHeader('Allow',['GET','POST','PUT','DELETE'])
            res.status(405).end(`Method ${method} Not Allowd`)
    }
  }


  