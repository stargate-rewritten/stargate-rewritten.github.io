window.addEventListener("DOMContentLoaded", (() => {
    let e = document.querySelectorAll('a[href^="#"]');
    var o;
    (o = e) && o.forEach((e => {
        e.addEventListener("click", (o => {
            if (!e.href.includes("#")) return e.target ? void window.open(e.href, "_blank") : void(window.location.href = e.href);
            if (o.preventDefault(), !e.hash.substring(1)) return;
            let t = document.querySelector("section#" + e.hash.substring(1)).offsetTop;
            window.scrollTo({
                top: t - 100,
                behavior: "smooth"
            })
        }))
    }))
}));