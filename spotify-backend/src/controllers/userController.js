import userModel from "../models/userModel.js";

const register = async (req, res) => {
    try {
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;

        const userData = {
            name,
            email,
            password
        }

        const user = userModel(userData);
        await user.save();

        res.json({ success: true, message: 'user added' });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await userModel.findOne({ email: email });

        if (user) {
            if (user.password === password) {
                res.json({ success: true, message: 'Succes' });
            } else {
                res.json({ success: false, message: 'password incorrect' });
            }
        } else {
            res.json({ success: false, message: 'No record existed' });
        }
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};


export { register, login }