import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./data.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddAnggota = () => {
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [umur, setUmur] = useState("");
  const [email, setEmail] = useState("");
  const [jenisKelamin, setJenisKelamin] = useState("");
  const navigate = useNavigate();

  const tambahAnggota = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/anggota`, {
        nama,
        alamat,
        umur,
        email,
        jenisKelamin
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container data">
      <Form style={{ width: "500px", margin: "auto" }} onSubmit={tambahAnggota}>
          <Form.Group className="mb-3" >
            <Form.Label>Nama</Form.Label>
            <Form.Control
              type="text"
              placeholder="Masukkan Nama"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Alamat</Form.Label>
            <Form.Control
              type="text"
              placeholder="Masukkan Alamat"
              value={alamat}
              onChange={(e) => setAlamat(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Umur</Form.Label>
            <Form.Control
              type="number"
              placeholder="Silahkan masukkan umur"
              value={umur}
              onChange={(e) => setUmur(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              type="email"
              placeholder="Masukkan e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Jenis Kelamin</Form.Label>
            <Form.Select
              aria-label="Default select example"
              value={jenisKelamin}
              onChange={(e) => setJenisKelamin(e.target.value)}
            >
              <option value="Laki-laki">Laki-laki</option>
              <option value="Perempuan">Perempuan</option>
            </Form.Select>
          </Form.Group>

          <Button variant="primary" type="submit">
            Tambah
          </Button>
        </Form>
    </div>
  );
};

export default AddAnggota;
