import axios, {AxiosResponse} from 'axios';
import React, { useState, useEffect  } from 'react';

export const Quotes = () => {

    const cardStyle = {
        width: '18rem'
    }

    interface Quote {
        buy_price: String,
        sell_price: String,
        source: String
    }

    const [quotesArr, setQuotesData] = useState<Quote[]>([
        {
            buy_price: "Cargando",
            sell_price: "Cargando",
            source: "Cargando"
        }
    ]);
    
    const url = `http://localhost:4200/api/quotes/get`;

    useEffect(() => {
        axios
            .get<Quote[]>(url)
            .then(async(response: AxiosResponse) => {
                console.log('Response:', response.data)
                setQuotesData(await response.data)
            })
    }, [])

    return (
        <div className="bg-light p-5">
            <div className="container shadow p-5 bg-white">
                <h3 className="text-center bg-success text-white p-3">Quotes</h3>
                {
                    quotesArr.map((object) => {
                        return (
                        <div>
                            <h4 className="text-center mt-5"> Sitio: {object.source}</h4>
                            <div className="container mt-5 d-flex justify-content-center">
                                <div className="card mx-5" style={cardStyle}>
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Cotización Compra</h5>
                                        <h4 className="text-center">{`$${object.buy_price.replace("$", "")}`}</h4>
                                    </div>
                                </div>
                                <div className="card mx-5" style={cardStyle}>
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Cotización Venta</h5>
                                        <h4 className="text-center">{`$${object.sell_price.replace("$", "")}`}</h4>
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