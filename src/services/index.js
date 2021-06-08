import axios from "axios";
import $router from "@/router";

//vezan uz konkretni backend
let Service = axios.create({
  baseURL: "https://fast-badlands-32396.herokuapp.com/",
  timeout: 3000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

Service.interceptors.request.use((request) => {
  try {
    request.headers["Authorization"] = "Bearer " + Auth.getToken();
  } catch (e) {
    console.error(e);
  }
  return request;
});

Service.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status == 403) {
      $router.replace("/error");
      return Promise.reject("Ovoj ruti ne možes pristupiti", error);
    }
    if (error.response.status == 401) {
      Auth.logout();
      $router.go();
    }
  }
);

//vezan za pojedine rute

let UzmiNadimak = {
  async getOne(nadimak) {
    let response = await Service.get(`/users/${nadimak}`);
    let doc = response.data;
    return {
      nadimak: doc.nadimak_obitelji,
      broj_clanova: doc.broj_clanova,
      lozinka: doc.lozinka,
      role: doc.role,
    };
  },
};

let PojedinacniPlan = {
  async getOne(email) {
    let response = await Service.get(`/pojedinacniPlan/${email}`);
    let doc = response.data;
    return {
      email: doc.email,
      spolMuski: doc.spolMuski,
      spolZene: doc.spolZene,
      ciljMuski: doc.ciljMuski,
      ciljZene: doc.ciljZene,
      kalorijeMuski: doc.kalorijeMuski,
      kalorijeZene: doc.kalorijeZene,
    };
  },
};

let NadipoId = {
  async getOne(emailpoID) {
    let response = await Service.get(`/SpremiTjedan/${emailpoID}`);
    let doc = response.data;
    return {
      email: doc.email,
      radni_dan: doc.radni_dan,
      Pdorucak: doc.Pdorucak,
      Prucak: doc.Prucak,
      Pvecera: doc.Pvecera,
      Udorucak: doc.Udorucak,
      Urucak: doc.Urucak,
      Uvecera: doc.Uvecera,
      Sdorucak: doc.Sdorucak,
      Srucak: doc.Srucak,
      Svecera: doc.Svecera,
      Cdorucak: doc.Cdorucak,
      Crucak: doc.Crucak,
      Cvecera: doc.Cvecera,
      PEdorucak: doc.PEdorucak,
      PErucak: doc.PErucak,
      PEvecera: doc.PEvecera,
      SUdorucak: doc.SUdorucak,
      SUrucak: doc.SUrucak,
      SUvecera: doc.SUvecera,
      Ndorucak: doc.Ndorucak,
      Nrucak: doc.Nrucak,
      Nvecera: doc.Nvecera,
    };
  },
};

let Search = {
  async getAll(search_text) {
    let options = {};

    if (search_text) {
      options.params = {
        name2: search_text,
      };
    }
    let response = await Service.get("/admin/search/one", options);
    let data = response.data;
    data = data.map((doc) => {
      return {
        email: doc.email,
      };
    });
    return data;
  },
};

let Admin = {
  async getAll(admin) {
    let response = await Service.get(`/admin?${admin}`);
    let data = response.data;
    data = data.map((doc) => {
      return {
        email: doc.email,
        role: doc.role,
      };
    });
    return data;
  },

  async getOne(admin) {
    let response = await Service.get(`/admin/${admin}`);
    let doc = response.data;
    return {
      role: doc.role,
    };
  },
};

//NAMIRNICE

let Meso = {
  async getAll(namirniceMeso) {
    let response = await Service.get(`/meso?${namirniceMeso}`);
    let data = response.data;
    data = data.map((doc) => {
      return {
        id: doc.id,
        Vrsta_mesa: doc.naziv,
        kolicina: doc.kolicina,
      };
    });
    return data;
  },
};

let Kruh = {
  async getAll(namirniceKruh) {
    let response = await Service.get(`/kruh?${namirniceKruh}`);
    let data = response.data;
    data = data.map((doc) => {
      return {
        id: doc.id,
        Vrsta_kruha: doc.naziv,
        kolicina: doc.kolicina,
      };
    });
    return data;
  },
};

let Ribe = {
  async getAll(namirniceRibe) {
    let response = await Service.get(`/ribe?${namirniceRibe}`);
    let data = response.data;
    data = data.map((doc) => {
      return {
        id: doc.id,
        Vrsta_ribe: doc.naziv,
        kolicina: doc.kolicina,
      };
    });
    return data;
  },
};

let Brza_hrana = {
  async getAll(namirniceBH) {
    let response = await Service.get(`/brza_hrana?${namirniceBH}`);
    let data = response.data;
    data = data.map((doc) => {
      return {
        id: doc.id,
        Vrsta_BH: doc.naziv,
        kolicina: doc.kolicina,
      };
    });
    return data;
  },
};

let Voce = {
  async getAll(namirniceVoce) {
    let response = await Service.get(`/voce?${namirniceVoce}`);
    let data = response.data;
    data = data.map((doc) => {
      return {
        id: doc.id,
        Vrsta_voca: doc.naziv,
        kolicina: doc.kolicina,
      };
    });
    return data;
  },
};

let Povrce = {
  async getAll(namirnicePovrce) {
    let response = await Service.get(`/povrce?${namirnicePovrce}`);
    let data = response.data;
    data = data.map((doc) => {
      return {
        id: doc.id,
        Vrsta_povrca: doc.naziv,
        kolicina: doc.kolicina,
      };
    });
    return data;
  },
};

let MlPro = {
  async getAll(namirniceMlPro) {
    let response = await Service.get(`/mlijecni_proizvodi?${namirniceMlPro}`);
    let data = response.data;
    data = data.map((doc) => {
      return {
        id: doc.id,
        Vrsta_MlPro: doc.naziv,
        kolicina: doc.kolicina,
      };
    });
    return data;
  },
};

let Auth = {
  async promjenaLozinke(old_password, new_password) {
    let response = await Service.patch("/users", {
      old_password: old_password,
      new_password: new_password,
    });

    let user = response.data;

    localStorage.setItem("user", JSON.stringify(user));

    return true;
  },

  async register(nadimak_obitelji, broj_clanova, email, lozinka) {
    let response = await Service.post("/users", {
      nadimak_obitelji: nadimak_obitelji,
      broj_clanova: broj_clanova,
      email: email,
      lozinka: lozinka,
    });

    let user = response.data;

    localStorage.setItem("user", JSON.stringify(user));

    return true;
  },

  async login(email, lozinka) {
    let response = await Service.post("/auth", {
      email: email,
      lozinka: lozinka,
    });

    let user = response.data;

    localStorage.setItem("user", JSON.stringify(user));

    return true;
  },

  logout() {
    localStorage.removeItem("user");
  },

  getUser() {
    return JSON.parse(localStorage.getItem("user"));
  },

  getToken() {
    let user = Auth.getUser();
    if (user && user.token) {
      return user.token;
    } else {
      return false;
    }
  },

  prijavljen() {
    let user = Auth.getUser();
    if (user && user.token) {
      return true;
    }
    return false;
  },

  state: {
    get prijavljen() {
      return Auth.prijavljen();
    },

    get userEmail() {
      let user = Auth.getUser();
      if (user) {
        return user.email;
      }
    },
  },
};

export {
  Service,
  Meso,
  Kruh,
  Ribe,
  Brza_hrana,
  Voce,
  Povrce,
  MlPro,
  NadipoId,
  PojedinacniPlan,
  Auth,
  UzmiNadimak,
  Admin,
  Search,
};
