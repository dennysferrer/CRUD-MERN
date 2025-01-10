import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import { createdAccessToken } from "../libs/jwt.js";

export const registerController = async (req, res) => {
    
    try {
        const { username, email, password } = req.body;
        const passwordEncrypt = await bcrypt.hash(password, 10);
        const userToSave = new User({ username, email, password: passwordEncrypt });
        const userSaved = await userToSave.save();
        // Generate token
        const token = await createdAccessToken(userSaved._id);
        res.cookie('token', token)

        res.status(201).send({
            id: userSaved._id, 
            username: userSaved.username, 
            email: userSaved.email,
            createdAt: userSaved.createdAt,
            updatedAt: userSaved.updatedAt
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while creating the user');
    }
}

export const loginController = async (req, res) => {
    
    try {
        const { email, password } = req.body;
        const userFound = await User.findOne({ email });
        if (!userFound) return res.status(404).send('User not found, you should register');
        const isMatch = bcrypt.compare(password, userFound.password);
        if (!isMatch) return res.status(401).send('Invalid credentials');
        // Generate token
        const token = await createdAccessToken(userFound._id);

        res.cookie('token', token)
        res.status(201).send({
            id: userFound._id, 
            username: userFound.username, 
            email: userFound.email,
            createdAt: userFound.createdAt,
            updatedAt: userFound.updatedAt
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while creating the user');
    }
}

export const profileController = async (req, res) => {
    const userProfile = await User.findById(  req.user.id )
    res.status(200).send(userProfile)
}