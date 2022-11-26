import Joi from "joi"

console.log(Joi);

const passwordSchema = Joi.string().min(4).max(7);

export default function validatedPassword(password) {
    return passwordSchema.validate(password);
}


