import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Service {
  id: number;
  name: string;
}

interface ServicesContextType {
  services: Service[];
  addService: (service: Service) => void;
  removeService: (id: number) => void;
}

const ServicesContext = createContext<ServicesContextType | undefined>(undefined);

export const ServicesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [services, setServices] = useState<Service[]>([
    { id: 1, name: 'Employee Data Management' },
    { id: 2, name: 'Payroll Services'},
    { id: 3, name: 'Leave Management'}
  ]);

  const addService = (service: Service) => {
    setServices((prevServices) => [...prevServices, service]);
  };

  const removeService = (id: number) => {
    setServices((prevServices) => prevServices.filter(service => service.id !== id));
  };

  return (
    <ServicesContext.Provider value={{ services, addService, removeService }}>
      {children}
    </ServicesContext.Provider>
  );
};

export const useServices = (): ServicesContextType => {
  const context = useContext(ServicesContext);
  if (!context) {
    throw new Error('useServices must be used within a ServicesProvider');
  }
  return context;
};
