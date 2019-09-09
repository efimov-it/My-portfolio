import React from 'react';

class Block extends React.Component{
  render(){
    return (
      <section className="block container">
        <header className="block_header">
          {this.props.title}
        </header>
        <div className="block_content">
          {this.props.children}
        </div>
      </section>
    );
  }
}

export default Block;
