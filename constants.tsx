
import { Report, ReportStatus, UserRole } from './types';

export const MOCK_REPORTS: Report[] = [
  {
    id: '1',
    protocol: 'LC-2024-001',
    poleNumber: 'P-9921',
    address: 'Av. Paulista, 1000 - Bela Vista',
    description: 'Poste piscando intermitente há 3 dias.',
    status: ReportStatus.RESOLVED,
    createdAt: '2024-05-10T10:00:00Z',
    lat: -23.5614,
    lng: -46.6559
  },
  {
    id: '2',
    protocol: 'LC-2024-002',
    poleNumber: 'P-1244',
    address: 'Rua Augusta, 500 - Consolação',
    description: 'Poste completamente apagado em frente à farmácia.',
    status: ReportStatus.PENDING,
    createdAt: '2024-05-11T14:30:00Z',
    lat: -23.5505,
    lng: -46.6333
  },
  {
    id: '3',
    protocol: 'LC-2024-003',
    poleNumber: 'P-3321',
    address: 'Praça da Sé, s/n - Centro',
    description: 'Luminária caída após forte ventania.',
    status: ReportStatus.IN_PROGRESS,
    createdAt: '2024-05-12T09:15:00Z',
    lat: -23.5505,
    lng: -46.6333
  }
];

export const COLORS = {
  primary: '#1d4ed8', // blue-700
  secondary: '#facc15', // yellow-400
  success: '#10b981', // emerald-500
  warning: '#f59e0b', // amber-500
  danger: '#ef4444', // red-500
};