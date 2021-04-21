import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';
import { useTitle } from './Components/Hooks/useTitle';

const firebaseConfig = {
  apiKey: 'AIzaSyBWBXtXcRm8xtsooS41Hz3lZ_pXDoS5_TQ',
  authDomain: 'delivery-b4ae7.firebaseapp.com',
  databaseURL:
    'https://delivery-b4ae7-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'delivery-b4ae7',
  storageBucket: 'delivery-b4ae7.appspot.com',
  messagingSenderId: '345556631782',
  appId: '1:345556631782:web:abaf61ce48acd018b2bb27',
};
firebase.initializeApp(firebaseConfig);

function App() {
  const auth = useAuth(firebase.auth);
  const openItem = useOpenItem();
  const orders = useOrders();
  useTitle(openItem.openItem);

  return (
    <React.Fragment>
      <GlobalStyle />
      <NavBar {...auth} />
      <Order
        {...orders}
        {...openItem}
        {...auth}
        firebaseDatabase={firebase.database}
      />
      <Menu {...openItem} />
      {openItem.openItem && <ModalItem {...openItem} {...orders} />}
    </React.Fragment>
  );
}

export default App;
