// import mongoose from "mongoose";

// const subjectSchema = new mongoose.Schema({
//     subject:{
//         type: String,
//         require: true
//     },
//     topic:[
//         {
//             type:mongoose.Schema.Types.ObjectId,
//             ref: "Topic"
//         }
//     ]},
//     {
//     timestamps: true,
//     toJSON: {virtuals:true}        
// });
// const Subject = mongoose.model("Subject",subjectSchema);

// export default Subject

// Subject.js

 import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  topicsId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Topic' }]
});

const Subject = mongoose.model('Subject', subjectSchema);

export default Subject
