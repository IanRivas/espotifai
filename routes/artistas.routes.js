import express from 'express';
const router = express.Router();
import {
  obtenerArtista,
  obtenerArtistas,
  crearArtista,
  actualizarArtista,
  eliminarArtista,
} from '../controllers/artistas.controller.js';

router.post('/', crearArtista);
router.get('/', obtenerArtistas);
router.get('/:id', obtenerArtista);
router.delete('/:id', eliminarArtista);
router.put('/:id', actualizarArtista);

export default router;
