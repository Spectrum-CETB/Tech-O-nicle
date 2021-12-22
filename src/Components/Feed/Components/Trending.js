import React, { Component } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import axios from "axios";
import Feeds from './Feeds.js'

export class Trending extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tags: [],
            message: ""
        }
    }
    componentDidMount() {

        axios({
            method: 'data',
            url: 'https://www.spectrumcet.com/techonicle/trendingTopics.php',
        })
            .then((res) => {
                if (res.data.status) {
                    this.setState({
                        tags: res.data.tags,
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

        const tag = Object.keys(this.state.tags);
        return (
            <div style={{ backgroundColor: 'wheat' }} className="pt-3 pb-2" >
                <div className="mb-0 pe-4" style={{ padding: '0px 15px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div className="live mt-1 mb-0 ms-2">
                        <h3 className="m-0 mb-1">Trending Topics</h3>
                    </div>
                </div>
                <Carousel className='py-1'
                    autoPlay={true}
                    autoPlaySpeed={2000}
                    infinite={true}
                    centerMode={true}
                    showDots={true}
                    arrows
                    slidesToSlide={1}
                    removeArrowOnDeviceType={["superLargeDesktop", "desktop", "tablet", "mobile"]}
                    //itemClass="image-item"
                    responsive={this.props.reponsive}
                //removeArrowOnDeviceType={["tablet", "mobile"]}
                >
                    {tag.map(e => <Feeds /*img={`/images/${e}.webp`}*/ val={e} key={e} />)}
                </Carousel>
            </div >
        )
    }
}

export default Trending

