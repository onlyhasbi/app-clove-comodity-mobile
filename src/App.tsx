import {IonApp, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact,} from "@ionic/react";
import {IonReactRouter} from "@ionic/react-router";
import React, {useLayoutEffect} from "react";
import {Redirect, Route, useLocation} from "react-router-dom";
import Beranda from "./pages/Beranda";
import Pekerjaan from "./pages/Pekerjaan";
import Penghasilan from "./pages/Penghasilan";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";


/* Theme variables */
import Login from "./pages/auth/LoginPage";
import "./theme/index.css";
import "./theme/variables.css";
import PilihRegistrasi from "./pages/auth/PilihRegistrasiPage";
import RegistrasiPetaniPage from "./pages/auth/RegistrasiPetaniPage";
import RegistrasiPedagangPage from "./pages/auth/RegistrasiPedagangPage";
import {Briefcase, Coins, Home, Settings} from "lucide-react";
import Pengaturan from "./pages/Pengaturan";
import DetailPekerjaan from "../src/pages/DetailPekerjaan";
import Profile from "./pages/Profile";

setupIonicReact();

const PagesWithoutNavBar = ["/login",
    '/pilih-registrasi',
    '/registrasi-petani',
    '/registrasi-pedagang',
    '/pekerjaan/:id',
    '/profil',
];

const App: React.FC = () => {
    return (
        <IonApp>
            <IonReactRouter>
                <MainTabs/>
            </IonReactRouter>
        </IonApp>
    );
};

const MainTabs = () => {
    const location = useLocation();
    // const auth = useAuth();
    const pathname = location.pathname;

    useLayoutEffect(() => {
        const e = document.querySelector("ion-tab-bar");
        if (!e) return;
        const hideNavBar = PagesWithoutNavBar.includes(pathname);
        e.style.display = hideNavBar ? "none" : "flex";
    }, [pathname]);

    const styles = {
        tabBar: `border-t-[1px] border-slate-50`,
        tabButton: `font-light`, //`font-black text-black focus:text-red-700`,
        tabLabel: ` text-xs mt-1`,
    };
    return (
        <IonTabs>
            <IonRouterOutlet>
                <Route
                    exact
                    path="/login"
                    render={() => <Login/>}
                    // render={() => (auth.user ? <Redirect to="/" /> : <Login />)}
                />
                <Route exact path="/pilih-registrasi" render={() => <PilihRegistrasi/>}/>
                <Route exact path="/registrasi-petani" render={() => <RegistrasiPetaniPage/>}/>
                <Route exact path="/registrasi-pedagang" render={() => <RegistrasiPedagangPage/>}/>
                <Route exact path="/pekerjaan/:id" render={() => <DetailPekerjaan/>}/>
                <Route exact path="/profile" render={() => <Profile/>}/>
                <Route exact path="/beranda">
                    <Beranda/>
                </Route>
                <Route exact path="/pekerjaan">
                    <Pekerjaan/>
                </Route>
                <Route path="/penghasilan">
                    <Penghasilan/>
                </Route>
                <Route path="/pengaturan">
                    <Pengaturan/>
                </Route>
                <Route exact path="/">
                    <Redirect to="/beranda"/>
                </Route>
            </IonRouterOutlet>
            < IonTabBar className={styles.tabBar} slot="bottom">
                <IonTabButton className={styles.tabButton} tab="beranda" href="/beranda">
                    <Home strokeWidth={1}/>
                    <IonLabel className={styles.tabLabel}>Beranda</IonLabel>
                </IonTabButton>
                <IonTabButton className={styles.tabButton} tab="pekerjaan" href="/pekerjaan">
                    <Briefcase strokeWidth={1}/>
                    <IonLabel className={styles.tabLabel}>Pekerjaan</IonLabel>
                </IonTabButton>
                <IonTabButton className={styles.tabButton} tab="penghasilan" href="/penghasilan">
                    <Coins strokeWidth={1}/>
                    <IonLabel className={styles.tabLabel}>Penghasilan</IonLabel>
                </IonTabButton>
                <IonTabButton className={styles.tabButton} tab="pengaturan" href="/pengaturan">
                    <Settings strokeWidth={1}/>
                    <IonLabel className={styles.tabLabel}>Pengaturan</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    );
};

export default App;
