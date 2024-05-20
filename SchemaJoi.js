const Joi = require("joi")

const schema = Joi.object({
    category:Joi.string().required(),
    image: Joi.string().uri().required(),
    health: Joi.string().required(),
    beauty: Joi.string().required(),
    dos:Joi.string().required(),
    donts: Joi.string().required(),
    nickname : Joi.string().required(),
})
module.exports = schema;