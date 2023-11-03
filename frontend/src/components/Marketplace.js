const getData = () => {
    fetch('http://127.0.0.1:8000/marketplace/get_products', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        });
    }

const Marketplace = () => {
    const data = getData();
    return (
        <div>
        </div>
    );
};

export default Marketplace;
