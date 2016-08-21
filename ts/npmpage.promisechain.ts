import * as plugins from "./npmpage.plugins";
import * as npmpageOptions from "./npmpage.options";
export let run = () => {
    let done = plugins.q.defer();
    npmpageOptions.init()
        .then(() => {
            done.resolve();
        })
    return done.promise;
}