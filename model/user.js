import {Scheme , models , model} from 'mongoose'
import { stringify } from 'postcss'

const userSchema = new Schema ({
     name:String,
     avatar:String,
     email:String,
     salary:Number,
     date:String,
     status:String
})

const Users = models.user || model('user',userSchema)
export default Users;