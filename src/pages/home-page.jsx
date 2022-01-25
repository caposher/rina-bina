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
    { name: 'branding', ref: createRef() },
    { name: 'illustrations', ref: createRef() },
    { name: 'contact', ref: createRef() },
  ];

  componentDidMount() {
    document.addEventListener('mousemove', (e) => {
      const { pageX, pageY } = e;
      const els = document.querySelectorAll('.image-txt');
      els.forEach((el, idx) => {
        const { left, top, width, height } = el.getBoundingClientRect();
        const center = this.getCenter(left, top, width, height);
        let len = window.innerWidth - center.x;
        if (len < window.innerWidth / 2) len = center.x;
        let angleX = (40 / window.innerWidth) * pageX - 20;
        let angleY = -(40 / window.innerHeight) * pageY + 20;

        if (left <= pageX && pageX <= left + width && top <= pageY && pageY <= top + height) {
          el.style.transform = `scale(1.1)`;
        } else {
          el.style.transform = `rotateY(${angleX}deg)rotateX(${angleY}deg)`;
        }
      });
    });
  }

  getCenter(left, top, width, height) {
    // const { left, top, width, height } = element.getBoundingClientRect();
    return { x: left + width / 2, y: top + height / 2 };
  }

  render() {
    return (
      <section className='home-page'>
        <h1 className='title'>WELCOME</h1>
        <section className='images-container'>
          {this.pages.map((page, idx) => {
            return (
              <div className='image-item' key={page.name}>
                <img
                  className={`image-txt image-txt-${idx + 1}`}
                  ref={page.ref}
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
