import jwt from 'jsonwebtoken';

export const createdAccessToken = (user_id) => {
    return new Promise((resolve, reject) => {
        jwt.sign({ id: user_id }, process.env.JWT_SECRET, { expiresIn: "1d" }, (err, token) => {
            if (err) return reject(err);
            resolve(token);
        });
    });
}