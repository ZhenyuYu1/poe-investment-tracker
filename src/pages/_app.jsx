import React from "react"

import "../../src/styles/globals.css"
import "../styles/App.css"

import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

export default function App({ Component, pageProps }) {
    return (
      <div className="content-container">
        <Header />
        <main className="content-main">
          <Component {...pageProps}/>
        </main>
        <Footer />
      </div>
    );
}