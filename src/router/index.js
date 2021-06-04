import Vue from "vue";
import Router from "vue-router";
import Login from "@/components/Prijava/Login";
import Register from "@/components/Prijava/Register";
import Home from "@/components/Home";
import Kalkulator_kalorija from "@/components/Kalkulator_kalorija";
import Plan_prehrane from "@/components/Plan_prehrane/plan_prehrane_home";
import Obiteljski_plan from "@/components/Plan_prehrane/obiteljski_plan";
import Pojedinacni_plan from "@/components/Plan_prehrane/pojedinacni_plan";
import Pojedinacni_zene from "@/components/Plan_prehrane/pojedinacni_zene";
import Pojedinacni_muski from "@/components/Plan_prehrane/pojedinacni_muski";
import Pojedinacni_djeca from "@/components/Plan_prehrane/pojedinacni_djeca";
import TvojeStanje_home from "@/components/Tvoje_stanje/tvojeStanje_home";
import Vas_obiteljski_plan from "@/components/Tvoje_stanje/vas_obiteljski_plan";
import Vas_pojedinacni_plan from "@/components/Tvoje_stanje/vas_pojedinacni_plan";
import Index from "@/components/Tvoje_stanje/index";
import { Auth } from "@/services";
import profil from "@/components/UserProfil/profil";
import dodajClanove from "@/components/UserProfil/dodajClanove";
import Admin from "@/components/adminPage";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "login",
      component: Login,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/home",
      name: "home",
      component: Home,
    },
    {
      path: "/kalkulator_kalorija",
      name: "kalkulator_kalorija",
      component: Kalkulator_kalorija,
    },
    {
      path: "/plan_prehrane_home",
      name: "plan_prehrane_home",
      component: Plan_prehrane,
    },
    {
      path: "/obiteljski_plan",
      name: "obiteljski_plan",
      component: Obiteljski_plan,
    },
    {
      path: "/pojedinacni_plan",
      name: "pojedinacni_plan",
      component: Pojedinacni_plan,
    },
    {
      path: "/pojedinacni_zene",
      name: "pojedinacni_zene",
      component: Pojedinacni_zene,
    },
    {
      path: "/pojedinacni_muski",
      name: "pojedinacni_muski",
      component: Pojedinacni_muski,
    },
    {
      path: "/pojedinacni_djeca",
      name: "pojedinacni_djeca",
      component: Pojedinacni_djeca,
    },
    {
      path: "/tvojeStanje_home",
      name: "tvojeStanje_home",
      component: TvojeStanje_home,
    },
    {
      path: "/vas_obiteljski_plan",
      name: "vas_obiteljski_plan",
      component: Vas_obiteljski_plan,
    },
    {
      path: "/vas_pojedinacni_plan",
      name: "vas_pojedinacni_plan",
      component: Vas_pojedinacni_plan,
    },
    {
      path: "/index",
      name: "index",
      component: Index,
    },
    {
      path: "/profil",
      name: "profil",
      component: profil,
      children: [
        {
          name: "promjena_lozinke",
          path: "/promjena_lozinke",
          component: dodajClanove,
        },
      ],
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const javneStranice = ["/", "/register"];
  const loginPotreban = !javneStranice.includes(to.path);
  const user = Auth.getUser();

  if (loginPotreban && !user) {
    next("/");
    return;
  }

  next();
});

export default router;
