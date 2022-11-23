import React,{useState} from 'react';
import Heading from '../../components/Shop/Heading';
import Shopproduct from '../../components/Shop/Shopproduct';
import SIdebar from '../../components/Shop/SIdebar';

const Shoppage = (props) => {
  const [search, setSearch] = useState('');
  return (
    <section className="shop__section section--padding">
      <div className="container-fluid">
        <Heading setSearch={setSearch} search={search}/>

        <div className="row">
          <SIdebar />
          <Shopproduct search={search}/>
        </div>
      </div>
    </section>
  );
}

export default Shoppage;