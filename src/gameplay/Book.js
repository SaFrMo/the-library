export default class {
    constructor (opts = {}) {
        this.title = opts.title || 'Title'
        this.summary = opts.summary || 'I am a book.'
        this.info = opts.info || []
    }
}
