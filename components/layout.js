import Link from 'next/link'
import Head from 'next/head'

export default ({ children, title = 'Trip Assistant' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='defaultLanguage' content='fr' />
      <meta name='availableLanguages' content='fr, en' />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" />
      <link rel="stylesheet" href="/static/styles.css" />
    </Head>

    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <Link href='/'><a className='navbar-brand'>Trip Assistant</a></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link href='/'><a className="nav-link" href="#">Home</a></Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>

    <main role="main" className="container">
        { children }
    </main>

    <footer className="footer">
      <div className="container">
        <span className="text-muted">Trip Assistant made with love, coffee, and heavy metal</span>
      </div>
    </footer>

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
  </div>
);