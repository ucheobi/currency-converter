//const API = process.env.REACT_APP_API_URL
const API = "http://localhost:5000"

export const getExchangeRate = ({ amount, from, to}) => {  

    return fetch(`https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amount}`)
        .then(response => response.json())
        .then((item) => {
            const { query:{from,to} , result, date } = item;

            let data = {
                date: date,
                from: `${amount} ${from}`,
                to: `${result} ${to}`,
            };

           return fetch(`${API}/post`, {
                    method: "POST",
                    headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
            .then(() => {
                return data;
            })
            .catch((error) => {
                console.log("There was an error saving your data: ", error);
            });
    })
    .catch((err) => console.log(err));
};


export const getExchangeHistory = () => {
    return fetch(`${API}/history`, {
            method: "GET"
        },
    )
    .then((resp) => {
        return resp.json(resp);
    })
    .catch((error) => {
        console.log("There was an error getting your data: ", error);
    });
}
