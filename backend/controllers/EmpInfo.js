import EmpInfo from "../model/EmpInfo.js";
import bcrypt from 'bcrypt';


export const signup = async (req, res) => {
    const { name, email, pass } = req.body;
    if (name == "" || email == "" || pass == "") {
        res.send({ message: "Please Fills All Details" })
    } else {
        const resData = await EmpInfo.findOne({ empEmail: email });
        if (resData) {
            res.send({ message: "This Email is Used" })
        } else {
            const hashPass = bcrypt.hashSync(pass, 10);

            const data = await EmpInfo.create({ empName: name, empEmail: email, empPass: hashPass });
            res.send({ message: "SignUp Successfull", data });
        }
    }
}

export const login = async (req, res) => {
    const { email, pass } = req.body;
    if (email == "" || pass == "") {
        res.send({ message: "Please Fills All Details" })
    } else {
        const resData = await EmpInfo.findOne({ empEmail: email });
        if (resData) {
            const check = await bcrypt.compare(pass, resData.empPass);
            if (check) {
                res.send({ message: "Login Successfull", resData });

            } else {
                res.send({ message: "Email and Password are not Matched" })
            }
        } else {

            res.send({ message: "Email and Password are not Matched" })
        }
    }
}