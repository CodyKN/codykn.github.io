import "./app.css";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import { Header } from "~/layouts/Header";
import { Footer } from "./layouts/Footer";

export default function App() {
    return (
        <Router
            root={(props) => (
                <>
                    <Header />
                    <Suspense>{props.children}</Suspense>
                    <Footer />
                </>
            )}
        >
            <FileRoutes />
        </Router>
    );
}
