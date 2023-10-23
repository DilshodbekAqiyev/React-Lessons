import { Fragment, useState } from 'react';
import './accordion.css';

function Accardion({}) {
    const [show, setShow] = useState(false);

    return (
        <Fragment>
            <button
                onClick={() => {
                    setShow((prev) => !prev);
                }}
                className="btn"
            >
                {show ? '-' : '+'}
            </button>
            <div className={show ? 'show' : 'hide'}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus incidunt, modi ipsa ut quaerat quisquam
                sapiente. Incidunt aspernatur temporibus vel modi odio itaque, maxime eum cumque ipsa perspiciatis rerum
                aliquam nisi omnis corrupti voluptates voluptatibus. Voluptates quisquam, qui blanditiis et explicabo
                dolorem mollitia inventore delectus possimus voluptatum accusamus sapiente doloribus assumenda minus
                doloremque quos. Blanditiis velit officiis neque delectus, optio tenetur perferendis eos beatae
                laboriosam rerum quibusdam aliquam nihil illo commodi hic! Ducimus nesciunt exercitationem blanditiis,
                quos voluptatem accusamus molestias id dolorem at delectus officia, aperiam unde itaque enim, odio ab
                tempore quasi illo optio? Nemo reprehenderit aperiam distinctio dolore sequi ea vel quia autem totam
                earum nisi consectetur id sint possimus minima nulla accusamus provident dolor repellendus, at modi? Nam
                aliquid eaque nostrum exercitationem quidem veniam accusantium expedita molestias eligendi architecto,
                consequuntur ullam doloremque delectus reiciendis excepturi rerum. Nisi et dolor fugiat quae ipsa
                temporibus libero, aperiam perferendis nihil. Dicta quasi distinctio quo magnam facilis odit?
                Consectetur voluptas dicta pariatur, fuga inventore facilis nesciunt cupiditate ducimus obcaecati
                corrupti, commodi voluptatibus placeat quas provident quos vel molestiae quibusdam laborum! Enim dolorum
                facilis cum sequi amet quam fuga ipsa recusandae, voluptates natus magni possimus placeat minus eveniet,
                itaque fugiat soluta in?
            </div>
        </Fragment>
    );
}

export default Accardion;
