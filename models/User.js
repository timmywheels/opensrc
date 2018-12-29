const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
	githubId: String,
	email: String
})

mongoose.model("users", userSchema)