import express from "express";
import { addSubject, getSubjects } from "../controller/subject.js";
import { addTopic, getTopicById, getTopicsBySubjectId } from "../controller/topic.js";


const subjectRoute = express.Router();

//add subject
subjectRoute.post("/", addSubject);

//get subjects
subjectRoute.get("/", getSubjects);

//add topic
subjectRoute.post("/:subjectId/topics", addTopic);

//get topics for a subject
subjectRoute.get( "/:subjectId/topics", getTopicsBySubjectId);

//get topic by id
subjectRoute.get( "/:subjectId/topics/:topicId", getTopicById);



export default subjectRoute;
