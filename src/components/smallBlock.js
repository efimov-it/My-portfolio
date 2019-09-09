import React from 'react';

class SmallBlock extends React.Component{
  render(){
    return(
      <section className="small-block container" img={this.props.img}>
        <header className="small-block_header">
          {this.props.title}
        </header>
        <div className="small-block_content">
          {this.props.children}
        </div>
      </section>
    );
  }
}

export default SmallBlock;
