export default function paginationArray (page, last) {
    let inner = [1];
    if (page > 4) {
        inner.push("…")
    }
    for (let i = 2; i >= 0; i--) {
        if (!inner.includes(page-i) && page-i > 0) {
            inner.push(page-i)
        }
    }
    if (inner[inner.length-1] == last) {
        return inner;
    }
    for (let i = 1; i < 3; i++) {
        inner.push(page+i)
        if (inner[inner.length-1] == last) {
            return inner;
        }
    }
    if (last - inner[inner.length-1] > 1) {
        inner.push("…");
    }
    inner.push(last);
    return inner;
}