
import React, { useState } from 'react';
import { UserRole } from './types';
import Layout from './components/Layout';
import CitizenApp from './views/CitizenApp';
import AdminDashboard from './views/AdminDashboard';
import FieldTeamApp from './views/FieldTeamApp';
import CentralAdmin from './views/CentralAdmin';
import RoleSelection from './components/RoleSelection';

const App: React.FC = () => {
  const [role, setRole] = useState<UserRole | null>(null);

  if (role === null) {
    return <RoleSelection onSelect={setRole} />;
  }

  const renderContent = () => {
    switch (role) {
      case UserRole.CITIZEN:
        return <CitizenApp />;
      case UserRole.ADMIN:
        return <AdminDashboard />;
      case UserRole.FIELD_WORKER:
        return <FieldTeamApp />;
      case UserRole.SUPER_ADMIN:
        return <CentralAdmin />;
      default:
        return <div className="p-8 text-center">Papel não encontrado.</div>;
    }
  };

  return (
    <Layout activeRole={role} onRoleChange={setRole}>
      <div className="animate-in fade-in duration-500">
        {renderContent()}
      </div>
    </Layout>
  );
};

export default App;