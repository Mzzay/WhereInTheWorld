import React, { useEffect, useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { useHistory, useParams } from 'react-router-dom'
import { colors } from '../../components/colors'
import Countries from '../../components/request'
import { ICountry } from '../../components/types'

interface Props {
    mode : string;
}

export default function Details({ mode }: Props) {

    const [ data, setData ] = useState<ICountry | null>(null)
    const [ error, setError ] = useState(false)
    const { name }: { name: string } = useParams()
    const history = useHistory()

    useEffect(() => {
        const getCountryByCode = async () => {
            const res: ICountry[] = await Countries.getByName(name)
            console.log(res)
            if (res) {
                setData(res[0])
            }else{
                setError(true)
            }
        }
        getCountryByCode()
    },[name])

    return (
        <main className="details-container">
            <div className="back-button shadow-box"
                onClick={() => history.goBack()}
                style={{
                        color : mode === "light" ? colors.dark_mode_element : colors.white,
                        backgroundColor: mode === "light" ? colors.white : colors.dark_mode_element
                    }}>
                <p><FaArrowLeft size={23} /> Back</p>
            </div>
            <section>
                <div className="flag-container">
                    <img src={data?.flag} alt={data?.name} />
                </div>
                <div
                    className="info-container"
                    style={{
                        color : mode === "light" ? colors.dark_mode_background : colors.white,
                    }}
                >
                    <h2>{data?.name}</h2>
                    <div className="info-content">
                        <div className="info-left">
                            <p><span>Native Name: </span>{data?.nativeName}</p>
                            <p><span>Population: </span>{data?.population}</p>
                            <p><span>Region: </span>{data?.region}</p>
                            <p><span>Sub Region: </span>{data?.subregion}</p>
                            <p><span>Capital: </span>{data?.capital}</p>
                        </div>
                        <div className="info-right">
                            <p><span>Top Level Domain: </span>{data?.topLevelDomain}</p>
                            <p><span>Currencies: </span>{data?.currencies.map(c => c.code).join(',')}</p>
                            <p><span>Currencies: </span>{data?.languages.map(l => l.name).join(',')}</p>
                        </div>
                    </div>
                    {
                        data?.borders && data.borders.length > 0  && (
                            <div className="info-content">
                                <p id="border-subtitle">Border Countries: </p>
                                <div className="border-container">
                                    {
                                        data?.borders.map((b: string, i: number) => {
                                            return <BorderComponent country={b} key={i} mode={mode} />
                                        })
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
            </section>
        </main>
    )
}

function BorderComponent({ country, mode }: { country: string, mode: string }) {
    return (
        <div className="name-country-box shadow-box"
            style={{ backgroundColor: mode === "light" ? colors.white : colors.dark_mode_element, color: mode === "light" ? colors.dark_mode_element : colors.white }}
        >
            { country }
        </div>
    )
}
