import React, { useState, useEffect } from "react";
import "./club.css";
import axios from "axios";
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom'

const ClubList = () => {
  const [anggota, setAnggota] = useState([]);


  useEffect(() => {
    getAnggota()
  }, []);

  const getAnggota = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/anggota`);
      setAnggota(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteAnggota = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/anggota/${id}`);
      getAnggota();
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="container-table">
      <Link to="/tambah">
          <Button className="mb-3">Tambah Anggota</Button>
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>No</th>
            <th style={{ textAlign: "center" }}>Nama</th>
            <th style={{ textAlign: "center" }}>Alamat</th>
            <th style={{ textAlign: "center" }}>Umur</th>
            <th style={{ textAlign: "center" }}>E-mail</th>
            <th style={{ textAlign: "center" }}>Jenis Kelamin</th>
            <th style={{ textAlign: "center" }}>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {anggota.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.nama}</td>
              <td>{user.alamat}</td>
              <td>{user.umur}</td>
              <td>{user.email}</td>
              <td>{user.jenisKelamin}</td>
              <td>
                <Link style={{textDecoration: 'none'}} to={`/edit/${user._id}`} className="button-edit">Edit</Link>
                <button onClick={() => deleteAnggota(user._id)} className="button-hapus">Hapus</button>
                <Link style={{textDecoration: 'none'}} to={`/detail/${user._id}`} className="button-detail">Detail</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClubList;
