import useData from "./useData";
import platforms from "../data/platforms";

interface Platform{
    id: number;
    name: string;
    slug: string;
}

// To call directly from backend
//const usePlatforms = () => useData<Platform>('/platforms/lists/parents')

// To load from static data, for data that is static
const usePlatforms = () => ({data: platforms, error: null})

export default usePlatforms