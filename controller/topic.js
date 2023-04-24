import Subject from "../models/subject.js";
import Topic from "../models/topic.js";

export const addTopic = async (req, res) => {
  try {
    const { subjectId } = req.params;
    const { title, description, videoUrl } = req.body;
    const subject = await Subject.findById(subjectId);
    if (!subject) {
      return res.status(404).json({ error: "Subject not found" });
    }
    const topic = new Topic({
      title,
      description,
      videoUrl,
      subject: subjectId,
    });
    await topic.save();
    subject.topics.push(topic);
    await subject.save();
    res.status(201).json(topic);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTopicsBySubjectId = async (req, res) => {
  try {
    const { subjectId } = req.params;
    const subject = await Subject.findById(subjectId);
    if (!subject) {
      return res.status(404).json({ error: "Subject not found" });
    }
    const topics = await Topic.find({ subject: subjectId }).populate("subject");
    res.status(200).json(topics);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

// export const getTopicById = async (req, res) => {
//   try {
//     const { subjectId, topicId } = req.params;
//     const topic = await Topic.findOne({ _id: topicId, subject: subjectId });
//     if (!topic) {
//       return res.status(404).json({ error: "Topic not found" });
//     }
//     res.status(200).json(topic);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Server error" });
//   }
// };
export const getTopicById = async (req, res) => {
  try {
    const { subjectId, topicId } = req.params;
    const subject = await Subject.findById(subjectId).populate('topics');
    if (!subject) {
      return res.status(404).json({ error: "Subject not found" });
    }
    const topic = subject.topics.find(t => t._id.toString() === topicId);
    if (!topic) {
      return res.status(404).json({ message: 'topic not found for this course' });
    }
    res.status(200).json(topic);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

