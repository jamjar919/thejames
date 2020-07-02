export default (handler, delay) => {
    let timeoutId;
    return function() {
        const context = this, args = arguments;
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            timeoutId = null;
            handler.apply(context, args);
        }, delay);
    }
}