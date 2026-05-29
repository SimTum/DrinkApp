import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = new mongoose.Schema({
  name:  { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 }
}, { timestamps: true });

// Hook: criptografar senha antes de salvar
userSchema.pre('save', async function() {
  if (!this.isModified('senha')) return;
  this.senha = await bcrypt.hash(this.senha, 10);
});


const User = mongoose.model('User', userSchema);

export default User  