import React, {Component} from 'react';
import shop_Data from './shopData';
import CollectionPreview from '../../components/preview_collection/preview_collection'

class shopPage extends Component{
  constructor(props) {
    super(props)

  this.state = {
    collections: shop_Data
  }
}

  render () {
    const {collections} = this.state
    return(
    <div className='shop_Page'>
      {
      collections.map(({id, ...collectionProps}) => (
        <CollectionPreview key={id} {...collectionProps}/>
      ))
      }
    </div>
    )
  }
}

export default shopPage;
