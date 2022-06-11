import { Component } from 'react';
import Menu from '../menu-item/Menu';
import { sections } from '../../section.data';
import './Directory.scss';

class Directory extends Component {
  
    constructor() {
        super();
        this.state = {
          sections: sections
             }
    }
    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({id, ...otherSectionProps}) => (
                    <Menu key={id} {...otherSectionProps} />
                ))}
            </div>
        );
    }
}

export default Directory;