import React from 'react'

import PropTypes from 'prop-types'

import './testimonial.css'

const Testimonial = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial-max-width thq-section-max-width">
        <div className="testimonial-container10">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="testimonial-text11 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card1">
                <div className="testimonial-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial-image1"
                  />
                  <div className="testimonial-container13">
                    <strong className="thq-body-large">
                      {props.author1Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text14 thq-body-small">
                  {props.review1}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card2">
                <div className="testimonial-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial-image2"
                  />
                  <div className="testimonial-container15">
                    <strong className="thq-body-large">
                      {props.author2Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text17 thq-body-small">
                  {props.review2}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card3">
                <div className="testimonial-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial-image3"
                  />
                  <div className="testimonial-container17">
                    <strong className="thq-body-large">
                      {props.author3Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text20 thq-body-small">
                  {props.review3}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card4">
                <div className="testimonial-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial-image4"
                  />
                  <div className="testimonial-container19">
                    <strong className="thq-body-large">
                      {props.author4Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text23 thq-body-small">
                  {props.review4}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial.defaultProps = {
  author4Name: 'Michael Brown',
  content1: 'Read what our clients have to say about our services.',
  review3:
    'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, est id varius tincidunt, mi ligula suscipit turpis, ut ultricies sapien arcu sed augue.',
  author4Position: 'COO, Company DEF',
  author4Src:
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzU2NzM0M3w&ixlib=rb-4.0.3&q=80&w=1080',
  author3Alt: 'Image of Alice Johnson',
  heading1: 'Testimonials',
  review1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum mi nec, ultricies metus.',
  author3Name: 'Alice Johnson',
  author2Src:
    'https://images.unsplash.com/photo-1650081221669-fccab00c76a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzU2NzM0M3w&ixlib=rb-4.0.3&q=80&w=1080',
  author2Alt: 'Image of Jane Smith',
  author3Position: 'CTO, Company 123',
  author2Name: 'Jane Smith',
  author3Src:
    'https://images.unsplash.com/photo-1542641760-7a412c60ae1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzU2NzM0M3w&ixlib=rb-4.0.3&q=80&w=1080',
  author1Src:
    'https://images.unsplash.com/photo-1563381013529-1c922c80ac8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzU2NzM0Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  review4:
    'Fusce nec magna id nisl tincidunt rhoncus. Sed vel semper mauris. Integer in ex eu libero varius luctus.',
  author2Position: 'Marketing Manager, Company XYZ',
  author4Alt: 'Image of Michael Brown',
  author1Position: 'CEO, Company ABC',
  author1Name: 'John Doe',
  author1Alt: 'Image of John Doe',
  review2:
    'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
}

Testimonial.propTypes = {
  author4Name: PropTypes.string,
  content1: PropTypes.string,
  review3: PropTypes.string,
  author4Position: PropTypes.string,
  author4Src: PropTypes.string,
  author3Alt: PropTypes.string,
  heading1: PropTypes.string,
  review1: PropTypes.string,
  author3Name: PropTypes.string,
  author2Src: PropTypes.string,
  author2Alt: PropTypes.string,
  author3Position: PropTypes.string,
  author2Name: PropTypes.string,
  author3Src: PropTypes.string,
  author1Src: PropTypes.string,
  review4: PropTypes.string,
  author2Position: PropTypes.string,
  author4Alt: PropTypes.string,
  author1Position: PropTypes.string,
  author1Name: PropTypes.string,
  author1Alt: PropTypes.string,
  review2: PropTypes.string,
}

export default Testimonial
