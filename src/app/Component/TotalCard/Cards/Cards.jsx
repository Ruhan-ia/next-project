'use client'
import React, {  useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../Hooks/useMenu';
import CardCategories from '../CardCategory/CardCategory';

const Cards = () => {
    const [coffees, loading] = useMenu()
    const [tabIndex, setTabIndex] = useState(0)
    if (loading) {
      return <div>Loading...</div>;
  }
    const hot = coffees?.filter(coffee => coffee?.category === 'hot')
    const cold = coffees?.filter(coffee => coffee?.category === 'cold')
    const premier = coffees?.filter(coffee => coffee?.category === 'premier')
    
       
        
    
    

    return (
        <>
        <h1 className='font-bold text-4xl flex justify-center mt-20'>Our Menu</h1>
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList className={'flex justify-center mt-10 space-x-7 text-lg'}>
    
    <Tab>Hot</Tab>
    <Tab>Cold</Tab>
    <Tab>Premier</Tab>
  </TabList>
  <TabPanel>
    <CardCategories items={hot}></CardCategories>
  </TabPanel>
  <TabPanel>
    <CardCategories items={cold}></CardCategories>
  </TabPanel>
  <TabPanel>
    <CardCategories items={premier}></CardCategories>
  </TabPanel>
</Tabs>
        </>
    );
};

export default Cards;