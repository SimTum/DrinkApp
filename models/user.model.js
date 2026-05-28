import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = new mongoose.Schema({
  nome:  { type: String, required: true },
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true, minlength: 6 }
}, { timestamps: true });

// Hook: criptografar senha antes de salvar
userSchema.pre('save', async function(next) {
  if (!this.isModified('senha')) return next();
  this.senha = await bcrypt.hash(this.senha, 10);
  next();
});

userSchema.methods.compararPassword = function(senha) {
  return bcrypt.compare(senha, this.senha);
};


const User = mongoose.model('User', userSchema);

export default User  