import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Generador y editor avanzado de códigos QR - Similar a qrfy.com" />
        <meta name="keywords" content="qr code, generador, editor, personalizar, códigos qr" />
        <meta name="author" content="QR Editor" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        
        {/* Open Graph */}
        <meta property="og:title" content="QR Editor - Generador Avanzado de Códigos QR" />
        <meta property="og:description" content="Crea, edita y personaliza códigos QR profesionales" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://qr-editor.vercel.app" />
        <meta property="og:image" content="/og-image.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="QR Editor - Generador Avanzado de Códigos QR" />
        <meta name="twitter:description" content="Crea, edita y personaliza códigos QR profesionales" />
        <meta name="twitter:image" content="/og-image.png" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
