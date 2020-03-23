export default x => {
    return x.toString()
        .replace(',', '.')
        .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
