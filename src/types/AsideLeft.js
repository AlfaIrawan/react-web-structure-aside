import React, { Component } from 'react';
import { Link } from '@reach/router';



class AsideLeft extends Component {

    render() {

        if(typeof this.props.listOfMenu !== "undefined") {
            return(
                <aside id='id-aside-left-container' className='aside-left-container' style={Object.assign({margin: 0, padding: 0, display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'flex-start'}, this.props.containerStyle)}>
                    <ul id='id-aside-left-ul' className='aside-left-ul' style={Object.assign({margin: 0, padding: 0, listStyle: 'none'}, this.props.ulStyle)}>
                        {
                            this.props.listOfMenu.map((menu, i) =>
                                <li key={i} id='id-aside-left-li' className='aside-left-li' style={Object.assign({ margin: '0', padding: '17px 15px', cursor: 'pointer' }, this.props.liStyle)}>
                                    <Link id='id-aside-left-link' className='aside-left-link' style={Object.assign({ textDecoration: 'none', fontSize: 14, cursor: 'pointer', outline: 'none' }, this.props.linkStyle)} onClick={this.props.onClickLic} to={menu.path} >
                                        <div id='id-aside-left-icon-label-container' className='aside-left-icon-label-container' style={Object.assign({ margin: 0, padding: 0 }, this.props.iconLabelContainerStyle)}><label id='id-aside-left-label' className='aside-left-label' style={Object.assign({color: '#000000', cursor: 'pointer'}, this.props.labelStyle)}>{ menu.name }</label></div>
                                    </Link>
                                </li>
                            )
                        }
                    </ul>
                </aside>
            )
        }
        else {
            return(
                <aside id='id-aside-left-container' className='aside-left-container' style={Object.assign({margin: 0, padding: 0, display: 'flex', flex: 1, alignContent: 'center', alignItems: 'center', justifyContent: 'flex-start'}, this.props.containerStyle)}>
                    <ul id='id-aside-left-ul' className='aside-left-ul' style={Object.assign({margin: 0, padding: 0, listStyle: 'none'}, this.props.ulStyle)}>
                        <li id='id-aside-left-li-1' className='aside-left-li' style={Object.assign({ margin: '0', padding: '17px 15px', cursor: 'pointer' }, this.props.liStyle)}>
                            <Link id='id-aside-left-link-1' className='aside-left-link' style={Object.assign({ textDecoration: 'none', fontSize: 14, cursor: 'pointer', outline: 'none' }, this.props.linkStyle)} to='/'>
                                <div id='id-aside-left-icon-label-container-1' className='aside-left-icon-label-container' style={Object.assign({ margin: 0, padding: 0 }, this.props.iconLabelContainerStyle)}><label id='id-aside-left-label-1' className='aside-left-label' style={Object.assign({color: '#000000', cursor: 'pointer'}, this.props.labelStyle)}>Menu 1</label></div>
                            </Link>
                        </li>
                        <li id='id-aside-left-li-2' className='aside-left-li' style={Object.assign({ margin: '0', padding: '17px 15px', cursor: 'pointer' }, this.props.liStyle)}>
                            <Link id='id-aside-left-link-2' className='aside-left-link' style={Object.assign({ textDecoration: 'none', fontSize: 14, cursor: 'pointer', outline: 'none' }, this.props.linkStyle)} to='/'>
                                <div id='id-aside-left-icon-label-container-2' className='aside-left-icon-label-container' style={Object.assign({ margin: 0, padding: 0 }, this.props.iconLabelContainerStyle)}><label id='id-aside-left-label-2' className='aside-left-label' style={Object.assign({color: '#000000', cursor: 'pointer'}, this.props.labelStyle)}>Menu 2</label></div>
                            </Link>
                        </li>
                        <li id='id-aside-left-li-3' className='aside-left-li' style={Object.assign({ margin: '0', padding: '17px 15px', cursor: 'pointer' }, this.props.liStyle)}>
                            <Link id='id-aside-left-link-3' className='aside-left-link' style={Object.assign({ textDecoration: 'none', fontSize: 14, cursor: 'pointer', outline: 'none' }, this.props.linkStyle)} to='/'>
                                <div id='id-aside-left-icon-label-container-3' className='aside-left-icon-label-container' style={Object.assign({ margin: 0, padding: 0 }, this.props.iconLabelContainerStyle)}><label id='id-aside-left-label-3' className='aside-left-label' style={Object.assign({color: '#000000', cursor: 'pointer'}, this.props.labelStyle)}>Menu 3</label></div>
                            </Link>
                        </li>
                        <li id='id-aside-left-li-4' className='aside-left-li' style={Object.assign({ margin: '0', padding: '17px 15px', cursor: 'pointer' }, this.props.liStyle)}>
                            <Link id='id-aside-left-link-4' className='aside-left-link' style={Object.assign({ textDecoration: 'none', fontSize: 14, cursor: 'pointer', outline: 'none' }, this.props.linkStyle)} to='/'>
                                <div id='id-aside-left-icon-label-container-4' className='aside-left-icon-label-container' style={Object.assign({ margin: 0, padding: 0 }, this.props.iconLabelContainerStyle)}><label id='id-aside-left-label-4' className='aside-left-label' style={Object.assign({color: '#000000', cursor: 'pointer'}, this.props.labelStyle)}>Menu 4</label></div>
                            </Link>
                        </li>
                        <li id='id-aside-left-li-5' className='aside-left-li' style={Object.assign({ margin: '0', padding: '17px 15px', cursor: 'pointer' }, this.props.liStyle)}>
                            <Link id='id-aside-left-link-5' className='aside-left-link' style={Object.assign({ textDecoration: 'none', fontSize: 14, cursor: 'pointer', outline: 'none' }, this.props.linkStyle)} to='/'>
                                <div id='id-aside-left-icon-label-container-5' className='aside-left-icon-label-container' style={Object.assign({ margin: 0, padding: 0 }, this.props.iconLabelContainerStyle)}><label id='id-aside-left-label-5' className='aside-left-label' style={Object.assign({color: '#000000', cursor: 'pointer'}, this.props.labelStyle)}>Menu 5</label></div>
                            </Link>
                        </li>
                    </ul>
                </aside>
            )

        }
    }

}

export default AsideLeft;