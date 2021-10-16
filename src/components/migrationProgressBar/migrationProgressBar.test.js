import React from 'react'
import MigrationProgressBar from './migrationProgressBar';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

test('results button renders with correct text', () => {
    const {getByTestId} = render(<MigrationProgressBar />);
    const btnEl = getByTestId("btnResults");

    expect(btnEl.textContent).toBe("Show Latest Results");
  })