import Header from '~/layouts/Components/Header';
import Footer from '~/layouts/Components/Footer';

function HomeLayout({ children }) {
    return (
        <div className="flex flex-col items-center">
            <Header />
            <div className="w-[90rem] min-h-[60rem] bg-cyan-600">
                <div className="content">{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default HomeLayout;
