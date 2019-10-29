
import dev from './../config/dev';
import prod from './../config/prod';

const environment = () => {
    if (process.env.NODE_ENV === "production") {
        return prod;
    }
    return dev
}

export default environment();