
export enum UserRole {
  SUPER_ADMIN = 'SUPER_ADMIN',
  ADMIN = 'ADMIN',
  FIELD_WORKER = 'FIELD_WORKER',
  CITIZEN = 'CITIZEN'
}

export enum ReportStatus {
  PENDING = 'Aguardando',
  ANALYSIS = 'Em Análise',
  IN_PROGRESS = 'Em Atendimento',
  RESOLVED = 'Concluído',
  REJECTED = 'Rejeitado'
}

export enum PoleStatus {
  OPERATIONAL = 'Operacional',
  MAINTENANCE = 'Em Manutenção',
  OFFLINE = 'Apagado / Defeito',
  CRITICAL = 'Risco Elétrico'
}

export enum ReportCategory {
  LAMP_OFF = 'Lâmpada apagada',
  LAMP_ON_DAY = 'Lâmpada acesa durante dia',
  FLICKERING = 'Lâmpada oscilando',
  VANDALISM = 'Vandalismo',
  OTHER = 'Outro'
}

export interface City {
  id: string;
  name: string;
  state: string;
  logo: string;
  contact: string;
  adminUser: string;
  adminPass: string;
  active: boolean;
}

export interface PartialAdmin {
  id: string;
  name: string;
  accessCode: string; // Numeric only as requested
}

export interface FieldTeam {
  id: string;
  cityId: string;
  name: string;
  accessCode: string; // Numeric access
}

export interface Pole {
  id: string;
  cityId: string;
  code: string; // O número do poste único
  address: string;
  lat: number;
  lng: number;
  status: PoleStatus;
}

export interface Citizen {
  name: string;
  cell: string;
  cpf: string;
  homeAddress: string;
}

export interface Report {
  id: string;
  cityId?: string;
  protocol: string;
  poleNumber: string;
  poleId?: string;
  address: string;
  category?: ReportCategory;
  description: string;
  status: ReportStatus;
  createdAt: string;
  photoUrl?: string;
  citizenName?: string;
  citizenCPF?: string;
  lat?: number;
  lng?: number;
}

export interface ServiceExecution {
  id: string;
  poleId: string;
  cityId: string;
  teamId: string;
  startTime: string;
  endTime: string;
  photoAfter: string;
  notes: string;
  protocolsResolved: string[]; // List of protocol numbers
}