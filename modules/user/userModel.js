const Schema = Mongoose.Schema;
const validRoles = ['ADMIN', 'TEACHER', 'PARENT', 'STUDENT', 'STAFF'];

const userSchema = new Schema({
  firstName   :   { type : String, required : true },
  middleName  :   { type : String },
  lastName    :   { type : String, required : true },
  phoneNo     :   { type : String, required : true , index : true, unique : true},
  email       :   { type : String, required : true , index : true, unique : true},
  address     :   String,
  city        :   { type : String, required : true },
  country     :   { type : String, required : true },
  role        : {
        type: [String],
        validate: {
            validator: function (v) {
                let isValid = 1;
                v.map((role)=>{
                   isValid *= validRoles.indexOf(role) > 0 ? 1 : 0;
                })
                return v.length > 0 && isValid;
            },
            message: `Invalid Role`
        },
        required: [true, 'User\'s role is required']
    }
},{
    timestamps : true
});

let UserModel = Mongoose.model('user', userSchema);

module.exports = UserModel;