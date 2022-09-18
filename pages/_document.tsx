import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link
                    rel="preload"
                    href="/fonts/NetflixSans-Regular.otf"
                    as="font"
                    crossOrigin="anonymously"
                ></link>
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}