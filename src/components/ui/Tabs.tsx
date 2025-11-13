import React, { useState, createContext, useContext } from 'react';
type TabsContextType = {
  value: string;
  onChange: (value: string) => void;
};
const TabsContext = createContext<TabsContextType | undefined>(undefined);
export function Tabs({
  defaultValue,
  onValueChange,
  children
}: {
  defaultValue: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
}) {
  const [value, setValue] = useState(defaultValue);
  const handleChange = (newValue: string) => {
    setValue(newValue);
    if (onValueChange) {
      onValueChange(newValue);
    }
  };
  return <TabsContext.Provider value={{
    value,
    onChange: handleChange
  }}>
      <div className="tabs-container">{children}</div>
    </TabsContext.Provider>;
}
export function TabsList({
  children
}: {
  children: React.ReactNode;
}) {
  return <div className="inline-flex p-1 bg-gray-100 rounded-lg">{children}</div>;
}
export function TabsTrigger({
  value,
  children
}: {
  value: string;
  children: React.ReactNode;
}) {
  const context = useContext(TabsContext);
  if (!context) throw new Error('TabsTrigger must be used within Tabs');
  const isActive = context.value === value;
  return <button className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${isActive ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'}`} onClick={() => context.onChange(value)}>
      {children}
    </button>;
}
export function TabsContent({
  value,
  children
}: {
  value: string;
  children: React.ReactNode;
}) {
  const context = useContext(TabsContext);
  if (!context) throw new Error('TabsContent must be used within Tabs');
  if (context.value !== value) {
    return null;
  }
  return <div className="tabs-content">{children}</div>;
}