import Inferno, { render } from 'inferno';
import App from './app';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<App />, div);
});
