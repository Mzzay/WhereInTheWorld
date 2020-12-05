import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import Loader from 'react-loader-spinner'
import { useHistory } from 'react-router-dom'
import { colors } from '../../components/colors'
import Countries from '../../components/request'
import { ICountry } from '../../components/types'

interface Props {
    mode: string
}

export default function Home({ mode }: Props) {

    const [ searchValue, setSearchValue ] = useState("")
    const [ filterOpen, setFilterOpen ] = useState(false)
    const [ filterValue, setFilterValue ] = useState('')
    const [ countriesData, setCountriesData ] = useState<ICountry[]>([])
    const [ correctCountries, setCorrectCountries ] = useState<ICountry[]>([])
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        const getAllCountries = async () => {
            const data = await Countries.getAll();
            
            if (data) {
                setCountriesData(data);
                setCorrectCountries(data);
                setLoading(false);
            }
        }
        getAllCountries();
    },[])

    useEffect(() => {
        setFilterOpen(false); 
        if (filterValue.length > 0 || searchValue.length > 0) {
            const countries: ICountry[] = [...countriesData].filter(c => {
                if (filterValue.length > 0) {
                    return c.region === filterValue && c.name.toLowerCase().substr(0, searchValue.length) === searchValue.toLowerCase()
                }else{
                    return c.name.toLowerCase().substr(0, searchValue.length) === searchValue.toLowerCase()
                }
            })
            setCorrectCountries(countries)
        }else{
            setCorrectCountries(countriesData)
        }
    },[ filterValue, searchValue, countriesData ])


    return (
        <main
            style={{
                color : mode === "light" ?
                    colors.light_mode_text
                    :
                    colors.white
            }}
            id="home-container"
        >
            <section className="search">
                <div id="input-search"
                    style={{
                        backgroundColor: mode === "light" ?
                            colors.white
                            :
                            colors.dark_mode_element,
                        color : mode === "light" ?
                            colors.light_mode_text
                            :
                            colors.white
                    }}
                    className="shadow-box"
                >
                    <FaSearch size={26} />
                    <input type="text" name="search" id="search" onChange={(t) => setSearchValue(t.target.value)} placeholder="Search for a country..." 
                        style={{
                            color: mode === "light" ?
                                colors.light_mode_input
                                :
                                colors.white
                        }}
                    />
                </div>
                <div>
                   <div
                        className="filter-box shadow-box" 
                        style={{
                            backgroundColor: mode === "light" ? colors.white : colors.dark_mode_element
                        }}
                   >
                        <div onClick={() => setFilterOpen(!filterOpen)} className="filter-button">
                            <p>{
                                filterValue.length > 0 ? filterValue : "Filter by Region"
                                }</p>
                        </div>
                        {
                            filterOpen && <div 
                                className="filter-options shadow-box"
                                style={{
                                    backgroundColor: mode === "light" ? colors.white : colors.dark_mode_element
                                }}
                            >
                                <li onClick={() => setFilterValue("Africa")}>Africa</li>
                                <li onClick={() => setFilterValue("Americas")}>Americas</li>
                                <li onClick={() => setFilterValue("Asia")}>Asia</li>
                                <li onClick={() => setFilterValue("Europe")}>Europe</li>
                                <li onClick={() => setFilterValue("Oceania")}>Oceania</li>
                            </div>
                        }
                   </div>
                </div>
            </section>
            <section className="country-container">
                {
                    loading ? <div className="align-center">
                        <Loader
                            type="ThreeDots"
                            color={ mode === "light" ? colors.dark_mode_background : colors.white }
                            height={100}
                            width={100}
                        />
                    </div> :
                        correctCountries.map((e: ICountry) => {
                            return <CountryComponent key={e.name} data={e} mode={mode} />
                        })
                }
            </section>
        </main>
    )
}


function CountryComponent({ data, mode }: { data: ICountry, mode: string }) {
    const history = useHistory()

    return <div
            className="country-box shadow-box"
            style={{ backgroundColor: mode === "light" ? colors.white : colors.dark_mode_element }}
            onClick={() => history.push(`/${data.name}`)}
        >
        <div className="img-container">
            <img src={data.flag} alt={`flag ${data.name}`} />
        </div>
        <div className="info">
            <p className="name">{data.name}</p>
            <p className="sub-info"><span>Population:</span> {data.population}</p>
            <p className="sub-info"><span>Region:</span> {data.region}</p>
            <p className="sub-info"><span>Capital:</span> {data.capital}</p>
        </div>
    </div>
}