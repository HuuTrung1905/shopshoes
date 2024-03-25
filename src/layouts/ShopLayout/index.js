import Header from '~/layouts/Components/Header';
import Footer from '~/layouts/Components/Footer';
import Sidebar from './Sidebar';

function ShopLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default ShopLayout;
