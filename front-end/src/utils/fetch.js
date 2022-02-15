const fetchUtils = (setTodos) => {
    fetch('http://localhost:3001/')
        .then((response) => response.json())
        .then((data) => {
            setTodos(data)
            console.log(data);
        })
        .catch((erro) => console.log(erro, 'quebrou'));
}

module.exports = fetchUtils;
