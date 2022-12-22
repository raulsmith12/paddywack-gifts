import Link from "next/link";

const Header = () => {
    return (
        <div className="container-fluid px-0">
            <div className="row mx-0">
                <div className="col px-0">
                    <nav className="navbar navbar-dark navbar-expand-lg bg-primary py-0">
                        <div className="container-fluid">
                            <Link href="/" className="navbar-brand">
                                <img src="https://paddywackgifts.com/img/logo_white_transparent.png" height="54" alt="Paddy Wack Homemade Gifts" />
                            </Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 justify-content-end">
                                    <li className="nav-item px-1">
                                        <Link href="/" className="nav-link">Home</Link>
                                    </li>
                                    <li className="nav-item px-1">
                                        <Link href="/about" className="nav-link">About</Link>
                                    </li>
                                    <li className="nav-item px-1">
                                        <Link href="/shop" className="nav-link">Shop</Link>
                                    </li>
                                    <li className="nav-item px-1">
                                        <Link href="/gallery" className="nav-link">Gallery</Link>
                                    </li>
                                    <li className="nav-item px-1">
                                        <Link href="/" className="nav-link">Contact</Link>
                                    </li>
                                    <li className="nav-item px-1">
                                        <Link href="/" className="nav-link">Join</Link>
                                    </li>
                                    <li className="nav-item px-1">
                                        <Link href="/" className="nav-link">Creator</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header;