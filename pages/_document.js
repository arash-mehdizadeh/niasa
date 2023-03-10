import Document, { Html, Head, Main, NextScript } from 'next/document';
import Navbar from '../components/layouts/Navbar';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;
