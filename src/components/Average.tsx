import axios, {AxiosResponse} from 'axios';
import React, { useState, useEffect  } from 'react';

export const Average = () => {

    const cardStyle = {
        width: '18rem'
    }

    interface Average {
        average_sell_price: String,
        average_buy_price: String
    }

    const [average, setAverage] = useState<Average>({
        average_sell_price: "Cargando",
        average_buy_price: "Cargando"
    });
    
    const url = `http://localhost:4200/api/averages/get`;

    useEffect(() => {
        axios
            .get<Average>(url)
            .then(async(response: AxiosResponse) => {
                setAverage(await response.data)
            })
    }, [])

    return (
        <div className="container shadow p-5">
            <h3 className="text-center bg-success text-white p-3">Average</h3>
            <div>
            <div className="container mt-5 d-flex justify-content-center">
                <div className="card mx-5" style={cardStyle}>
                    <div className="card-body">
                        <h5 className="card-title text-center">Promedio Compra</h5>
                        <h4 className="text-center">{`$${average.average_buy_price.replace("$", "")}`}</h4>
                    </div>
                </div>
                <div className="card mx-5" style={cardStyle}>
                    <div className="card-body">
                        <h5 className="card-title text-center">Promedio Venta</h5>
                        <h4 className="text-center">{`$${average.average_sell_price.replace("$", "")}`}</h4>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )

}