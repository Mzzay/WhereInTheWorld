import Axios from "axios"

class CountryClass {
    async getAll() {
        try {
            const res = await Axios.get('https://restcountries.eu/rest/v2/all')
            return res.data;
        }catch(err) {
            console.log(err)
            return false;
        }
    }

    async getByName( name:string ) {
        try {
            const res = await Axios.get(`https://restcountries.eu/rest/v2/name/${name}`)
            return res.data;
        }catch(err) {
            console.log(err)
            return false;
        }
    }
}

const Countries = new CountryClass()
export default Countries