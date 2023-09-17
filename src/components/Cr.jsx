const Cr = (...classes) => {
    return classes.filter(Boolean).join(" ");
}

export default Cr