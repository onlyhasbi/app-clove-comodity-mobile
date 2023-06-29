import {IonApp, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact,} from "@ionic/react";
import {IonReactRouter} from "@ionic/react-router";
import React, {useLayoutEffect} from "react";
import {Redirect, Route, useLocation} from "react-router-dom";
import Tab1 from "./pages/Tab1";
import Tab2 from "./pages/Tab2";
import Tab3 from "./pages/Tab3";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
// import "@ionic/react/css/normalize.css";
// import "@ionic/react/css/structure.css";
// import "@ionic/react/css/typography.css";
/* Optional CSS utils that can be commented out */
// import "@ionic/react/css/display.css";
// import "@ionic/react/css/flex-utils.css";
// import "@ionic/react/css/float-elements.css";
// import "@ionic/react/css/padding.css";
// import "@ionic/react/css/text-alignment.css";
// import "@ionic/react/css/text-transformation.css";
/* Theme variables */
import Login from "./pages/auth/LoginPage";
import "./theme/index.css";
import "./theme/variables.css";
import PilihRegistrasi from "./pages/auth/PilihRegistrasiPage";
import RegistrasiPetaniPage from "./pages/auth/RegistrasiPetaniPage";
import RegistrasiPedagangPage from "./pages/auth/RegistrasiPedagangPage";
import {Briefcase, Coins, Home, Settings} from "lucide-react";
import Tab4 from "../src/pages/Tab4";

setupIonicReact();

const PagesWithoutNavBar = ["/login",
    '/pilih-registrasi',
    '/registrasi-petani',
    '/registrasi-pedagang',
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
        tabButton: `font-light text-black`, //`font-black text-black focus:text-red-700`,
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
                <Route exact path="/tab1">
                    <Tab1/>
                </Route>
                <Route exact path="/tab2">
                    <Tab2/>
                </Route>
                <Route path="/tab3">
                    <Tab3/>
                </Route>
                <Route path="/tab4">
                    <Tab4/>
                </Route>
                <Route exact path="/">
                    <Redirect to="/tab1"/>
                </Route>
            </IonRouterOutlet>
            < IonTabBar className={styles.tabBar} slot="bottom">
                <IonTabButton className={styles.tabButton} tab="tab1" href="/tab1">
                    <Home strokeWidth={1}/>
                    <IonLabel className={styles.tabLabel}>Beranda</IonLabel>
                </IonTabButton>
                <IonTabButton className={styles.tabButton} tab="tab2" href="/tab2">
                    <Briefcase strokeWidth={1}/>
                    <IonLabel className={styles.tabLabel}>Pekerjaan</IonLabel>
                </IonTabButton>
                <IonTabButton className={styles.tabButton} tab="tab3" href="/tab3">
                    <Coins strokeWidth={1}/>
                    <IonLabel className={styles.tabLabel}>Penghasilan</IonLabel>
                </IonTabButton>
                <IonTabButton className={styles.tabButton} tab="tab4" href="/tab4">
                    <Settings strokeWidth={1}/>
                    <IonLabel className={styles.tabLabel}>Profil</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    );
};

export default App;
