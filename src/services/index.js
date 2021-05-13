import axios from "axios";

//vezan uz konkretni backend
let Service = axios.create({
    baseURL: 'http://localhost:3200',
    timeout: 1000
})
   
//vezan za pojedine rute

let Meso = {
    async getAll(namirniceMeso) {
        let response = await Service.get(`/meso?${namirniceMeso}`)
        let data = response.data
        data = data.map(doc => {
            return {
                id: doc.id,
                Vrsta_mesa: doc.naziv,
                kolicina: doc.kolicina
               
            };
        });
        return data
    }
}

















export {Service, Meso}