import axios from "axios";

// Create axios instance with custom configuration - 
// axios.create

// Exporting axios instance as a default module
export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '4011e2717f03433fb156e8365a05a03c'
    }
})