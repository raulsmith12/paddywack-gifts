export default function Custom404() {
    return (
        <>
            <Head>
                <title>404 - Not Found - Paddy Wack Homemade Gifts</title>
                <meta name="description" content="The page you are looking for cannot be found. Please try typing that in again." />
                <meta name="keywords" content="404, page not found" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://paddywackgifts.com/404" />
                <meta property="og:title" content="404 - Not Found - Paddy Wack Homemade Gifts" />
                <meta property="og:description" content="The page you are looking for cannot be found. Please try typing that in again." />
                <meta property="og:image" content="https://paddywackgifts.com/img/banner_white.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://paddywackgifts.com/404" />
                <meta property="twitter:title" content="404 - Not Found - Paddy Wack Homemade Gifts" />
                <meta property="twitter:description" content="The page you are looking for cannot be found. Please try typing that in again." />
                <meta property="twitter:image" content="https://paddywackgifts.com/img/banner_white.png" />
                <link rel="icon" href="favicon.ico" />
            </Head>
            <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-S1GM0NB8JS"/>
            <Script
                id='google-analytics'
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-S1GM0NB8JS', {
                    page_path: window.location.pathname,
                    });
                `,
                }}
            />
            <div className="container mt-5 pt-5">
                <div className="row mt-5 pt-5">
                    <div className="col-4">
                        <img src="https://paddywackgifts.com/img/404-not-found.png" width="100%" alt="404 Page Not Found" />
                    </div>
                    <div className="col-8 mt-5">
                        <h2 className="display-2">Uh oh</h2>
                        <h5>It would appear that you are lost. No worries though. Please use the menu at the top or bottom of this page to find your way back.</h5>
                    </div>
                </div>
            </div>
        </>
    )
}