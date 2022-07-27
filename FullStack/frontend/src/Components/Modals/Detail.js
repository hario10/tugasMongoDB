import React, {useState, useEffect, useRef} from "react";
import { Modal, ListGroup } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import "./detail.css";
import axios from 'axios';

const Detail = () => {
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [umur, setUmur] = useState("");
  const [email, setEmail] = useState("");
  const [jenisKelamin, setJenisKelamin] = useState("");
  const {id} = useParams()
  const tempGet = useRef();

  
  
  const getModalById = async () => {
    const response = await axios.get(`http://localhost:5000/anggota/${id}`);
    setNama(response.data.nama);
    setAlamat(response.data.alamat);
    setUmur(response.data.umur);
    setEmail(response.data.email);
    setJenisKelamin(response.data.jenisKelamin);
  }
  
  tempGet.current = getModalById
  useEffect(() => {
    tempGet.current()
  }, [])
  
  return (
    <div>
      <Modal.Dialog className="detail">
        <Modal.Header>
          <Modal.Title className="text-detail">Detail Anggota</Modal.Title>
        </Modal.Header>
        <Modal.Body className="list-detail">
              <ListGroup className="tulisan">
                <ListGroup.Item><span>ID</span> <span className="nomor">{id}</span></ListGroup.Item>
                <ListGroup.Item><span>Nama</span> <span className="isi">{nama}</span></ListGroup.Item>
                <ListGroup.Item><span>Alamat</span> <span className="isi2">{alamat}</span></ListGroup.Item>
                <ListGroup.Item><span>Umur</span> <span className="isi3">{umur}</span></ListGroup.Item>
                <ListGroup.Item><span>E-mail</span> <span className="isi4">{email}</span></ListGroup.Item>
                <ListGroup.Item><span>Jenis Kelamin</span> <span className="isi5">{jenisKelamin}</span></ListGroup.Item>
              </ListGroup>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
};

export default Detail;
