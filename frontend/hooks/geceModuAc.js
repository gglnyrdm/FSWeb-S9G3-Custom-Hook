import localStorageKullan from "./localStorageKullan";

function GeceModuAc() {
    const [geceModu, setGeceModu] = localStorageKullan("geceModu", false);
    return [geceModu, setGeceModu];
}
export default GeceModuAc;