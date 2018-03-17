export default class {
    constructor (opts = {}) {
        this.title = opts.title || 'Title'
        this.summary = opts.summary || 'I am a book.'
        this.info = opts.info || []

        this.id = opts.id || Date.now()
        this.shelf = opts.shelf || null
    }
}
