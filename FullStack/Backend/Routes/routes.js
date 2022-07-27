import express from 'express';
import { getAnggota, saveAnggota, getAnggotaById, updateAnggota, deleteAnggota } from '../Controllers/controller.js';

const router = express.Router();

router.get('/anggota', getAnggota);
router.post('/anggota', saveAnggota);
router.get('/anggota/:id', getAnggotaById);
router.patch('/anggota/:id', updateAnggota)
router.delete('/anggota/:id', deleteAnggota);



export default router;