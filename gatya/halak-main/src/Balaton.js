import axios from "axios";
import { useEffect, useState } from "react";


export default function Balaton() {

    const [to, setTo] = useState({});

    useEffect(() => {
        GetTo()
    }, [])

    function GetTo() {
        axios.get(`https://halak.onrender.com/api/Tavak/1`)
            .then(response => {
                setTo(response.data);
            })
    }

    return (
        <div style={{ justifyContent: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div class="card" style={{ width: "18rem" }}>
                <div class="card-body">
                    <h5 class="card-title">{to.nev}</h5>
                    <p class="card-text">Helyszín: {to.helyszin}</p>
                </div>
            </div>
        </div>
    )
}
