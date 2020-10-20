import React from 'react'

class Carousel extends React.Component {
    state = {
        photos: [],
        active: 0
    }
    static getDerivedStateFromProps({ media }){
        let photos = ['http://placecorgi.com/600/600']
        if (media.length) {
            photos = media.map(({ large }) => large)
        }
        return {photos}
    }
    // arrow function to fix this when the method is used as an 
    // event listener
    handleIndexClick = event => {
        this.setState({
            active: +event.target.dataset.index
        })
    }
    render() {
        const { photos, active } = this.state
        return (
          <div className="carousel">
              <img src={photos[active]} alt="animal" />
              <div className="carousel-smaller">
                  {photos.map((photo, index) => (
                      // eslint-disable-next-line
                      <img
                        key={photo}
                        onClick={this.handleIndexClick}
                        onKeyUp={this.handle}
                        data-index={index}
                        src={photo}
                        className={index === active ? "active" : ""}
                        alt="animal thumbnail"
                      />
                  ))}
              </div>
          </div>

        )
    }
}

export default Carousel