import Club from "../Models/model.js";

export const getAnggota = async (req, res) => {
  try {
    const user = await Club.find();
    res.json(user);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

export const getAnggotaById = async (req, res) => {
    try {
        const user = await Club.findById(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const saveAnggota = async (req, res) => {
    const user = new Club(req.body);
    try {
        const insertuser = await user.save();
        res.status(201).json(insertuser);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const updateAnggota = async (req, res) => {
    try {
        const updateuser = await Club.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updateuser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteAnggota = async (req, res) => {
    try {
        const deleteuser = await Club.deleteOne({_id:req.params.id});
        res.status(200).json(deleteuser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}