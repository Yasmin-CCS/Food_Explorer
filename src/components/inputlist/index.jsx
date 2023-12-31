import { Container } from './styles';
import Select from 'react-select'
import ThemeContext from '../../styles/theme';
import React, { useState, useContext } from 'react';

export function InputList() {
  const options = [
    { value: 'refeicoes', label: 'Refeição' },
    { value: 'pratos principais', label: 'Prato Principal' },
    { value: 'sobremesas', label: 'Sobremesas' },
    { value: 'bebidas', label: 'Bebidas' }
  ]

  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const customStyles = ({
    control: (provided, state) => ({
      ...provided,
      backgroundColor: 'transparent',
      border: 'none',
      display: 'flex',
      width: '100%',
      padding: '16px',
      justifyContent: 'space-between',
      fontFamily: 'Roboto',
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: '160%',
      boxShadow: state.isFocused ? 'none' : null,
      '&:hover': {
        border: 'none',
      },
    }),

    dropdownIndicator: (provided) => ({
      ...provided,
      fontSize: '50px',
    }),
    
  placeholder: (provided) => ({
    ...provided,
    display: 'flex',
    alignItems: 'center',
    color:'#C4C4CC',
  }),

  indicatorSeparator: () => ({
    display: 'none', // Remove a barra entre o placeholder e a seta
  }),

    menu: (provided, state) => ({
      ...provided,
      backgroundColor: "#0D1D25",
      borderRadius: '10px',
      color:'#C4C4CC',
    }),

    singleValue: (provided) => ({
      ...provided,
      color:'#C4C4CC',
    }),

    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? 'transparent'  : 'transparent',
      color:'#C4C4CC',
      '&:hover': {
        backgroundColor: `#E1E1E6`,
        color :'#000000',
      },
    }),
  });


  return (
    <Container>

      <Select 
        styles={customStyles}
        options={options}
        placeholder="Selecione um item"
        className='input'
        value={selectedOption}
        onChange={handleSelectChange}
      />
      <input
        type="hidden"
        value={selectedOption ? selectedOption.value : ''}
        readOnly
      />
    </Container>
  );
}


