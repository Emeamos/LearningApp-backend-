
import Subject from "../models/subject.js"

export const addSubject = async(req, res) =>{
    try {
        const { name } = req.body;
        const subject = new Subject({ name });
        await subject.save();
        res.status(201).json({message: 'subject created', data: subject})
    } catch (error) {
       res.status(500).json({message: error.message}) 
    }
    
}

export const getSubjects = async (req, res) => {
    try {
      const subjects = await Subject.find();
      res.status(200).json(subjects);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  };