import Head from "next/head";

// Component untuk mengkonfigurasi tampilan meta data jika link dari website dishare
// konfigurasi yang diterapkan pada og atau open graph meta data
// open graph meta data merupakan konfigurasi untuk open browse atau situs umum
const HeadTag = (props) => {
    // console.log("cek meta url", props.url)
    return <Head>
        <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
        ></link>
        {/* <title>{props.title} | Konveksi Lokal</title> */}
        <meta property="og:title" content={`${props.title} | Konveksi Lokal`} key="title" />
        <meta property="og:description" content={props.description} />
        <meta property="og:image" itemProp="image" content={props.image} key="ogimage" />
        <meta property="og:site_name" content={"Locavex"} key="ogsitename" />
        <meta property="og:type" content="website" />

        {/* <!-- HTML Meta Tags --> */}
        <meta name="description" content="All Products Collection by Locavex" />

        {/* <!-- Facebook Meta Tags --> */}
        {/* Get url from parent component by props */}
        <meta property="og:url" content={props.url} />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="https://locavex.vercel.app/" />
        <meta property="twitter:url" content="https://locavex.vercel.app/" />
        <meta name="twitter:title" content={`${props.title} | Commerce`} />
        <meta name="twitter:description" content={props.description} />
        <meta name="twitter:image" content={props.image} />

        {/* <!-- Meta Tags Generated via https://www.opengraph.xyz --> */}


    </Head>
}

export default HeadTag