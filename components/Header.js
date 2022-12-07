import Link from "next/link";

const Header = () => {
    return (
        <div className="row fixed-top sticky-top">
            <div className="col">
                <nav className="navbar navbar-dark navbar-expand-lg bg-primary py-0">
                    <div className="container-fluid">
                        <Link href="/" className="navbar-brand">
                            <img src="https://paddywackgifts.com/img/logo_white_transparent.png" height="75" alt="Paddy Wack Homemade Gifts" />
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header;