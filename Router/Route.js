export default class Route {
    constructor(url, titre, pathHtml, pathJS = "") {
        this.url = url;
        this.titre = titre;
        this.pathHtml = pathHtml;
        this.pathJS = pathJS;
    }
}