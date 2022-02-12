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
        {/* <!-- Primary Meta Tags --> */}
        {/* <title>Locavex | Konveksi Lokal Lamongan</title> */}
        <meta name="title" content="Locavex | Konveksi Lokal Lamongan" />
        <meta name="description" content="Produsen Kaos Polos dan Sablon DTF Custom" />
        <meta property="og:image" itemProp="image" content={props.image} key="ogimage" />
        <meta property="og:image" itemProp="image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" key="ogimage" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://locavex.vercel.app" />
        <meta property="og:title" content="Locavex | Konveksi Lokal Lamongan" />
        <meta property="og:description" content="Produsen Kaos Polos dan Sablon DTF Custom" />
        <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://locavex.vercel.app" />
        <meta property="twitter:title" content="Locavex | Konveksi Lokal Lamongan" />
        <meta property="twitter:description" content="Produsen Kaos Polos dan Sablon DTF Custom" />
        <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />

    </Head>
}

export default HeadTag