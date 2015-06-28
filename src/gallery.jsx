var GalleryImage = React.createClass({

    setActive: function () {
        this.props.onActive(this.props.index);
    },

    // as soon as the user hovers with the mouse on one of the
    // thumbnails we prefetch the full image.
    prefetch: function () {
        var img = new Image();
        img.src = this.props.full;
    },

    render: function () {

        var classString = '';

        if (this.props.thumb) {
            classString = ' thumb';
        }

        if (this.props.isActive) {
            classString += ' active';
        }

        return (
            <div className={classString} onClick={this.setActive}>
                <img
                    src={this.props.thumb?this.props.thumb:this.props.full}
                    alt={this.props.alt}
                    onMouseEnter={this.prefetch}
                    />
            </div>
        );
    }
});

var Gallery = React.createClass({

    getInitialState: function () {

        var active = 0;

        // Find the main image
        images.forEach(function (image, index) {
            if (image.active) {
                return active = index;
            }
        });

        return {
            data: images,
            active: active
        };
    },

    setActiveImage: function (imageKey) {
        this.setState({
            active: imageKey
        });
    },

    render: function () {
        var that = this;

        var thumbNodes = this.props.images.map(function (image, index) {
            return (
                <GalleryImage
                    key={index}
                    index={index}
                    alt={image.alt}
                    thumb={image.thumb}
                    full={image.full}
                    isActive={that.state.active === index}
                    onActive={that.setActiveImage}
                    />
            );
        });

        var image = this.state.data[this.state.active];
        return (
            <div className="gallery">
                <GalleryImage full={image.full} alt={image.alt} isActive={true}/>
                <div className="thumbs">
                    {thumbNodes}
                </div>
            </div>
        );
    }
});