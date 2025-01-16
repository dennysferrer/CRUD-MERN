import Task from '../models/task.model.js'

export const getTasks = async (req, res) => {
    const tasks = await Task.find({user:req.user.id}).populate('user');
    return res.status(200).json(tasks)
}

export const getTaskById = async (req, res) => {
    const task = Task.findById(req.params.id);
    if (!task) {
        return res.status(404).json({message: 'Taks not found'})
    }
    return res.status(200).json(task)
}

export const createTask = async (req, res) => {
    const { title, description, date, user=req.user.id } = req.body
    const task = new Task({ title, description, date, user })
    try {
        const taskSaved = await task.save()
        return res.status(201).json(taskSaved)
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}

export const updateTask = async (req, res) => {
    const id = req.params.id
    const task = await Task.findOneAndUpdate(id, req.body, {new:true})
    if (!task) {
        return res.status(404).json({message: 'Taks not found'})
    }
    return res.status(200).json(task)
}

export const deleteTask = async (req, res) => {
    const id = req.params.id
    const taskDeleted = Task.findByIdAndDelete(id)
    if (!taskDeleted) {
        return res.status(404).json({message: 'Taks not found'})
    }
    res.status(200).json(taskDeleted)
}
