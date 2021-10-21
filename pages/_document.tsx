import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head title={"Mina Authenticated Trade History"}>
          <meta name="description" content="Web site for displaying SnarkyJS" />
          <meta
            name="og:image"
            content="https://storage.googleapis.com/snarkyjs-demo-twitter-image/mina-authenticated.png"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@RECURSIVE_TRADES" />
          <meta
            name="twitter:title"
            content="Mina Authenticated Trade History"
          />
          <meta
            name="twitter:image"
            content="https://storage.googleapis.com/snarkyjs-demo-twitter-image/twitter-card-new.png"
          />
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
