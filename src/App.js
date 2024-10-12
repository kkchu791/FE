import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import './App.css';

import {MessageList} from './components/MessageList'
import {MessageForm} from './components/MessageForm'

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <header className="App-header">
          <MessageList />
          <MessageForm />
        </header>
      </div>
    </RecoilRoot>
  );
}

export default App;
