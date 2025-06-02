import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'

import {
  HomePage,
  NotFoundPage,
} from './pages'
import Layout from './layout'

const IS_PROD = import.meta.env.PROD;

const Content = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

if (IS_PROD) {
  createRoot(document.getElementById('root')!).render(
    <Content />,
  )
} else {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <Content />
    </StrictMode>,
  )
}
