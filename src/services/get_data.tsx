
export default function getData() {
    return fetch('/data/dados_1.json')
        .then(response => response.json())
        .then(data => {
            const arrData = Object.values(data);

            console.log(arrData);

            return arrData;
        });

}