import Artista from '../models/Artista.js';

export async function crearArtista(req, res) {
  try {
    const artista = new Artista(req.body); // creo el documento
    await artista.save(); // lo guardo en la base de datos

    res.status(201).json({ message: 'Artista creado' });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Error interno del sistema' });
  }
}

export async function obtenerArtistas(req, res) {
  try {
    const artistas = await Artista.find();
    res.status(200).json(artistas);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Error interno del sistema' });
  }
}

export async function obtenerArtista(req, res) {
  try {
    const artista = await Artista.findById(req.params.id);
    if (artista === null) {
      throw new Error('Artista no encontrado');
    }
    res.status(200).json(artista);
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ message: 'Artista no encontrado' });
  }
}

export async function eliminarArtista(req, res) {
  try {
    const artista = await Artista.findByIdAndDelete(req.params.id);
    if (artista === null) {
      throw new Error('Artista no encontrado');
    }
    res.status(200).json({ message: 'Artista eliminado' });
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ message: 'Artista no encontrado' });
  }
}

export async function actualizarArtista(req, res) {
  try {
    const artista = await Artista.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (artista === null) {
      throw new Error('Artista no encontrado');
    }
    res.status(200).json({ message: 'Artista actualizado', artista });
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ message: 'Artista no encontrado' });
  }
}
