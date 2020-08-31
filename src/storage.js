const store = window.localStorage

const Storage = {
    set (key, value) {
        store.setItem(key, JSON.stringify(value))
    },
    get (key) {
        let val = store.getItem(key)
        return JSON.parse(val)
    },
    has (key) {
        return this.get(key) !== null
    },
    delete (key) {
        store.removeItem(key)
    },
    clear() {
        store.clear()
    }
}

export default Storage