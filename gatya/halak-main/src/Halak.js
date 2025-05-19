import { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Halak() {

  const [halak, setHalak] = useState([]);

  useEffect(() => {
    axios.get("https://halak.onrender.com/api/Halak")
      .then(response => {
        setHalak(response.data);
      })
  }, [])

  return (
    <div>
      <h1>Halak:</h1>
      
      <div className='row'>
        {
          halak.map(function (hal) {
            return (
                <div className='col-md-4'>
                  <Link to={"/hal/" + hal.id}>
                    <div className="card" style={{ width: "18rem" }}>
                      <div className="card-body">
                        <h5 className="card-title">{hal.nev}</h5>
                      </div>
                    </div>
                  </Link>
                </div>
            )
          })
        }
      </div>
    </div>
  )
}
