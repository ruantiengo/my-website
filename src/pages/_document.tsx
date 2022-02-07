import Document, { Head, Html, Main, NextScript } from 'next/document'
export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <title>Ruan Tiengo</title>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&family=Raleway:wght@400;700;900&display=swap" rel="stylesheet" />
                    <meta name="google-site-verification" content="VKvJtctxPvbyQc0W-0-YlK_Ga0qTOprdSGAhNkEvvfE" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}