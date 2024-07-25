

// import React from 'react';
// //import { BrowserRouter as Router, Route,} from 'react-router-dom';
// //import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './components/header';
// import Footer from './components/footer';
// import HomePage from './pages/HomePage';
// import AboutUsPage from './pages/AboutUsPage';
// import AcademicsPage from './pages/AcademicPage';
// import AdmissionsPage from './pages/AdmissionsPage';
// import FacultyPage from './pages/FacultyPage';
// import StudentsPage from './pages/StudentsPage';
// import GalleryPage from './pages/GalleryPage';
// import ContactUsPage from './pages/ConatctUsPage';

// const App = () => (
  
//     <div>
//       <Header/>
//       <HomePage/>
//       <AboutUsPage/>
//       <AcademicsPage/>
//        <AdmissionsPage/>
//        <FacultyPage/>
//        <StudentsPage/>
//        <GalleryPage/>
//        <ContactUsPage/> 
//       {/* <Header />
//       <main className="container mt-3">
//         <>
//            <Route path="/" component={HomePage} exact />
//           <Route path="/about" component={AboutUsPage} />
//           <Route path="/academics" component={AcademicsPage} />
//           <Route path="/admissions" component={AdmissionsPage} />
//           <Route path="/faculty" component={FacultyPage} />
//           <Route path="/students" component={StudentsPage} />
//           <Route path="/gallery" component={GalleryPage} />
//           <Route path="/contact" component={ContactUsPage} /> 
           
//         </>
//       </main>
//       <Footer /> */}
//     </div>
  
// );

// export default App;
import React from 'react';
import { useState } from 'react';
import Header from './components/header';
 import Footer from './components/footer';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import AcademicsPage from './pages/AcademicPage';
import AdmissionsPage from './pages/AdmissionsPage';
import FacultyPage from './pages/FacultyPage';
import StudentsPage from './pages/StudentsPage';
import GalleryPage from './pages/GalleryPage';
import ContactUsPage from './pages/ConatctUsPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutUsPage />;
      case 'academics':
        return <AcademicsPage />;
      case 'admissions':
        return <AdmissionsPage />;
      case 'faculty':
        return <FacultyPage />;
      case 'students':
        return <StudentsPage />;
      case 'gallery':
        return <GalleryPage />;
      case 'contact':
        return <ContactUsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div>
      <Header setCurrentPage={setCurrentPage} />
      <main className="container mt-3">
        {renderPage()}
      </main>
       <Footer />
    </div>
  );
};

export default App;
