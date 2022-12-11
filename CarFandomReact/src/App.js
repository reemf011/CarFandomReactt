import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthProvider from './store/AuthProvider';




import CarPages from './pages/CarPages';
import CustomerPage from './pages/CustomerPage';
import CustomerServicePage from './pages/CustomerServicePage';
import FeedbackPage from './pages/FeedbackPage';
import HomePage from './Post/HomePage';
import PostPage from './Post/PostPage';
import ProductsPage from './pages/ProductsPage';
import SigninPage from './Post/SigninPage';
import SignupPage from './Post/SignupPage';
import Supplierspage from './pages/Supplierspage';





const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<h1>HomePage </h1>} />
            <Route path="/Post" element={<PostPage />} />
            <Route path="/Post/:PostId" element={<PostPage />} />
            <Route path="/Post/add" element={<AddPostPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/feedback" element={<FeedbackPage />} />
            <Route path="/car" element={<CarPages />} />

          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  );
  return (
    <div>
      <CarPages/>
    </div>
  );
};

export default App;
