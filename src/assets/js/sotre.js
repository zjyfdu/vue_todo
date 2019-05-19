var storage_key = 'todos-vuejs'

localstore = {
    fetch: function () {
        return JSON.parse(localStorage.getItem(storage_key) || '[]');
    },
    save: function (todos) {
        localStorage.setItem(storage_key, JSON.stringify(todos));
    }
};

module.exports = localstore;