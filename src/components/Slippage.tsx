import axios, {AxiosResponse} from 'axios';
import React, { useState, useEffect  } from 'react';

export const Slippage = () => {

    const cardStyle = {
        width: '18rem'
    }

    interface Slippage {
        buy_price_slippage: String,
        sell_price_slippage: String,
        source: String
    }

    const [slippageArr, setSlippagesData] = useState<Slippage[]>([
        {
            buy_price_slippage: "Cargando",
            sell_price_slippage: "Cargando",
            source: "Cargando"
        }
    ]);
    
    const url = `http://localhost:4200/api/slippages/get`;

    useEffect(() => {
        axios
            .get<Slippage[]>(url)
            .then(async(response: AxiosResponse) => {
                console.log('Response:', response.data)
                setSlippagesData(await response.data)
            })
    }, [])

    return (
        <div className="bg-light p-5">
            <div className="container shadow p-5 bordered bg-white">
                <h3 className="text-center bg-success text-white p-3">Slippages</h3>
                {
                    slippageArr.map((object) => {
                        return (
                        <div>
                            <h4 className="text-center mt-5"> Sitio: {object.source}</h4>
                            <div className="container mt-5 d-flex justify-content-center">
                                <div className="card mx-5" style={cardStyle}>
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Diferencia de compra</h5>
                                        <h4 className="text-center">{`$${object.buy_price_slippage.replace("$", "")}`}</h4>
                                    </div>
                                </div>
                                <div className="card mx-5" style={cardStyle}>
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Diferencia de venta</h5>
                                        <h4 className="text-center">{`$${object.sell_price_slippage.replace("$", "")}`}</h4>
                                    </div>
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