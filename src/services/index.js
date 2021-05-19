import axios from "axios";

//vezan uz konkretni backend
let Service = axios.create({
    baseURL: 'http://localhost:3200',
    timeout: 3000
})
   
//vezan za pojedine rute

let NadipoId = {

    async getOne(id){
        let response = await Service.get(`/SpremiTjedan/${id}`);
        let doc = response.data;
        return{
                id: doc._id,
                radni_dan: doc.radni_dan,
                obrok: doc.obrok,
                dorucak: doc.dorucak,
                rucak: doc.rucak,
                vecera: doc.vecera

        }
    }



}

let spremljeneVarijenteTjedan = {

    async getAll(tjedneVarijante) {
        let response = await Service.get(`/SpremiTjedan?${tjedneVarijante}`)
        let data = response.data
        data = data.map(doc => {
            return {
                id: doc._id,
                radni_dan: doc.radni_dan,
                obrok: doc.obrok,
                dorucak: doc.dorucak,
                rucak: doc.rucak,
                vecera: doc.vecera
               
            };
        });
        return data
    }
      
}


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

let Kruh = {
    async getAll(namirniceKruh) {
        let response = await Service.get(`/kruh?${namirniceKruh}`)
        let data = response.data
        data = data.map(doc => {
            return {
                id: doc.id,
                Vrsta_kruha: doc.naziv,
                kolicina: doc.kolicina
               
            };
        });
        return data
    }
}


let Ribe = {
    async getAll(namirniceRibe) {
        let response = await Service.get(`/ribe?${namirniceRibe}`)
        let data = response.data
        data = data.map(doc => {
            return {
                id: doc.id,
                Vrsta_ribe: doc.naziv,
                kolicina: doc.kolicina
               
            };
        });
        return data
    }
}

let Brza_hrana = {
    async getAll(namirniceBH) {
        let response = await Service.get(`/brza_hrana?${namirniceBH}`)
        let data = response.data
        data = data.map(doc => {
            return {
                id: doc.id,
                Vrsta_BH: doc.naziv,
                kolicina: doc.kolicina
               
            };
        });
        return data
    }
}

let Voce = {
    async getAll(namirniceVoce) {
        let response = await Service.get(`/voce?${namirniceVoce}`)
        let data = response.data
        data = data.map(doc => {
            return {
                id: doc.id,
                Vrsta_voca: doc.naziv,
                kolicina: doc.kolicina
               
            };
        });
        return data
    }
}

let Povrce = {
    async getAll(namirnicePovrce) {
        let response = await Service.get(`/povrce?${namirnicePovrce}`)
        let data = response.data
        data = data.map(doc => {
            return {
                id: doc.id,
                Vrsta_povrca: doc.naziv,
                kolicina: doc.kolicina
               
            };
        });
        return data
    }
}

let MlPro = {
    async getAll(namirniceMlPro) {
        let response = await Service.get(`/mlijecni_proizvodi?${namirniceMlPro}`)
        let data = response.data
        data = data.map(doc => {
            return {
                id: doc.id,
                Vrsta_MlPro: doc.naziv,
                kolicina: doc.kolicina
               
            };
        });
        return data
    }
}





















export  {Service, Meso, Kruh, Ribe, Brza_hrana, Voce, Povrce, MlPro, spremljeneVarijenteTjedan, NadipoId}