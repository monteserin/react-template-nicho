import Document, { Html, Head, Main, NextScript } from 'next/document';
import { extractStyles } from '../application/render';

class MyDocument extends Document {
    static getInitialProps(ctx) {
        return extractStyles(ctx);
    }

    render() {
        return (
            <Html>
                <Head>
                    {this.props.styles}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
