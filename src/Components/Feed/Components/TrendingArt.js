import React, { Component } from 'react'
import Slidecard from './Slidecard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import axios from 'axios';

export class TrendingArt extends Component {
    constructor(props) {
        super(props);

        this.state = {
            trendArtByTopic: [],
            message: ""
        }
    }

    componentDidMount() {

        //trending articles per topic
        axios({
            method: 'data',
            url: 'https://www.spectrumcet.com/techonicle/trendArtByTopic.php',
        })
            .then((res) => {
                if (res.data.status) {

                    this.setState({
                        trendArtByTopic: res.data.trendArtByTopic,
                        message: res.data.response
                    });


                } else {
                    this.setState({
                        message: res.data.response
                    })
                }
            })
            .catch(console.error());
    }
    render() {
        const { img, responsive} = this.props;
        return (
            <div>
                <Carousel
                    //autoPlay={true}
                    autoPlaySpeed={5000}
                    infinite={true}
                    centerMode={false}
                    arrows
                    slidesToSlide={1}
                    //itemClass="image-item"
                    responsive={responsive}
                    //removeArrowOnDeviceType={["tablet", "mobile"]}
                    className="mb-4">

                    {this.state.trendArtByTopic.map(e => <Slidecard image={img} obj={e} key={e.id} />)}
                </Carousel>
            </div>
        )
    }
}

export default TrendingArt


