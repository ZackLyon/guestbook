import React, { createContext, useContext, useState } from 'react';

const NoteContext = createContext();

const NoteProvider = ({ children }) => {
  const [note, setNote] = useState([]);

  return (
    <NoteContext.Provider value={{ note, setNote }}>
      {children}
    </NoteContext.Provider>
  );
};

const useNote = () => {
  const context = useContext(NoteContext);

  if (context === undefined)
    throw new Error(
      'useNote needs to be used on a descendant element of the Provider'
    );

  return context;
};

export { NoteProvider, useNote };
