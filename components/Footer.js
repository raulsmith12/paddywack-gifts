import Link from "next/link";

const Footer = () => {
    return (
        <div className="container-fluid px-0 bg-secondary py-3 text-center fixed-bottom">
            <div className="row mx-0">
                <div className="col px-0">
                    <p className="text-white">
                        <Link href="/" className="text-white text-decoration-none">Home</Link>&nbsp;|&nbsp;
                        <Link href="/contact" className="text-white text-decoration-none">Contact</Link>&nbsp;|&nbsp;
                        <Link href="/privacy" className="text-white text-decoration-none">Privacy Policy</Link>
                    </p>
                    <h6 className="text-white">&copy;{(new Date().getFullYear())} PADDYWACK HOMEMADE GIFTS. ALL RIGHTS RESERVED.</h6>
                </div>
            </div>
        </div>
    )
}

export default Footer;