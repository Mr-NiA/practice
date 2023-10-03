const fetchUrl = (count) => {
    console.log(`Fetching ${count}...`);
};

const debounce = (callback, delay = 500) => {
    let timer;

    return (...args) => {
        if (timer) clearTimeout(timer);

        timer = setTimeout(() =>
                callback(args)
            , delay);
    };
};

const fetching = debounce(fetchUrl, 300);

fetching(1);
fetching(3);
fetching(2);
