const Schema = Mongoose.Schema;

const organisationSchema = new Schema({
  name        :   { type : String, required : true },
  phoneNo     :   { type : String, required : true , index : true, unique : true },
  email       :   { type : String, required : true , index : true, unique : true },
  address     :   String,
  city        :   { type : String, required : true },
  country     :   { type : String, required : true },
  role        : [{
                    type: String,
                    validate: {
                        isAsync: false,
                        validator:  (v) => {
                            return v.length > 0;
                                            },
                        message: 'Atleast 1 role is required'
                    },
                    enum : ['ADMIN', 'TEACHER', 'PARENT', 'STUDENT', 'STAFF'],
                    required: [true, 'User\'s role is required']
                }]
}, {
    timestamps : true
});

let organisationModel = Mongoose.model('organisation', organisationSchema);

module.exports = organisationModel;