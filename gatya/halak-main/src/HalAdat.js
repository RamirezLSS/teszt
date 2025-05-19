import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function HalAdat() {

  const params = useParams();

  const [hal, setHal] = useState({});

  useEffect(() => {
    GetHalAdat()
  }, [])

  function GetHalAdat() {
    axios.get(`https://halak.onrender.com/api/Halak/${params.id}`)
      .then(response => {
        setHal(response.data);
      })
  }


  return (
    <div style={{ justifyContent: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div class="card" style={{width: "18rem"}}>
          <div class="card-body">
            <h5 class="card-title">{hal.nev}</h5>
            <p class="card-text">Faj: {hal.faj}</p>
            <p class="card-text">Meret: {hal.meretCm} cm</p>
          </div>
      </div>
      <Link to="/" className="btn btn-primary">Vissza a halakhoz</Link>
    </div>
  )
}