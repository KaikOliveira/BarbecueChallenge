import { render } from '@testing-library/react';

import { Header } from '.';

it('should render Header', () => {
  const { getByText } = render(<Header title={true} small={false} />);

  expect(getByText('Agenda de Churras')).toBeInTheDocument();
});
