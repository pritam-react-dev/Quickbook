import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const CredentialLayout = lazy(() => import("../layout/CredentialLayout"));
const Layout = lazy(() => import("../layout"));
const Credential = lazy(() => import("../Pages/Credentials"));
const Dashboard = lazy(() => import("../Pages/Dashboard"));
const Accounting = lazy(() => import("../Pages/Accounting"));
const Bills = lazy(() => import("../Pages/Accounting/Bills"));
const Receipts = lazy(() => import("../Pages/Accounting/Receipts"));
const Reconcile = lazy(() => import("../Pages/Accounting/Reconcile"));
const AccountChart = lazy(() => import("../Pages/Accounting/AccountChart"));
const Banking = lazy(() => import("../Pages/Banking"));
const ExpenseReport = lazy(() => import("../Pages/Reports/ExpenseReport"));
const Reports = lazy(() => import("../Pages/Reports"));
const Contacts = lazy(() => import("../Pages/Contacts"));
const AllContacts = lazy(() => import("../Pages/Contacts/AllContacts"));
const Customers = lazy(() => import("../Pages/Contacts/Customers"));
const Suppliers = lazy(() => import("../Pages/Contacts/Suppliers"));
const Invoicing = lazy(() => import("../Pages/Invoicing"));
const AllBills = lazy(() => import("../Pages/Invoicing/AllBills"));
const ProductAndServices = lazy(() =>
  import("../Pages/Invoicing/ProductAndServices")
);
const Queries = lazy(() => import("../Pages/Queries"));

const AppRoutes = () => {
  const isAuthenticated = true;
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {!isAuthenticated ? (
          <Route path="/" element={<CredentialLayout />}>
            <Route index element={<Credential />} />
          </Route>
        ) : (
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={<Navigate replace to="/accounting/chart-of-accounts" />}
            />
            <Route path="dashboard" element={<Dashboard />} />

            <Route path="accounting" element={<Accounting />}>
              <Route path="chart-of-accounts" element={<AccountChart />} />
              <Route path="bills" element={<Bills />} />
              <Route path="receipts" element={<Receipts />} />
              <Route path="reconcile" element={<Reconcile />} />
            </Route>

            <Route path="banking" element={<Banking />} />

            <Route path="reports" element={<Reports />}>
              <Route path="expense-report" element={<ExpenseReport />} />
            </Route>

            <Route path="contacts" element={<Contacts />}>
              <Route path="all-contacts" element={<AllContacts />} />
              <Route path="customers" element={<Customers />} />
              <Route path="suppliers" element={<Suppliers />} />
            </Route>

            <Route path="invoicing" element={<Invoicing />}>
              <Route path="all-bills" element={<AllBills />} />
              <Route
                path="product-&-services"
                element={<ProductAndServices />}
              />
            </Route>

            <Route path="queries" element={<Queries />} />
          </Route>
        )}
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
