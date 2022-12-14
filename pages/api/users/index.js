import connectMongo from "../../../database/conn"
import { getUsers , postUser , putUser , deleteUser } from "../../../database/controller";

export default async function handler(req, res) {
    connectMongo().catch(()=>res.status(405).json({error:"Error in the Connection"}))

    //type of request ['GET','POST','PUT','DELETE']

    const {method} = req

    switch(method){
        case 'GET':
            getUsers(req,res)
            // res.status(200).json({method,name:'GET request'})
            break;
        case 'POST':
            postUser(req,res)
            // res.status(200).json({method,name:'POST request'})

            break;
        case 'PUT':
            putUser(req,res)
            break;
        case 'DELETE':
            deleteUser(req,res)
            break;
        default:
            res.setHeader('Allow',['GET','POST','PUT','DELETE'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
  }


  