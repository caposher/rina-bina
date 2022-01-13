import { Component, createRef } from 'react';

export class HomePage extends Component {
  changeRoute(route) {
    debugger;
    this.props.history.push(route);
  }
  state = {
    mouseX: 0,
  };
  pages = [
    { name: 'branding', txtPos: { x: '160px', y: '170px' }, ref: createRef() },
    { name: 'illustrations', txtPos: { x: '', y: '265px' }, ref: createRef() },
    { name: 'contact', txtPos: { x: '65px', y: '190px' }, ref: createRef() },
  ];

  componentDidMount() {}

  // onMove = (ev) => {
  //   debugger;
  //   this.setState({ mouseX: ev.clientX });
  // };

  // getCenter(element) {
  //   const { left, top, width, height } = element.getBoundingClientRect();
  //   return { x: left + width / 2, y: top + height / 2 };
  // }

  // const arrow = document.querySelector("#arrow");
  // const arrowCenter = getCenter(arrow);
  // addEventListener("mousemove", ({clientX, clientY}) => {
  //     const angle = Math.atan2(clientY - arrowCenter.y, clientX - arrowCenter.x);
  //     arrow.style.transform = `rotate(${angle}rad)`;
  // });

  render() {
    return (
      <section className='home-page'>
        <h1 className='title'>WELCOME</h1>
        <section className='images-container'>
          {this.pages.map((page) => {
            return (
              <div className='image-item' key={page.name}>
                <img
                  className='image-txt'
                  ref={page.ref}
                  style={{ bottom: page.txtPos.y, left: page.txtPos.x }}
                  onClick={() => this.changeRoute(`/${page.name}/`)}
                  src={require(`../assets/imgs/elements/${page.name}-txt.png`)}
                  alt={`${page.name}-page`}
                />
                <img
                  className='image-person'
                  onClick={() => this.changeRoute(`/${page.name}/`)}
                  src={require(`../assets/imgs/elements/${page.name}-page.png`)}
                  alt={`${page.name}-page`}
                />
              </div>
            );
          })}
        </section>
      </section>
    );
  }
}
