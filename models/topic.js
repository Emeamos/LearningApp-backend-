// import mongoose from "mongoose";

// const TopicSchema = new mongoose.Schema({
//     topic:{
//         type: String,
//         require: true
//     },
//     topicInfo:[
//         {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: "TopicInfo"
//         }
//     ]
// });
// const Topic = mongoose.model('Topic', TopicSchema);

// export default Topic;

// Topic.js

import mongoose from "mongoose";

const topicSchema = new mongoose.Schema({
  title: { type: String, required: true },
  videoUrl: { type: String, required: true },
  description: { type: String },
  subjectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true }
});

const Topic = mongoose.model('Topic', topicSchema);

export default Topic;
