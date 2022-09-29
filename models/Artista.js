import { Schema, model } from 'mongoose';

const ArtistaSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  seguidores: {
    type: Number,
    required: true,
  },
  genero: {
    type: String,
    required: true,
  },
  imagen: {
    type: String,
    required: true,
  },
});

export default model('Artista', ArtistaSchema);
