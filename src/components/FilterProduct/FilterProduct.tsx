import React, { ChangeEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  SearchTypes as types,
  SearchSpecification as specification,
} from '../../types';
import './FilterProduct.scss';

export const FilterProduct: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleTypeFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;

    if (value) {
      searchParams.set('type', value);
    } else {
      searchParams.delete('type');
    }

    setSearchParams(searchParams);
  };

  const handleSpecificationFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;

    if (value) {
      searchParams.set('specification', value);
    } else {
      searchParams.delete('specification');
    }

    setSearchParams(searchParams);
  };

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <label htmlFor="type-select">
        Type:
        <select name="type" onChange={handleTypeFilter}>
          <option value="">All Types</option>
          {Object.entries(types).map(([name, value]) => (
            <option key={name} value={value}>
              {name}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="specification-select">
        Specification:
        <select name="specification" onChange={handleSpecificationFilter}>
          <option value="">All Specifications</option>
          {Object.entries(specification).map(([name, value]) => (
            <option key={name} value={value}>
              {name}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};