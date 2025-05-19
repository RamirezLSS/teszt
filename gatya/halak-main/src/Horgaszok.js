import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Horgaszok() {

    const [horgaszok, setHorgaszok] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("https://halak.onrender.com/api/Horgaszok")
            .then(response => {
                setHorgaszok(response.data);
            })
    }, [])

    function HorgaszTorol(id) {
        axios.delete(`https://halak.onrender.com/api/Horgaszok/${id}`)
            .then(() => {
                alert("Sikeresen törölve!");
                navigate("/");
            })
            .catch(error => {
                console.error("Hiba történt a törlés során! ", error);
            })
    }

    return (
        <div>
            <h1>Horgászok:</h1>
            
            <div className='row'>
                {
                    horgaszok.map(function (horgasz) {
                        return (
                            <div className='col-md-4'>
                                <div className="card" style={{ width: "18rem" }}>
                                    <div className="card-body">
                                        <h5 className="card-title">{horgasz.nev} <i onClick={function () {
                                            if (window.confirm("Biztosan törölni szeretnéd?")) {
                                                HorgaszTorol(horgasz.id)
                                            }
                                        }}
                                            class="bi bi-trash-fill"></i></h5>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
