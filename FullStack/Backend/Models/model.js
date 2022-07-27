import mongoose from 'mongoose';

const club = mongoose.Schema({
    nama: {
        type:String,
        required: true
    },
    alamat: {
        type:String,
        required: true
    },
    umur: {
        type:Number,
        required: true
    },
    email: {
        type:String,
        required: true
    },
    jenisKelamin: {
        type:String,
        required: true
    }
});

export default mongoose.model('Anggota', club);
