/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import Home from './pages/Home';
import SectionDetail from './pages/SectionDetail';

export default function App() {
  return (
    <div className="min-h-screen bg-troperfly-light font-sans selection:bg-troperfly-blue selection:text-white">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:sectionId" element={<SectionDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

